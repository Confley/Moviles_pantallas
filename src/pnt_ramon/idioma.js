//Configuración de idioma
import React from "react";
import { Image } from "react-native";
import {
  NativeBaseProvider,
  Center,
  Box,
  FormControl,
  Stack,
  Text,
  Button,
  HStack,
  Input,
  Select
} from "native-base";



const languageOptions = ["Español", "Inglés"];

const LanguageSettingsScreen = () => {
  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Configuración de Idioma
          </Text>
        </HStack>
      </Box>
      <Center flex={1}>
        <Box maxWidth="90%" mx="auto">
          <FormControl>
            <Stack space={4} alignItems="center">
              <Text fontSize="xl">Idioma:</Text>
              <Select
                minWidth={200}
                fontSize="md"
                placeholder="Seleccione un idioma"
              >
                {languageOptions.map((option) => (
                  <Select.Item label={option} value={option} />
                ))}
              </Select>

              <Center>
                <Button colorScheme="blue" mt={4}>
                  Aplicar
                </Button>
              </Center>
            </Stack>
          </FormControl>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LanguageSettingsScreen;