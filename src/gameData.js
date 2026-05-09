import { Droplets, Shield, Users, Award, Zap } from 'lucide-react';

export const levels = [
  {
    id: 1,
    title: "Fisiológicas",
    icon: Droplets,
    description: "Despiertas en una isla remota sin recursos. El sol quema y tu garganta está seca.",
    question: "¿Cuál es tu primera prioridad?",
    options: [
      {
        id: "A",
        text: "Buscar a alguien con quien hablar para no sentirte solo en la isla.",
        isCorrect: false,
        failMessage: "Sin agua ni comida, tu cuerpo no resistirá. Necesitas cubrir tus necesidades básicas antes de buscar compañía."
      },
      {
        id: "B",
        text: "Buscar una fuente de agua potable y recolectar frutos.",
        isCorrect: true,
        successMessage: "¡Bien hecho! Has asegurado tu supervivencia básica."
      }
    ]
  },
  {
    id: 2,
    title: "Seguridad",
    icon: Shield,
    description: "Ya tienes agua y alimento. Pero empieza a anochecer y se escuchan aullidos a lo lejos.",
    question: "¿Qué decides hacer ahora?",
    options: [
      {
        id: "A",
        text: "Empezar a planear cómo convertirte en el líder absoluto de la isla.",
        isCorrect: false,
        failMessage: "El liderazgo no te protegerá esta noche. Necesitas asegurar tu integridad física y un refugio seguro."
      },
      {
        id: "B",
        text: "Construir un refugio resistente y preparar una fogata para mantener alejados a los depredadores.",
        isCorrect: true,
        successMessage: "Excelente. Ahora tienes un lugar seguro para descansar."
      }
    ]
  },
  {
    id: 3,
    title: "Afiliación",
    icon: Users,
    description: "Tienes un refugio seguro y comida. Han pasado semanas y a lo lejos ves el humo de otra fogata.",
    question: "¿Cómo actúas?",
    options: [
      {
        id: "A",
        text: "Ignorar el humo y pintar murales en tu refugio para expresar tu mundo interior.",
        isCorrect: false,
        failMessage: "Somos seres sociales. Antes de la expresión personal profunda, necesitas conexión y pertenencia para no perder la cordura."
      },
      {
        id: "B",
        text: "Acercarte con cautela para conocer a los otros sobrevivientes e integrarte a su grupo.",
        isCorrect: true,
        successMessage: "Has encontrado a otros. Ahora eres parte de una pequeña comunidad."
      }
    ]
  },
  {
    id: 4,
    title: "Reconocimiento",
    icon: Award,
    description: "Eres parte de la comunidad, pero están desorganizados ante una inminente tormenta tropical.",
    question: "¿Cuál es tu rol?",
    options: [
      {
        id: "A",
        text: "Aislarte a meditar sobre el propósito del universo.",
        isCorrect: false,
        failMessage: "Antes de alcanzar tu potencial filosófico, necesitas construir tu confianza y ganar el respeto de tus pares aportando valor."
      },
      {
        id: "B",
        text: "Tomar la iniciativa, organizar a la comunidad y ganarte su respeto liderando los preparativos.",
        isCorrect: true,
        successMessage: "La comunidad confía en ti. Te sientes valorado y respetado."
      }
    ]
  },
  {
    id: 5,
    title: "Autorrealización",
    icon: Zap,
    description: "La comunidad prospera, eres respetado, estás a salvo y bien alimentado.",
    question: "¿Cuál es tu objetivo final?",
    options: [
      {
        id: "A",
        text: "Dedicar todo tu tiempo a acumular y esconder más comida por miedo a perderlo todo.",
        isCorrect: false,
        failMessage: "Estás retrocediendo por miedo. Ya tienes lo necesario; es momento de trascender y alcanzar tu máximo potencial."
      },
      {
        id: "B",
        text: "Enseñar a otros, explorar tus pasiones artísticas e innovar para mejorar la vida de todos.",
        isCorrect: true,
        successMessage: "¡Felicidades! Has alcanzado la cima de la pirámide."
      }
    ]
  }
];
