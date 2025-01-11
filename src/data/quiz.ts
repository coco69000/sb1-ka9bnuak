export interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const questions: Question[] = [
  {
    question: "Que signifie le terme 'amphibien' ?",
    options: [
      "Qui vit dans l'eau",
      "Des deux côtés de la vie",
      "Qui rampe",
      "Qui nage"
    ],
    correctAnswer: 1,
    explanation: "Le terme amphibien est construit sur les racines grecques 'amphi' (des deux côtés) et 'bio' (la vie), faisant référence à leur cycle en deux phases : aquatique et terrestre."
  },
  {
    question: "Il y a combien d'années sont apparus les amphibiens ?",
    options: [
      "100 millions d'années",
      "200 millions d'années",
      "300 millions d'années",
      "400 millions d'années"
    ],
    correctAnswer: 3,
    explanation: "Les amphibiens sont apparus il y a plus de 400 millions d'années, descendant des poissons."
  },
  {
    question: "Combien d'espèces d'amphibiens existe-t-il en France ?",
    options: [
      "15 espèces",
      "25 espèces",
      "35 espèces",
      "45 espèces"
    ],
    correctAnswer: 2,
    explanation: "On compte environ 35 espèces d'amphibiens en France."
  },
  {
    question: "Quelle est la caractéristique principale des Urodèles ?",
    options: [
      "Ils n'ont pas de queue",
      "Ils ont une queue à l'âge adulte",
      "Ils sont tous aquatiques",
      "Ils sont tous terrestres"
    ],
    correctAnswer: 1,
    explanation: "Les Urodèles sont caractérisés par la présence d'une queue à l'âge adulte, comme les salamandres et les tritons."
  },
  {
    question: "Quel amphibien est reconnaissable à sa robe noire tachetée de jaune ?",
    options: [
      "Le triton crêté",
      "La salamandre tachetée",
      "Le sonneur à ventre jaune",
      "La rainette verte"
    ],
    correctAnswer: 1,
    explanation: "La salamandre tachetée est reconnaissable à sa robe noire tachetée de jaune."
  },
  {
    question: "Quelle est la particularité du mâle Alyte accoucheur ?",
    options: [
      "Il change de couleur",
      "Il porte les œufs sur son dos",
      "Il porte les œufs autour de ses pattes",
      "Il creuse un nid"
    ],
    correctAnswer: 2,
    explanation: "Le mâle Alyte accoucheur porte les œufs enroulés autour de ses pattes arrière jusqu'à l'éclosion."
  },
  {
    question: "Quel est le plus grand triton d'Europe ?",
    options: [
      "Le triton palmé",
      "Le triton alpestre",
      "Le triton crêté",
      "Le triton marbré"
    ],
    correctAnswer: 2,
    explanation: "Le triton crêté est le plus grand triton d'Europe."
  },
  {
    question: "Quelle menace principale pèse sur les amphibiens ?",
    options: [
      "La destruction des zones humides",
      "La chasse",
      "Le réchauffement climatique",
      "Les prédateurs naturels"
    ],
    correctAnswer: 0,
    explanation: "La destruction et le morcellement des zones humides restent la menace principale pour les amphibiens."
  },
  {
    question: "Quel est le régime alimentaire des amphibiens adultes ?",
    options: [
      "Herbivore",
      "Carnivore",
      "Omnivore",
      "Frugivore"
    ],
    correctAnswer: 1,
    explanation: "Les amphibiens adultes sont tous carnivores et se nourrissent essentiellement d'insectes et de mollusques."
  },
  {
    question: "À quelle période les amphibiens se reproduisent-ils principalement ?",
    options: [
      "En été",
      "En automne",
      "Au printemps",
      "En hiver"
    ],
    correctAnswer: 2,
    explanation: "Les amphibiens se reproduisent principalement au printemps, période où ils retournent vers leur lieu de naissance."
  }
];