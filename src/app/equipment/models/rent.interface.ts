import { Equipment } from './equipment.interface';
import { User } from './user.interface';

export interface Rent {
  id?: number;
  equipment: Equipment;
  user: User;
  quantity: number;
  returned: boolean;
}
