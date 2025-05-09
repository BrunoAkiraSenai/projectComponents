import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./src/styles/styles";

import {
  SecondComponent,
  FirstComponent,
  ComponentTesting,
} from "./src/components/SecondComponent";
import ComponenteExportados from "./src/components/SecondComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text> akira</Text>
      <FirstComponent />
      {/* <SecondComponent />
      <ComponenttTesting /> */}
      <ComponenteExportados.Testing1 />

      <StatusBar style="auto" />
    </View>
  );
}
