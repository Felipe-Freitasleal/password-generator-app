import uuid from "react-native-uuid";

export function uuidGenerator() {
  const uuid32 = uuid.v4().replace(/-/g, "");

  return uuid32;
}
