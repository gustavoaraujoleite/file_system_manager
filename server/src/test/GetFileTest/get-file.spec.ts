const express = require("express");
const request = require("supertest");

import fileManaging from "../../routes/file/file-route";

const app = express();
app.use(express.json());

app.use("/files", fileManaging);

jest.mock("../../services/getFile/get-file", () =>
  jest.fn(() =>
    Promise.resolve([{ id: 1, file_name: "file1", extension: ".txt" }])
  )
);
describe("GET Route", () => {
  it("should return a list of files with status 200", async () => {
    const response = await request(app).get("/files");
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("Success");
  });

  it("should return status 500 on failure", async () => {
    const mockGetFile = require("../../services/getFile/get-file");
    mockGetFile.mockImplementationOnce(() => {
      throw new Error("Database error");
    });

    const response = await request(app).get("/files");
    expect(response.status).toBe(500);
    expect(response.body.message).toBe("Failed");
  });
});
