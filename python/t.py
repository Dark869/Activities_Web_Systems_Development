from itertools import product

def generar_variantes(palabra):
    # Definimos las reglas de transformación
    transformaciones = {
        'e': '3',
        'o': '0',
        'i': '1',
    }

    # Lista para guardar las posibles variantes
    variantes = ['']

    for caracter in palabra:
        if caracter in transformaciones and caracter not in 'áéíóú':
            # Duplicamos las variantes actuales y aplicamos la transformación
            nuevas_variantes = [v + caracter for v in variantes] + [v + transformaciones[caracter] for v in variantes]
            variantes = nuevas_variantes
        else:
            # Si el caracter no tiene transformación o tiene acento, lo añadimos tal cual
            variantes = [v + caracter for v in variantes]

    return variantes

# Ejemplo de uso
palabra = "bienvenido"
variantes = generar_variantes(palabra)
print(variantes)