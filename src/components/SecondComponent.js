import { Text, View } from "react-native";
export function SecondComponent() {
  return (
    <>
      <Text>Projeto akira</Text>
    </>
  );
}

export const FirstComponent = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};
export const ComponentTesting = () => {
  return (
    <View>
      <Text>Meu primeiro componente</Text>
    </View>
  );
};

const Testing1 = () => {
  return (
    <View>
      <Text>Terceiro Componente</Text>
    </View>
  );
};

export default {
  Testing1,
};
