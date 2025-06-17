import { StatusCodes } from "http-status-codes";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import { mangoService } from "./mango.service";

const updateMango = catchAsync(async (req, res) => {
  const MangoId = req.params.MangoId;
  const body = req.body;
  const result = await mangoService.updateMango(MangoId, body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Mango updated successfully",
    data: result,
  });
});

const deleteMango = catchAsync(async (req, res) => {
  const MangoId = req.params.MangoId;
  await mangoService.deleteMango(MangoId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Mango deleted successfully",
    data: {},
  });
});

export const mangoController = {
  updateMango,
  deleteMango,
};
