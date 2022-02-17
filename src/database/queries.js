export const queries = {
  getAllLevels: "SELECT * FROM LEVEL_UP",
  createLevel: "INSERT INTO LEVEL_UP (level, Exp) VALUES (@level, @Exp)",
  getLevelById: "SELECT * FROM LEVEL_UP WHERE level = @level",
  deleteLevel: "DELETE FROM LEVEL_UP WHERE level = @level",
  updateLevel: "UPDATE LEVEL_UP SET level = @level, Exp = @Exp WHERE level = @level",
};
