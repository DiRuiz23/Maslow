import { Droplets, Shield, Users, Award, Zap } from 'lucide-react';

export const levels = [

  // =========================
  // NIVEL 1 — FISIOLÓGICAS
  // =========================

  {
    id: 1,
    title: "Fisiológicas",
    icon: Droplets,

    scenarios: [

      {
        description:
          "Despiertas en una isla tropical después de un naufragio. El calor es extremo y llevas horas sin beber agua.",

        question:
          "¿Cuál debería ser tu prioridad inmediata?",

        options: [

          {
            text: "Explorar la isla para buscar civilización.",
            isCorrect: false,
            failMessage:
              "Sin agua ni alimento, tu cuerpo comenzará a fallar rápidamente."
          },

          {
            text: "Buscar una fuente de agua potable.",
            isCorrect: true,
            successMessage:
              "Has cubierto una necesidad fisiológica esencial."
          },

          {
            text: "Construir armas para defenderte.",
            isCorrect: false,
            failMessage:
              "La seguridad importa, pero primero debes sobrevivir físicamente."
          },

          {
            text: "Intentar ganar el respeto de otros sobrevivientes.",
            isCorrect: false,
            failMessage:
              "El reconocimiento social pertenece a niveles superiores."
          }
        ]
      },

      {
        description:
          "Llevas más de un día perdido en la isla y tu energía disminuye rápidamente.",

        question:
          "¿Qué acción mejora más tus probabilidades de supervivencia?",

        options: [

          {
            text: "Dormir directamente en la playa.",
            isCorrect: false,
            failMessage:
              "El descanso es importante, pero primero necesitas recursos básicos."
          },

          {
            text: "Recolectar frutos y conseguir agua limpia.",
            isCorrect: true,
            successMessage:
              "Excelente decisión. Tu cuerpo necesita energía e hidratación."
          },

          {
            text: "Subir una montaña para admirar el paisaje.",
            isCorrect: false,
            failMessage:
              "La exploración no es prioridad en este momento."
          },

          {
            text: "Intentar organizar un sistema político.",
            isCorrect: false,
            failMessage:
              "Las estructuras sociales vienen después de sobrevivir."
          }
        ]
      },

      {
        description:
          "Tu cuerpo está agotado y apenas puedes mantenerte despierto.",

        question:
          "¿Qué necesidad debes cubrir primero según Maslow?",

        options: [

          {
            text: "Buscar reconocimiento del grupo.",
            isCorrect: false,
            failMessage:
              "El reconocimiento pertenece a niveles superiores."
          },

          {
            text: "Encontrar alimento y descanso.",
            isCorrect: true,
            successMessage:
              "Correcto. Las necesidades fisiológicas son la base."
          },

          {
            text: "Desarrollar habilidades artísticas.",
            isCorrect: false,
            failMessage:
              "La autorrealización ocurre mucho después."
          },

          {
            text: "Convencer a otros de seguirte.",
            isCorrect: false,
            failMessage:
              "El liderazgo no sirve si no sobrevives."
          }
        ]
      }
    ]
  },

  // =========================
  // NIVEL 2 — SEGURIDAD
  // =========================

  {
    id: 2,
    title: "Seguridad",
    icon: Shield,

    scenarios: [

      {
        description:
          "Ya tienes comida y agua, pero se aproxima una tormenta intensa.",

        question:
          "¿Qué deberías hacer ahora?",

        options: [

          {
            text: "Explorar nuevas zonas de la isla.",
            isCorrect: false,
            failMessage:
              "La exploración puede esperar. Necesitas protección."
          },

          {
            text: "Construir un refugio resistente.",
            isCorrect: true,
            successMessage:
              "Ahora tienes mayor estabilidad y protección."
          },

          {
            text: "Intentar hacer nuevos amigos.",
            isCorrect: false,
            failMessage:
              "La afiliación es importante, pero primero necesitas seguridad."
          },

          {
            text: "Practicar actividades artísticas.",
            isCorrect: false,
            failMessage:
              "La creatividad no es prioridad durante una amenaza."
          }
        ]
      },

      {
        description:
          "Escuchas animales peligrosos cerca de tu campamento.",

        question:
          "¿Cuál es la mejor decisión?",

        options: [

          {
            text: "Organizar una competencia entre sobrevivientes.",
            isCorrect: false,
            failMessage:
              "Necesitas protegerte antes de pensar en reconocimiento."
          },

          {
            text: "Encender una fogata y reforzar el refugio.",
            isCorrect: true,
            successMessage:
              "Has mejorado tus condiciones de seguridad."
          },

          {
            text: "Alejarte sin rumbo fijo.",
            isCorrect: false,
            failMessage:
              "Moverte sin protección puede ser más peligroso."
          },

          {
            text: "Intentar enseñar filosofía al grupo.",
            isCorrect: false,
            failMessage:
              "Primero debes garantizar tu integridad física."
          }
        ]
      },

      {
        description:
          "Tu campamento empieza a deteriorarse con las lluvias constantes.",

        question:
          "¿Qué necesidad debes priorizar?",

        options: [

          {
            text: "Buscar aprobación social.",
            isCorrect: false,
            failMessage:
              "La aceptación social no resolverá el peligro inmediato."
          },

          {
            text: "Reforzar tu refugio y proteger suministros.",
            isCorrect: true,
            successMessage:
              "Excelente. La estabilidad es esencial."
          },

          {
            text: "Aislarte para reflexionar.",
            isCorrect: false,
            failMessage:
              "La introspección no es prioridad en una emergencia."
          },

          {
            text: "Dedicar tiempo a actividades recreativas.",
            isCorrect: false,
            failMessage:
              "Necesitas seguridad antes de ocio."
          }
        ]
      }
    ]
  },

  // =========================
  // NIVEL 3 — AFILIACIÓN
  // =========================

  {
    id: 3,
    title: "Afiliación",
    icon: Users,

    scenarios: [

      {
        description:
          "Encuentras un grupo de sobrevivientes organizados.",

        question:
          "¿Cómo deberías actuar?",

        options: [

          {
            text: "Ignorarlos y vivir completamente solo.",
            isCorrect: false,
            failMessage:
              "El aislamiento afecta las necesidades sociales."
          },

          {
            text: "Integrarte y colaborar con el grupo.",
            isCorrect: true,
            successMessage:
              "Has fortalecido tu sentido de pertenencia."
          },

          {
            text: "Intentar convertirte en líder inmediatamente.",
            isCorrect: false,
            failMessage:
              "El liderazgo pertenece más al reconocimiento."
          },

          {
            text: "Dedicarte únicamente al arte personal.",
            isCorrect: false,
            failMessage:
              "La autorrealización viene después."
          }
        ]
      },

      {
        description:
          "Otros sobrevivientes te invitan a compartir recursos.",

        question:
          "¿Qué decisión fortalece más este nivel?",

        options: [

          {
            text: "Desconfiar de todos permanentemente.",
            isCorrect: false,
            failMessage:
              "Las relaciones humanas son esenciales."
          },

          {
            text: "Cooperar y construir vínculos.",
            isCorrect: true,
            successMessage:
              "Ahora formas parte de una comunidad."
          },

          {
            text: "Buscar destacar sobre todos.",
            isCorrect: false,
            failMessage:
              "La competencia pertenece a otro nivel."
          },

          {
            text: "Enfocarte solo en acumular recursos.",
            isCorrect: false,
            failMessage:
              "Ya superaste las necesidades fisiológicas."
          }
        ]
      },

      {
        description:
          "Empiezas a sentirte emocionalmente solo en la isla.",

        question:
          "¿Qué necesidad debes atender?",

        options: [

          {
            text: "Buscar poder dentro del grupo.",
            isCorrect: false,
            failMessage:
              "El poder pertenece al reconocimiento."
          },

          {
            text: "Crear amistades y conexiones.",
            isCorrect: true,
            successMessage:
              "Las relaciones sociales fortalecen tu bienestar."
          },

          {
            text: "Ignorar tus emociones.",
            isCorrect: false,
            failMessage:
              "Las necesidades emocionales también importan."
          },

          {
            text: "Dedicarte únicamente al trabajo individual.",
            isCorrect: false,
            failMessage:
              "La afiliación requiere interacción humana."
          }
        ]
      }
    ]
  },

  // =========================
  // NIVEL 4 — RECONOCIMIENTO
  // =========================

  {
    id: 4,
    title: "Reconocimiento",
    icon: Award,

    scenarios: [

      {
        description:
          "La comunidad necesita alguien que coordine esfuerzos.",

        question:
          "¿Qué acción fortalece este nivel de Maslow?",

        options: [

          {
            text: "Evitar responsabilidades.",
            isCorrect: false,
            failMessage:
              "Necesitas desarrollar confianza y autoestima."
          },

          {
            text: "Liderar y aportar soluciones.",
            isCorrect: true,
            successMessage:
              "Te has ganado el respeto de la comunidad."
          },

          {
            text: "Aislarte completamente.",
            isCorrect: false,
            failMessage:
              "El aislamiento no fortalece el reconocimiento."
          },

          {
            text: "Buscar comida adicional innecesariamente.",
            isCorrect: false,
            failMessage:
              "Las necesidades fisiológicas ya están cubiertas."
          }
        ]
      },

      {
        description:
          "Tu grupo enfrenta un conflicto importante.",

        question:
          "¿Cómo puedes fortalecer tu autoestima y reconocimiento?",

        options: [

          {
            text: "Ignorar los problemas.",
            isCorrect: false,
            failMessage:
              "La pasividad no genera confianza."
          },

          {
            text: "Ayudar a resolver el conflicto.",
            isCorrect: true,
            successMessage:
              "Tu comunidad valora tus capacidades."
          },

          {
            text: "Competir agresivamente con todos.",
            isCorrect: false,
            failMessage:
              "El respeto se gana colaborando."
          },

          {
            text: "Abandonar al grupo.",
            isCorrect: false,
            failMessage:
              "Eso debilita los vínculos y tu reputación."
          }
        ]
      },

      {
        description:
          "Los demás sobrevivientes empiezan a confiar en ti.",

        question:
          "¿Qué refleja mejor el nivel de reconocimiento?",

        options: [

          {
            text: "Asumir responsabilidades importantes.",
            isCorrect: true,
            successMessage:
              "Has desarrollado autoestima y prestigio."
          },

          {
            text: "Preocuparte únicamente por dormir.",
            isCorrect: false,
            failMessage:
              "Las necesidades fisiológicas ya no son prioridad."
          },

          {
            text: "Evitar toda interacción social.",
            isCorrect: false,
            failMessage:
              "El reconocimiento requiere interacción."
          },

          {
            text: "Desarrollar únicamente intereses personales.",
            isCorrect: false,
            failMessage:
              "La autorrealización viene después."
          }
        ]
      }
    ]
  },

  // =========================
  // NIVEL 5 — AUTORREALIZACIÓN
  // =========================

  {
    id: 5,
    title: "Autorrealización",
    icon: Zap,

    scenarios: [

      {
        description:
          "La comunidad prospera y tus necesidades anteriores están cubiertas.",

        question:
          "¿Qué representa mejor la autorrealización?",

        options: [

          {
            text: "Acumular recursos por miedo.",
            isCorrect: false,
            failMessage:
              "El miedo te hace retroceder."
          },

          {
            text: "Crear, enseñar e innovar.",
            isCorrect: true,
            successMessage:
              "Has alcanzado tu máximo potencial."
          },

          {
            text: "Buscar aprobación constantemente.",
            isCorrect: false,
            failMessage:
              "Ya no dependes del reconocimiento externo."
          },

          {
            text: "Evitar cualquier cambio.",
            isCorrect: false,
            failMessage:
              "La autorrealización implica crecimiento."
          }
        ]
      },

      {
        description:
          "Ahora tienes estabilidad, seguridad y respeto dentro del grupo.",

        question:
          "¿Cuál sería un objetivo propio de este nivel?",

        options: [

          {
            text: "Desarrollar proyectos creativos para ayudar a otros.",
            isCorrect: true,
            successMessage:
              "Estás utilizando tu potencial para trascender."
          },

          {
            text: "Volver a competir por recursos básicos.",
            isCorrect: false,
            failMessage:
              "Ya superaste las necesidades básicas."
          },

          {
            text: "Buscar aislamiento total.",
            isCorrect: false,
            failMessage:
              "La plenitud no implica desconexión absoluta."
          },

          {
            text: "Intentar controlar a todos.",
            isCorrect: false,
            failMessage:
              "El control no representa autorrealización."
          }
        ]
      },

      {
        description:
          "Tu comunidad te reconoce y vive en armonía.",

        question:
          "¿Qué decisión refleja mejor el crecimiento personal máximo?",

        options: [

          {
            text: "Inspirar a otros mediante conocimiento y creatividad.",
            isCorrect: true,
            successMessage:
              "Has alcanzado la cima de la pirámide."
          },

          {
            text: "Volver a enfocarte únicamente en sobrevivir.",
            isCorrect: false,
            failMessage:
              "Tus necesidades básicas ya están cubiertas."
          },

          {
            text: "Buscar aprobación constante.",
            isCorrect: false,
            failMessage:
              "La autorrealización trasciende la validación externa."
          },

          {
            text: "Evitar cualquier reto nuevo.",
            isCorrect: false,
            failMessage:
              "El crecimiento personal requiere evolución."
          }
        ]
      }
    ]
  }
];