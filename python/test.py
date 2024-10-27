import requests

URL = 'https://xl666.pythonanywhere.com/registro'

def mandar_post(nombre, matricula, carrera, semestre, url=URL):

    try:
        datos = {'nombre': nombre, 
                 'matricula': matricula, 
                 'carrera': carrera, 
                 'semestre': semestre}
        respuesta = requests.post(url, data=datos)
        if respuesta.status_code == 200:
            return respuesta.text
        else:
            print('Algo salió mal')
            exit(1)
    except:
        print('Que paso???')
        exit(1)

if __name__ == '__main__':
    html = mandar_post('Victor', "asda015931", "Redes", "7")
    print(html)