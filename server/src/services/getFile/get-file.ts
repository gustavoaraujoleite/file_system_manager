const pool = require("../../database/db");
type File = {
  id: number;
  file_name: string;
  extension: string;
};
export default async function getFiles(): Promise<File[]> {
  try {
    const response = await pool.query(
      "SELECT id, file_name, extension FROM files"
    );
    return response.rows;
  } catch (error) {
    console.log(error);
    return [];
  }
}
