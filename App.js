import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import DrawerNavigator from "./src/DrawerNavigator";
import Dnavigation from "./src/navigation/DrawerNavigation";

export default function App() {
  // return <DrawerNavigator />;
  return <Dnavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
