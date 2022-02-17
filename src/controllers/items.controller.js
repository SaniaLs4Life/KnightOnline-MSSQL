import { getConnection } from "../database/connection";

export const getItems = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query("SELECT * FROM LEVEL_UP");
  console.log(result);

  res.json({ items: result.recordsets[0] });
};
