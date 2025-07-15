"use client";

import type React from "react";

import { useState } from "react";
import {
  ChevronDown,
  Brain,
  Compass,
  BookOpen,
  TrendingUp,
  CheckCircle,
  AlertTriangle,
  X,
  Lightbulb,
  Gamepad2,
} from "lucide-react";

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({
  title,
  icon,
  children,
  isOpen,
  onToggle,
}: AccordionItemProps) {
  return (
    <div className="bg-gray-800 rounded-lg border border-gray-600 overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="text-[#e63946]">{icon}</div>
          <h3 className="text-white font-semibold">{title}</h3>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <div className="border-t border-gray-600 pt-4">{children}</div>
        </div>
      )}
    </div>
  );
}

export default function TrainingGuide() {
  const [openAccordions, setOpenAccordions] = useState<{
    [key: string]: boolean;
  }>({});

  const toggleAccordion = (key: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const enQueCreemosItems = [
    "Entrenar con control",
    "Sin dolor articular",
    "Sin comparaciones",
    "Calidad antes que cantidad",
  ];

  const principiosBasicosItems = [
    "No necesitás levantar mucho peso para progresar.",
    "Subir o bajar de peso corporal depende más de la dieta que del entrenamiento.",
    "La sobrecarga progresiva también se logra sumando repeticiones.",
    "Cada repetición debe ser controlada, sin trampa, sin impulso.",
  ];

  const comoProgresarItems = [
    "Mantené el mismo peso hasta alcanzar el rango máximo de repeticiones.",
    "Si podés hacer más reps con buena forma → recién ahí aumentá el peso.",
    "Subir 1 repetición por semana como máximo.",
    "Después de subir peso, reiniciá desde el rango bajo de reps.",
  ];

  const queEsUnaBuenaEjecucionItems = [
    { title: "Movimiento", description: "Lento y controlado" },
    { title: "Rango", description: "Completo sin acortar" },
    { title: "Impulso", description: "Sin usar impulso" },
    {
      title: "Sensación",
      description: "Sentir el músculo, no las articulaciones",
    },
  ];

  const siSientoDolorItems = [
    "Revisá la ejecución y el peso.",
    "Si sigue molestando, cambiá el ejercicio por otro similar.",
    "Siempre priorizá salud > rendimiento.",
  ];

  const erroresComunesItems = [
    "Subir el peso demasiado pronto.",
    "Hacer repeticiones incompletas.",
    'Usar mala técnica para "terminar como sea".',
    "No registrar el progreso.",
  ];

  const tipsExtraItems = [
    {
      title: "Consistencia",
      description: "La última repetición debe parecerse a la primera.",
      color: "yellow",
    },
    {
      title: "Velocidad",
      description: "Más lento = más efectivo.",
      color: "blue",
    },
    {
      title: "Intensidad",
      description: 'No hace falta terminar "agotado" para que sirva.',
      color: "green",
    },
    {
      title: "Comparación",
      description:
        "Comparate con tu versión de la semana pasada, no con otros.",
      color: "purple",
    },
  ];

  const comoUsarEstaAppItems = [
    "Seguí la rutina generada, bloque por bloque.",
    "Mantené el mismo peso hasta alcanzar el tope de reps sugeridas.",
    "Anotá siempre tus repeticiones.",
    "No modifiques ejercicios sin razón clara.",
    "Ante molestias, cambiá el ejercicio (la app debería permitirlo pronto).",
  ];

  return (
    <div className="min-h-screen bg-black pt-16">
      <div className="max-w-4xl mx-auto p-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#e63946] rounded-full flex items-center justify-center">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">
              Guía y Consejos de Entrenamiento
            </h1>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Aprende a entrenar de forma segura y eficiente, priorizando la
            técnica y la progresión inteligente.
          </p>
        </div>

        <div className="space-y-6">
          {/* En qué creemos - Bloque fijo */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <Compass className="h-6 w-6 text-[#e63946]" />
              <h2 className="text-xl font-bold text-white">En qué creemos</h2>
            </div>
            <div className="bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg p-4 mb-4">
              <p className="text-gray-300 text-center font-medium">
                Nuestro enfoque se basa en progresar de forma segura y
                eficiente, mejorando la ejecución de repeticiones antes que
                aumentar el peso.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enQueCreemosItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg"
                >
                  <div className="w-2 h-2 bg-[#e63946] rounded-full"></div>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Principios básicos - Bloque fijo */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-3 mb-4">
              <BookOpen className="h-6 w-6 text-[#e63946]" />
              <h2 className="text-xl font-bold text-white">
                Principios básicos
              </h2>
            </div>
            <div className="space-y-3">
              {principiosBasicosItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg"
                >
                  <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-4">
            {/* ¿Cómo progresar? */}
            <AccordionItem
              title="¿Cómo progresar?"
              icon={<TrendingUp className="h-5 w-5" />}
              isOpen={openAccordions["progress"]}
              onToggle={() => toggleAccordion("progress")}
            >
              <div className="space-y-3 text-gray-300">
                {comoProgresarItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#e63946] rounded-full mt-2 flex-shrink-0"></div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* ¿Qué es una buena ejecución? */}
            <AccordionItem
              title="¿Qué es una buena ejecución?"
              icon={<CheckCircle className="h-5 w-5" />}
              isOpen={openAccordions["execution"]}
              onToggle={() => toggleAccordion("execution")}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {queEsUnaBuenaEjecucionItems.map((item, index) => (
                  <div key={index} className="bg-gray-700 rounded-lg p-3">
                    <h4 className="font-semibold text-[#e63946] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* ¿Y si siento dolor o molestias? */}
            <AccordionItem
              title="¿Y si siento dolor o molestias?"
              icon={<AlertTriangle className="h-5 w-5" />}
              isOpen={openAccordions["pain"]}
              onToggle={() => toggleAccordion("pain")}
            >
              <div className="space-y-4">
                <div className="bg-red-900 bg-opacity-30 border border-red-600 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <span className="font-semibold text-red-400">
                      Importante
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    No sigas si hay dolor. Tu salud es más importante que
                    cualquier entrenamiento.
                  </p>
                </div>
                <div className="space-y-3 text-gray-300">
                  {siSientoDolorItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-[#e63946] font-bold">
                        {index + 1}.
                      </span>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AccordionItem>

            {/* Errores comunes */}
            <AccordionItem
              title="Errores comunes"
              icon={<X className="h-5 w-5" />}
              isOpen={openAccordions["errors"]}
              onToggle={() => toggleAccordion("errors")}
            >
              <div className="space-y-3">
                {erroresComunesItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-red-900 bg-opacity-20 rounded-lg border border-red-800"
                  >
                    <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* Tips extra */}
            <AccordionItem
              title="Tips extra"
              icon={<Lightbulb className="h-5 w-5" />}
              isOpen={openAccordions["tips"]}
              onToggle={() => toggleAccordion("tips")}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tipsExtraItems.map((item, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br from-${item.color}-900 to-${item.color}-800 bg-opacity-30 rounded-lg p-4 border border-${item.color}-600`}
                  >
                    <h4 className={`font-semibold text-${item.color}-400 mb-2`}>
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </AccordionItem>

            {/* Cómo usar esta app */}
            <AccordionItem
              title="Cómo usar esta app"
              icon={<Gamepad2 className="h-5 w-5" />}
              isOpen={openAccordions["app"]}
              onToggle={() => toggleAccordion("app")}
            >
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-[#e63946] mb-3">
                    Pasos a seguir:
                  </h4>
                  <div className="space-y-3">
                    {comoUsarEstaAppItems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-[#e63946] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-xs font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <p className="text-gray-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionItem>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
            <p className="text-gray-400 text-sm">
              Recordá: el progreso real se mide en semanas y meses, no en días.
              La constancia y la paciencia son tus mejores aliados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
