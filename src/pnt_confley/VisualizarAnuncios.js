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

const items = [
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

const bd = [items1, items];

const VisualizarAnuncios = () => {
  const TituloNavbar = "Convocatorias";
  const Titulo = "Docentes Marzo 2023";
  const Parrafo =
    "Convoca a concurso abierto a los interesados, que cubran las necesidades y requisitos de las plazas vacantes. ";

  const handleList = (titulo, lista) => {
    return <CardGallery title={titulo} items={lista} />;
  };

  return (
    <NativeBaseProvider>
      <Box flex={1} style={styles.box}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SafeAreaView style={[styles.safeArea, styles.safeAreaContent]}>
            <Navbar titulo={TituloNavbar} />
          </SafeAreaView>

          <SafeAreaView>
            <Text style={styles.sectionTitle}>{Titulo}</Text>
            <Text style={styles.paragraph}>{Parrafo}</Text>
            <Divider borderColor="black" style={styles.divider} />
            <VStack>
              {handleList("Ingeniería en Gestión empresarial", items)}
              {handleList("Ingeniería en Materiales", items1)}
              {handleList("Ingeniería en TIC's", items)}
              {handleList("Ingeniería en Mecánica", items1)}
              {handleList("Ingeniería en Electrónica", items)}
              {handleList("Ingeniería en Química", items1)}
              {handleList("Ingeniería en Sistemas", items)}
              {handleList("Ingeniería Cívil", items1)}
            </VStack>
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
