async function evaluacion() {
    try {
        const uri = "https://potential-pancake-9qr7vvxw752p66p-11434.app.github.dev/v1/systemone";
        const requerimiento = "Cuando el usuario ingresa su email y contraseña, el sistema evalúa si es válido o no";

        const data = {
            model: 'd1-omni:600m',
            state: requerimiento, 
            questions: {
                'condicion': {
                    "type": "noul",
                    "instructions": "¿El texto incluye una condición o evento disparador (ej. 'Cuando...', 'Si...', 'Al hacer clic...')?",
                    "criteria": {
                        "true": "El texto especifica claramente qué evento o acción del usuario inicia el proceso.",
                        "false": "No especifica ningún evento o acción desencadenante."
                    }
                }
            }
        };

        const response = await fetch(
            uri,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(data)
            }
        );

        const resultado = await response.json();
        console.log("Conexión con la API exitosa:", resultado);

    } catch (error) {
        console.log("Ups, algo falló:", error.message);
    }
}