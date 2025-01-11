interface FilterInfo {
  id: string;
  label: string;
  description?: string;
}

export const filters: FilterInfo[] = [
  { id: 'all', label: 'Tous' },
  { 
    id: 'urodeles', 
    label: 'Urodèles',
    description: 'Ordre d\'amphibiens caractérisé par la présence d\'une queue à l\'âge adulte'
  },
  { 
    id: 'anoures', 
    label: 'Anoures',
    description: 'Ordre d\'amphibiens sans queue à l\'âge adulte'
  },
  { 
    id: 'salamandres', 
    label: 'Salamandres',
    description: 'Amphibiens à corps allongé, avec une peau lisse et souvent colorée, vivant principalement dans les forêts humides'
  },
  { 
    id: 'tritons', 
    label: 'Tritons',
    description: 'Urodèles aquatiques avec une queue aplatie, vivant dans les zones humides et les étangs'
  },
  { 
    id: 'crapauds', 
    label: 'Crapauds',
    description: 'Anoures à peau verruqueuse et robuste, adaptés à la vie terrestre et capables de se déplacer sur de longues distances'
  },
  { 
    id: 'rainettes', 
    label: 'Rainettes',
    description: 'Petits anoures arboricoles avec des ventouses aux doigts, connus pour leurs chants caractéristiques'
  },
  { 
    id: 'grenouilles', 
    label: 'Grenouilles',
    description: 'Anoures aquatiques ou semi-aquatiques, avec des pattes postérieures puissantes adaptées au saut'
  }
];