import { FormData } from "./types/formRoutineTypes";

const promptGenerator = (data: FormData) => {
  const { trainingDays, split, experience, priority, injuries } = data;

  const prompt = `exp:${experience},dias:${trainingDays},split:${split},prioridad:${priority}${
    injuries ? `,lesiones:${injuries}` : ""
  }.

Generá una rutina de hipertrofia en JSON: array de arrays, cada subarray = día. Solo ejercicios + series, sin días ni reps. Adaptá según exp (b: básico, i: intermedio, a: avanzado). Usá ejercicios generales (barra, mancuernas, polea, peso corporal), evitá máquinas específicas.

Estructura con base científica: priorizá ejercicios óptimos para hipertrofia, evitá movimientos populares pero ineficientes (ej: preferí press inclinado mancuernas vs press banca plano).

${
  injuries
    ? `ten en cuenta la siguiente lesión: ${injuries}, reemplazá ejercicios si es necesario.`
    : ""
}

Formato exacto:

[
  [
    { "id": "ex01", "exercise": "press inclinado mancuernas", "sets": [8,8,8], "weight": 0 },
    { "id": "ex02", "exercise": "cruce poleas", "sets": [8,8,8], "weight": 0 }
  ],
  [
    { "id": "ex03", "exercise": "jalón al pecho", "sets": [8,8,8,8], "weight": 0 },
    { "id": "ex04", "exercise": "remo barra", "sets": [8,8,8], "weight": 0 }
  ]
]`;

  return prompt;
};

export default promptGenerator;
