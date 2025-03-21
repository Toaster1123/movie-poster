import { HallExceptions, HallOccupied, HallSchema } from '@prisma/client';

export interface HallType extends HallSchema {
  exceptions: HallExceptions[];
  occupied: HallOccupied[];
}
