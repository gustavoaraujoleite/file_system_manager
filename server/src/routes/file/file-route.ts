import express, { Request, Response } from "express";
import getFiles from "../../services/getFile/get-file";
import bodyParser from "body-parser";
import createFile from "../../services/createFile/create-file";

type ResponseType = {
  status: number;
  message: string;
};
const router = express.Router();
router.use(bodyParser.json());

router.get("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await getFiles();

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Failed",
    });
  }
});
router.post("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const { file_name, extension } = req.body;
    const result: ResponseType = await createFile({ file_name, extension });

    if (result.status === 200) {
      return res.status(200).json({
        status: 200,
        message: result.message,
      });
    } else {
      return res.status(result.status).json({
        status: result.status,
        message: result.message,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Failed to create new value",
    });
  }
});
export default router;
