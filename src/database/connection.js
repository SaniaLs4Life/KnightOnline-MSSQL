import sql from "mssql";

const dbConfig = {
  user: "hkn",
  password: "qwerty123",
  server: "x.dreamyko.com",
  database: "KN_Online",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

export async function getConnection() {
  try {
    const pool = await sql.connect(dbConfig);
    return pool;
  } catch (err) {
    console.log(err);
  }
}
