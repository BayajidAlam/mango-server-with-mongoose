import { Types } from "mongoose";

export interface IMango {
  name: string;
  variety: string;
  pricePerKg: number;
  quantityInStock: number;
  productRegion?: string;
  isAvailable: boolean;
  sellerId: Types.ObjectId;   
}
