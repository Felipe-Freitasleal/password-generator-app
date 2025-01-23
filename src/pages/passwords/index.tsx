import { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "@/hooks/useStorage";
import { PasswordItem } from "../../components/passwordItem/index";

export function Password() {
  const [listPasswords, setListPasswords] = useState<
    {
      id: string;
      senha: string;
    }[]
  >([]);
  const focused = useIsFocused();
  const { getItem, removeItem } = useStorage();

  async function loadPasswords() {
    const passwords = await getItem();

    setListPasswords(passwords);
  }

  useEffect(() => {
    loadPasswords();
  }, [focused]);

  async function handleDeletePassword(item: { id: string; senha: string }) {
    await removeItem(item.id);
    alert("Senha removida com sucesso!");
    loadPasswords();
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.title}>Suas Senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          style={{ flex: 1, paddingTop: 14 }}
          data={listPasswords}
          keyExtractor={(item) => {
            return String(item.id);
          }}
          renderItem={({ item }) => {
            return (
              <PasswordItem
                data={item.senha}
                removePassword={() => handleDeletePassword(item)}
              />
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#392de9",
    paddingTop: 58,
    paddingBottom: 14,
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  content: {
    flex: 1,
    paddingHorizontal: 14,
  },
});
