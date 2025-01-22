import { type SQLiteDatabase } from "expo-sqlite";

export async function initializeDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
        CREATE TABLE IF NOT EXISTS senhas (
            id TEXT PRIMARY KEY,
            senha TEXT NOT NULL
        )
    `);
}
