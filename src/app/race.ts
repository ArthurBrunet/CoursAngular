import {Pony} from './pony';
import {PONIES} from './mock-ponies';

export class Race {
  id_race: number;
  location: string;
  date: Date;
  ponies: Pony[];
  constructor(id?: number, location?: string, date?: Date, ponies?: Pony[]) {
    this.id_race = id === undefined ? 0 : id;
    this.location = location === undefined ? 'location' : location;
    this.date = date === undefined ? new Date() : date;
    this.ponies = [];
  }
}
