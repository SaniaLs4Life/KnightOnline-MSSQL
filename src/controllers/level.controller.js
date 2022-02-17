import { getConnection, sql } from "../database/connection";

export const getAllLevels = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM LEVEL_UP");
  res.json({ levels: result.recordset });
};

export const createLevel = async (req, res) => {
  const { level, Exp } = req.body;

  if (!level || !Exp) {
    return res
      .status(400)
      .json({ error: "Bad Request! Please fill all fields." });
  }

  const pool = await getConnection();
  await pool
    .request()
    .input("level", sql.Int, level)
    .input("Exp", sql.Int, Exp)
    .query("INSERT INTO LEVEL_UP (level, Exp) VALUES (@level, @Exp)");
  res.json({ message: "New level has been created successfully" });
};
