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
      .query(queries.createLevel);
    res.json({ message: "New level has been created successfully" });
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};

export const getLevelById = async (req, res) => {
  const { level } = req.params;
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("level", sql.Int, level)
      .query(queries.getLevelById);
    res.json({ level: result.recordset });
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};

export const deleteLevel = async (req, res) => {
  const { level } = req.params;
  try {
    const pool = await getConnection();
    await pool
      .request()
      .input("level", sql.Int, level)
      .query(queries.deleteLevel);
    res.json({ message: `Level ${level} has been deleted successfully` });
  } catch (err) {
    res.status(500);
    console.log(err.message);
  }
};

// export const updateLevel = async (req, res) => {
//   const { level, Exp } = req.body;
//   const { level: id } = req.params;

//   if (!level || !Exp) {
//     return res
//       .status(400)
//       .json({ error: "Bad Request! Please fill all fields." });
//   }

//   try {
//     const pool = await getConnection();
//     await pool
//       .request()
//       .input("level", sql.Int, id)
//       .input("Exp", sql.Int, Exp)
//       .query(queries.updateLevel);

//     res.json({ message: `Level ${level} has been updated successfully` });
//   } catch (err) {
//     res.status(500);
//     console.log(err.message);
//   }
// };
