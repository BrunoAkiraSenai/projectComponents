import { StatusBar } from "expo-status-bar";
import { View, Text, Button } from "react-native";
import { styles } from "./src/styles/styles";

import {
  SecondComponent,
  FirstComponent,
  ComponentTesting,
} from "./src/components/SecondComponent";
import ComponenteExportados from "./src/components/SecondComponent";

export default function App() {
  return (
    <FatherComponent>
      <Text>Componente filho</Text>
      <Button title="Button Componente pai" />
    </FatherComponent>
  );
}

function FatherComponent({ children }) {
  return (
    <View style={styles.container}>
      <Text>Componente pai</Text>
      {children}
    </View>
  );
}
