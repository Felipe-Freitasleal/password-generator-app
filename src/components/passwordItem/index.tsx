import { Pressable, StyleSheet, Text, View } from "react-native";

interface PassworrItemProps {
  data: any;
  removePassword: any;
}

export function PasswordItem({ data, removePassword }: PassworrItemProps) {
  return (
    <Pressable onLongPress={removePassword} style={styles.container}>
      <Text style={styles.text}>{data}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0e0e0e",
    padding: 14,
    width: "100%",
    marginBottom: 14,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "#fff",
    marginVertical: 2,
  },
});
