import { Request, RequestHandler, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createStudent: RequestHandler = catchAsync(
	async (req: Request, res: Response) => {
		const { password, student } = req.body;

		const result = await userServices.createStudent(password, student);
		sendResponse(res, {
			statusCode: httpStatus.OK,
			Success: true,
			message: "student created successfully",
			data: result,
		});
	}
);

export const userController = {
	createStudent,
};
