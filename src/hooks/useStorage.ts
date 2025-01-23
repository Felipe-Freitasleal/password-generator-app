import { useSQLiteContext } from "expo-sqlite";
import { uuidGenerator } from "@/utils/uuidGenerator";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const database = useSQLiteContext();

  const salveItem = async (password: string) => {
    const passwordId = uuidGenerator();

    const statement = await database.prepareAsync(
      "INSERT INTO senhas (id, senha) VALUES ($id, $senha)"
    );

    try {
      await statement.executeAsync({
        $id: passwordId,
        $senha: password,
      });

      await database.getAllAsync(
        "INSERT INTO senhas (id, senha) VALUES ($id, $senha)"
      );
    } catch (error) {
      throw error;
    } finally {
      await statement.finalizeAsync();
    }
  };

  const getItem = async () => {
    try {
      const result: {
        id: string;
        senha: string;
      }[] = await database.getAllAsync("SELECT * FROM senhas");

      return result;
    } catch (error) {
      console.log("Erro ao buscar: ", error);
      return [];
    }
  };

  const removeItem = async (id: string) => {
    try {
      const query = "DELETE FROM senhas WHERE id = ?";

      await database.getAllAsync(query, [id]);
    } catch (error) {
      console.log("Erro ao excluir: ", error);
      return [];
    }
  };

  return {
    getItem,
    salveItem,
    removeItem,
  };
};

export default useStorage;
