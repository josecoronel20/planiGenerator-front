import { FormData } from "./types/formRoutineTypes";

const promptGenerator = (data: FormData) => {
  const { trainingDays, split, experience, priority, injuries } = data;
  const prompt = `exp:${experience},dias:${trainingDays},split:${split},prioridad:${priority},lesiones:${injuries}.Generá una rutina personalizada de hipertrofia para gimnasio en formato JSON, organizada por día según el split y la cantidad de días indicados.

Adaptá la dificultad y selección de ejercicios según el nivel de experiencia indicado (b = básico, i = intermedio, a = avanzado).
- Para básico, usá ejercicios simples, con menor volumen e intensidad.
- Para intermedio, usá variantes moderadas.
- Para avanzado, incluí mayor volumen, ejercicios más complejos y variedad.

${
  injuries
    ? "Evitá ejercicios que puedan generar estrés sobre las zonas lesionadas indicadas. Si es necesario, reemplazá por variantes más seguras."
    : ""
}

Priorizá ejercicios eficientes según evidencia científica y biomecánica.  
Por ejemplo, para pecho preferí ejercicios inclinados con mancuernas o poleas por su activación superior y menor riesgo articular, evitando banco plano tradicional si no aporta ventajas.

Para cada día, listá ejercicios con su cantidad de series.  
No incluyas repeticiones, explicaciones ni días específicos (solo día 1, día 2, etc.).  
Respondé exclusivamente con un objeto JSON con esta estructura:

{
      "1": [
        {
          "id": "exercise1",
          "exercise": "press inclinado con mancuernas",
          "sets": [8, 8, 8, 8],
          "wheight": 0
        },
        {
          "id": "exercise2",
          "exercise": "cruce de poleas alto a bajo",
          "sets": [8, 8, 8],
          "wheight": 0
        },
        
        ...
      ],
  "2": [ ... ],
  ...
}

Incluí todos los días especificados, sin omitir ninguno.

    `;
  return prompt;
};

export default promptGenerator;
