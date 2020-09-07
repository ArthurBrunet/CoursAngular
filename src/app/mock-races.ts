import {Pony} from './pony';
import {Race} from './race';
import {PONIES} from './mock-ponies';

export const RACES: Race[] = [
  {
    id_race: 0,
    location: 'Rouen',
    date: new Date(100000),
    ponies: PONIES
  },
  {
    id_race: 1,
    location: 'Paris',
    date: new Date(10000),
    ponies: PONIES
  },
  {
    id_race: 2,
    location: 'Toulouse',
    date: new Date(1000000),
    ponies: PONIES
  },
  {
    id_race: 3,
    location: 'Dieppe',
    date: new Date(1000),
    ponies: PONIES
  },
];
