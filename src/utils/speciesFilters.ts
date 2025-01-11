import type { Species } from '../data/species';

export function filterSpecies(species: Species[], filter: string): Species[] {
  switch (filter.toLowerCase()) {
    case 'urodeles':
      return species.filter(s => s.group === 'Urodèles');
    case 'anoures':
      return species.filter(s => s.group === 'Anoures');
    case 'salamandres':
      return species.filter(s => 
        s.group === 'Urodèles' && 
        s.name.toLowerCase().includes('salamandre')
      );
    case 'tritons':
      return species.filter(s => 
        s.group === 'Urodèles' && 
        s.name.toLowerCase().includes('triton')
      );
    case 'rainettes':
      return species.filter(s => 
        s.group === 'Anoures' && 
        s.name.toLowerCase().includes('rainette')
      );
    case 'grenouilles':
      return species.filter(s => 
        s.group === 'Anoures' && (
          s.name.toLowerCase().includes('grenouille') ||
          s.name.toLowerCase().includes('pélodyte') ||
          s.name.toLowerCase().includes('sonneur')
        )
      );
    case 'crapauds':
      return species.filter(s => 
        s.group === 'Anoures' && (
          s.name.toLowerCase().includes('crapaud') ||
          s.name.toLowerCase().includes('alyte')
        )
      );
    default:
      return species;
  }
}