import React from "react";
import { Box, NativeBaseProvider, Text } from "native-base";
import { SafeAreaView, StyleSheet } from "react-native";

const Navbar = ({ titulo }) => {
  return (
    <NativeBaseProvider>
      <SafeAreaView>
        <Box style={styles.box} bg="blue.600">
          
            <Text style={styles.textNavbar}>{titulo}</Text>
          
        </Box>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Navbar;

const styles = StyleSheet.create({
    hStack_1: {
      alignItems: "center",
    },
    box: {
      padding: 16,
      backgroundColor: "#3182CE",
      fontColor: "white",
    },
    textNavbar: {
      textAlign: "center",
      fontSize: 32,
      color: "white",
      paddingTop: 14,
    },
  });
  
