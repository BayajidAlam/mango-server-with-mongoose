import { IMango } from "./mango.interface";
import Mango from "./mango.model";

const updateMango = async (id: string, data: IMango) => {
  const result = await Mango.findByIdAndUpdate(id, data, {
    new: true,
  });
  return result;
};

const deleteMango = async (id: string) => {
  const result = await Mango.findByIdAndDelete(id);
  return result;
};

export const mangoService = {
  updateMango,
  deleteMango,
};
