import {
  NativeBaseProvider,
  VStack,
  Text,
  Divider,
  ScrollView,
  Box,
} from "native-base";
import { StyleSheet, SafeAreaView, Platform } from "react-native";
import Navbar from "./Components/Navbar";
import CardGallery from "./Components/CardGallery";
import { getAvisos } from "../../database/firebase";
import { useEffect } from "react";
import { useState } from "react";

//Todo. Datos de usuario
const userType = "Estudiante";

const items1 = [
  {
    title: "Card 1",
    buttonText: "Saber más",
  },
  {
    title: "Card 2",
    buttonText: "Saber más",
  },
  {
    title: "Card 3",
    buttonText: "Saber más",
  },
  {
    title: "Card 4",
    buttonText: "Saber más",
  },
  {
    title: "Card 5",
    buttonText: "Saber más",
  },
  {
    title: "Card 6",
    buttonText: "Saber más",
  },
  {
    title: "Card 7",
    buttonText: "Saber más",
  },
  {
    title: "Card 8",
    buttonText: "Saber más",
  },
  {
    title: "Card 9",
    buttonText: "Saber más",
  },
  {
    title: "Card 10",
    buttonText: "Saber más",
  },
];

const VisualizarAnuncios = ({ categoria }) => {
  //? Titulos del componente
  const TituloNavbar = categoria;
  const Titulo = userType + "s Marzo 2023";
  const Parrafo =
    "Avisos más recientes del presente mes, para todos los interesados en estar al día con la ultima información y avisos sobre nuestra institución.";

  const [bd, setBd] = useState(cargarDatos(categoria));

  async function cargarDatos(c) {
    let bd = await getAvisos(c);
    console.log(bd)
    setBd(bd);
  }

  const handleList = (titulo, lista) => {
    return <CardGallery title={titulo} items={lista} />;
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} style={styles.box}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* //*Navbar */}
          <SafeAreaView style={[styles.safeArea, styles.safeAreaContent]}>
            <Navbar titulo={TituloNavbar} />
          </SafeAreaView>

          <SafeAreaView>
            {/* //*Datos */}
            <Text style={styles.sectionTitle}>{Titulo}</Text>
            <Text style={styles.paragraph}>{Parrafo}</Text>

            <Divider borderColor="black" style={styles.divider} />
            <VStack>{handleList("Avisos", bd)}</VStack>
          </SafeAreaView>
        </ScrollView>
      </Box>
    </NativeBaseProvider>
  );
};

export default VisualizarAnuncios;

const styles = StyleSheet.create({
  divider: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    paddingTop: 20,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    padding: 10,
    textAlign: "justify",
  },
  box: {
    backgroundColor: "#F5F5F5",
  },
  safeArea: {
    backgroundColor: "#F5F5F5",
  },
  safeAreaContent: {
    paddingTop: Platform.OS === "android" ? 25 : 0, // Añade un padding adicional en Android
  },
});
