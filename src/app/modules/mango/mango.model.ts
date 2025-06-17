import { model, Schema } from "mongoose";
import { IMango } from "./mango.interface";

const mangoSchema = new Schema<IMango>({
  name: {
    type: String,
    required: [true, "Please provide the mango name"],
    minlength: 2,
    maxlength: 50,
  },
  variety: {
    type: String,
    required: [true, "Please specify the variety"],
  },
  pricePerKg: {
    type: Number,
    required: [true, "Please provide price per kg"],
    min: 0,
  },
  quantityInStock: {
    type: Number,
    required: [true, "Please provide stock quantity"],
    min: 0,
  },
  productRegion: {
    type: String,
    default: null,
  },
  isAvailable: {
    type: Boolean,
    default: true,
  },
  sellerId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Mango = model<IMango>("Mango", mangoSchema);
export default Mango;
