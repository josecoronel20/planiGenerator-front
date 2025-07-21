import { FormData } from "@/types/formRoutineTypes";

export const buildUserPrompt = (data: FormData) => {
  const { trainingDays, split, experience, priority, injuries } = data;

  const inputData = `exp:${experience},dias:${trainingDays},split:${split},prioridad:${priority}.las reps de cada sets siempre comienzan en 8. `;

  const injuryLine = injuries
    ? `Ten en cuenta la siguiente lesión: ${injuries}, reemplazá ejercicios si es necesario.`
    : "";

  return `
${inputData}
${injuryLine}

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
]
`.trim();
};
