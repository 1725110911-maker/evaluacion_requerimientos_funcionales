import ollama

requerimiento = "Cuando el usuario presiona el botón de asignar equipo, el sistema de asignación debe evaluar las habilidades del usuario en la base de datos en la tabla usuarios, verificando que los integrantes del equipo tengan sinergia entre ellos."

response = ollama.systemone(
    model='d1-omni:600m',
    state=requerimiento, 
    questions={
        'condicion': {
            "type": "noul",
            "instructions": "¿El texto incluye una condición o evento disparador (ej. 'Cuando...', 'Si...', 'Al hacer clic...')?",
            "criteria": {
                "true": "El texto especifica claramente qué evento o acción del usuario inicia el proceso.",
                "false": "No especifica ningún evento o acción desencadenante."
            }
        }
    }
)

condicion = response.answers['condicion'].noul

if condicion >= 0.05:
    print(f"1. Cumple con la condición : {condicion}")
else:
    print(f"1. No cumple con la condición: {condicion}")