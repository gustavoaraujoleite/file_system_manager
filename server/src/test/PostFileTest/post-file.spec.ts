const express = require("express");
const request = require("supertest");

import fileManaging from "../../routes/file/file-route";

const app = express();
app.use(express.json());
app.use("/files", fileManaging);

jest.mock("../../services/createFile/create-file", () =>
  jest.fn(() =>
    Promise.resolve({ status: 200, message: "File created successfully" })
  )
);

describe("POST /files", () => {
  it("should create a new file and return status 200", async () => {
    // Configuração do mock para retornar sucesso
    const mockCreateFile = require("../../services/createFile/create-file");
    mockCreateFile.mockResolvedValue({
      status: 200,
      message: "File created successfully",
    });

    const newFile = { file_name: "file2", extension: ".pdf" };
    const response = await request(app).post("/files").send(newFile);

    expect(response.status).toBe(200);
    expect(response.body.message).toBe("File created successfully");
  });

  it("should return status 500 on creation failure", async () => {
    // Configuração do mock para simular erro
    const mockCreateFile = require("../../services/createFile/create-file");
    mockCreateFile.mockRejectedValue(new Error("Database error"));

    const newFile = { file_name: "file3", extension: ".jpg" };
    const response = await request(app).post("/files").send(newFile);

    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Failed to create new value");
  });
});
// describe("POST /files", () => {
//   it("should create a new file and return status 200", async () => {
//     const newFile = { file_name: "file2", extension: ".pdf" };
//     const response = await request(app).post("/files").send(newFile);

//     expect(response.status).toBe(200);
//     expect(response.body.message).toBe("File created successfully");
//   });

//   it("should return status 500 on creation failure", async () => {
//     jest.mock("../../services/createFile/create-file", () =>
//       jest.fn(() => Promise.reject(new Error("Database error")))
//     );

//     const newFile = { file_name: "file3", extension: ".jpg" };
//     const response = await request(app).post("/files").send(newFile);

//     expect(response.status).toBe(500);
//     expect(response.body.message).toBe("Failed to create new value");
//   });
// });
