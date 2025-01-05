const pool = require("../../database/db");

type DataType = {
  file_name: string;
  extension: string;
};

export default async function createFile({ file_name, extension }: DataType) {
  try {
    const response = await pool.query(
      `INSERT INTO files (file_name, extension) VALUES ('${file_name}', '${extension}');`
    );
    return {
      status: 200,
      message: "Value inserted into DB successfully",
    };
  } catch (error: any) {
    console.log(error);
    return {
      status: error?.constraint === "files_file_name_key" ? 409 : 500,
      message:
        error?.constraint === "files_file_name_key"
          ? `Value ${file_name} already exists`
          : "Failed to create new value",
    };
  }
}
