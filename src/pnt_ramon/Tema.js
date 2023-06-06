//Cambiar tema
import React, { useState } from "react";

import {
  NativeBaseProvider,
  Center,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  HStack,
  Radio,
  VStack,
} from "native-base";

const ThemeSettingsScreen = () => {
  const [selectedValue, setSelectedValue] = useState("light");

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Configuración de Tema
          </Text>
        </HStack>
      </Box>
      <Center flex={1}>
        <Box maxWidth="90%" mx="auto">
          <FormControl>
            <Stack space={4} alignItems="center">
              <Text fontSize="xl">Tema:</Text>
              <VStack space={4} alignItems="flex-start">
                <Radio.Group
                  name="theme"
                  value={selectedValue}
                  onChange={handleChange}
                >
                  <VStack space={3}>
                    <Radio value="light">Claro</Radio>
                    <Radio value="dark">Oscuro</Radio>
                  </VStack>
                </Radio.Group>
              </VStack>
              
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default ThemeSettingsScreen;