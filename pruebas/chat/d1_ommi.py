import ollama

requerimiento = "El usuario ingresa su email y contraseña y el sistema autentifica los datos."

response = ollama.systemone (
    model='d1-omni:600m',
    state = requerimiento, 
    questions = {

        'condicion': {
            'type' : 'noul',
            'instructions' : '¿Incluye una situacion que detona el cuento',

            'criteria': {
                'true': 'Especifica claramente el evento o situacion detonante',
                'false': 'No menciona que situacion dispara la accion',
            }
        }
    }
)
condicion = response.answers['condicion'].noul

if condicion >= 0.05:
    print(f"1. Cumple con la condición : {condicion}")

else:
    print(f"1. No cumple con la condicion: {condicion}")