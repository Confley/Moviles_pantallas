//Categorías.

import React from "react";
import {
  NativeBaseProvider,
  Box,
  VStack,
  HStack,
  Text,
  Divider,
  Pressable
} from "native-base";

const HomeScreen = ({ navigation }) => {
  const categories = [
    {
      title: "General",
      description: "Avisos generales a la comunidad tecnológica",
      screen: "GeneralScreen"
    },
    {
      title: "Convocatorias",
      description: "Anuncios de convocatorias para becas o concursos",
      screen: "ConvocatoriasS_creen"
    },
    {
      title: "Actividades Complementarias",
      description: "Anuncios de actividades culturales y deportivas",
      screen: "ActividadesScreen"
    },
    {
      title: "Departamento de idiomas",
      description: "Anuncios del departamento de idiomas",
      screen: "IdiomasScreen"
    },
    {
      title: "Carrera",
      description: "Avisos de tu carrera",
      screen: "CarreraScreen"
    },
    {
      title: "Servicios escolares",
      description: "Anuncios de los departmentos de Servicios Escolares",
      screen: "ServiciosScreen"
    },
    {
      title: "Vinculación",
      description: "Avisos de los departamentos de Vinculación",
      screen: "VinculacionScreen"
    },
  ];

  return (
    <NativeBaseProvider>
      <Box bg="blue.600" p={4}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text color="white" fontWeight="bold" fontSize="lg">
            Inicio
          </Text>
        </HStack>
      </Box>
      <Box flex={1} p={4}>
        {categories.map((category, index) => (
          <Pressable onPress={() => navigation.navigate(category.screen)} key={index}>
            <VStack space={2} alignItems="flex-start">
              <Text fontWeight="bold" fontSize="lg" mb={1}>
                {category.title}
              </Text>
              <Text fontSize="sm" color="gray.500">
                {category.description}
              </Text>
              <Divider my={2} />
            </VStack>
          </Pressable>
        ))}
      </Box>
    </NativeBaseProvider>
  );
};

export default HomeScreen;