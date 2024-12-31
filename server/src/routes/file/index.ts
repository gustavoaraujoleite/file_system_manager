import express, { Request, Response } from "express";
const pool = require("../../database/db");

const router = express.Router();

router.get("/", async (req: Request, res: Response): Promise<any> => {
  try {
    const result = await pool.query("SELECT * FROM files");

    return res.status(200).json({
      status: 200,
      message: "Success",
      data: result.rows,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      status: 500,
      message: "Failed",
    });
  }
});
export default router;
