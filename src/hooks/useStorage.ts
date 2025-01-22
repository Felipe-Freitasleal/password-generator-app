import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
  const getItem = async (key: any) => {
    try {
      const passwords: any = await AsyncStorage.getItem(key);

      return JSON.parse(passwords) || [];
    } catch (error) {
      console.log("Erro ao buscar: ", error);
      return [];
    }
  };

  const salveItem = async (key: any, value: any) => {
    try {
      let passwords = await getItem(key);

      passwords.push(value);

      await AsyncStorage.setItem(key, JSON.stringify(passwords));
    } catch (error) {
      console.log("Erro ao salvar: ", error);
      return [];
    }
  };

  const removeItem = async (key: any, item: any) => {
    try {
      let passwords = await getItem(key);

      let myPassword = passwords.filter((password: any) => {
        return password !== item;
      });

      await AsyncStorage.setItem(key, JSON.stringify(myPassword));

      return myPassword;
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
