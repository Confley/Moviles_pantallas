import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";


// Importa tus pantallas
import Home from "./screens/HomeScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    // <Box safeArea flex={1}>
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
    // </Box>
  );
}

export default DrawerNavigator;
