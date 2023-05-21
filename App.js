import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

const Stack = createStackNavigator();

import NewScreen from "./src/screens/NewScreen";

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="NewScreen" component={NewScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text> hola </Text> */}
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // horizontal
    justifyContent: "center", // vertical
  },
});
