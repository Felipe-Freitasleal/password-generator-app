import * as React from "react";
import { NavigationIndependentTree } from "@react-navigation/native";
import { Routes } from "@/routes";

export default function App() {
  return (
    <NavigationIndependentTree>
      <Routes />
    </NavigationIndependentTree>
  );
}
