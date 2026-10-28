async function evaluacion() {
    try{

        const uri = "http://localhost:11434/v1/systemone";
        const requerimiento = "El usuario ingresa su email y contraseña, y el sistema y el sistema evalua si es valido o no";

        const data = {
                model : 'd1-omni:600m',
                state : requerimiento, 
                questions : {
                    'condicion': {
                        "type": "noul",
                        "instructions": "¿El texto incluye una condición o evento disparador (ej. 'Cuando...', 'Si...', 'Al hacer clic...')?",
                        "criteria": {
                            "true": "El texto especifica claramente qué evento o acción del usuario inicia el proceso.",
                            "false": "No especifica ningún evento o acción desencadenante."
                        }
                    }
                }
        }

        const responde = await fetch(
            uri,
            {
                method:"POST",
                headers: {
                    "Content-Type" : "application/json"
                }, 
                body: JSON.stringify(data)
            }
        );

        const resultado = await responde.json();

        console.log("Conexión con la API exitosa:", resultado);

    } catch (error) {
        console.log("Ups algo fallo ", error.message);
    }
}