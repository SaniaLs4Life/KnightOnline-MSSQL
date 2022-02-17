import { getConnection, sql, queries } from "../database";

export const getAllLevels = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllLevels);
    res.json({ levels: result.recordset });
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};

export const createLevel = async (req, res) => {
  const { level, Exp } = req.body;

  if (!level || !Exp) {
    return res
      .status(400)
      .json({ error: "Bad Request! Please fill all fields." });
  }

  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("level", sql.Int, level)
      .input("Exp", sql.Int, Exp)
      .query("INSERT INTO LEVEL_UP (level, Exp) VALUES (@level, @Exp)");
    res.json({ message: "New level has been created successfully" });
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};
