import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import Navbar from "./Components/Navbar";
import {
  Box,
  Button,
  FormControl,
  Input,
  Select,
  Stack,
  Text,
  TextArea,
  Divider,
  Center,
} from "native-base";

import { StyleSheet } from "react-native";
import ImagenFormulario from "./Components/ParaFormulario/ImagenFormulario";
import { useState } from "react";
// import { runOnJS } from "react-native-reanimated";
import Calendario from "./Components/ParaFormulario/Calendario";

// Todo. Variables de la pantalla (información)
const TituloNavbar = "Publicar nuevo anuncio";
const TituloApartado = "¿Qué desea publicar?";

const AgregarComunicado = () => {
  // Todo. States de formulario
  const [urlImagen, setUrlImagen] = useState(
    "https://www.w3schools.com/css/img_lights.jpg"
  );
  const [categoria, setCategoria] = useState("General");
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fechaDePublicacion, setFechaDePublicacion] = useState(new Date());
  const [fechaDeInicio, setFechaDeInicio] = useState("");
  const [fechaDeFinal, setFechaDeFinal] = useState("");
  const [enlaces, setEnlaces] = useState("");
  const [contactos, setContactos] = useState("");
  const [showFechaInicio, setShowFechaInicio] = useState(false);
  const [showFechaFinal, setShowFechaFinal] = useState(false);

  const handleFechaInicio = (nuevaFecha) => {
    setFechaDeInicio(nuevaFecha);
    setShowFechaInicio(false);
  };

  const handleFechaFinal = (nuevaFecha) => {
    setFechaDeFinal(nuevaFecha);
    setShowFechaFinal(false);
  };

  return (
    <ScrollView>
      <Navbar titulo={TituloNavbar} />
      <Text style={styles.sectionTitle}>{TituloApartado}</Text>

      <Center>
        <Stack direction={"column"} mb={2.5} mt={1.5} space={3}>
          <Text bold fontSize="xl">
            Insertar información:
          </Text>

          <FormControl>
            {/* Imagen (vista previa) */}
            <Box>
              <FormControl.Label>Vista previa </FormControl.Label>
              <ImagenFormulario urlImagen={urlImagen} />
            </Box>

            {/* Categoría */}
            <Box>
              <FormControl.Label>Categoría </FormControl.Label>

              <Select
                variant="rounded"
                placeholder="Seleccione la categoría a la que va dirigida"
                selectedValue={categoria}
                onValueChange={(itemValue) => setCategoria(itemValue)}
              >
                <Select.Item label="General" value="General" />
                <Select.Item label="Convocatorias" value="Convocatorias" />
                <Select.Item
                  label="Actividades complementarias"
                  value="Actividades complementarias"
                />
                <Select.Item
                  label="Departamento de idiomas"
                  value="Departamento de idiomas"
                />
                <Select.Item label="Carrera" value="Carrera" />
                <Select.Item
                  label="Servicios escolares"
                  value="Servicios escolares"
                />
                <Select.Item label="Vinculación" value="Vinculación" />
              </Select>

              <FormControl.HelperText>
                Si hay categoría inexistente comunicate con soporte:
              </FormControl.HelperText>
              <Divider />
            </Box>

            {/* Titulo */}
            <Box>
              <FormControl.Label>Titulo </FormControl.Label>
              <Input
                variant={"rounded"}
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </Box>

            {/* Descripción */}
            <Box>
              <FormControl.Label>Descripción </FormControl.Label>
              <TextArea
                variant={"outline"}
                h={20}
                placeholder={
                  "Ingresa una descripción breve que llame la atención. "
                }
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </Box>

            {/* Fecha de inicio */}
            <Box>
              <FormControl.Label>Fecha de inicio </FormControl.Label>
              <Button
                borderRadius="md"
                colorScheme="blue"
                onPress={(e) => setShowFechaInicio(!showFechaInicio)}
              >
                Calendario
              </Button>
              {showFechaInicio && <Calendario metodo={handleFechaInicio} />}
              <FormControl.HelperText>
                Fecha de inicio: {fechaDeInicio}
              </FormControl.HelperText>
              <Divider />
            </Box>

            {/* Fecha de final */}
            <Box mt={4}>
              <FormControl.Label>Fecha de final </FormControl.Label>
              <Button
                borderRadius="md"
                colorScheme="teal"
                onPress={(e) => setShowFechaFinal(!showFechaFinal)}
              >
                Calendario
              </Button>
              {showFechaFinal && <Calendario metodo={handleFechaFinal} />}
              <FormControl.HelperText>
                Fecha de final: {fechaDeFinal}
              </FormControl.HelperText>
              <Divider />
            </Box>

            {/* Enlaces */}
            <Box>
              <FormControl.Label>Enlaces </FormControl.Label>
              <TextArea
                variant={"outline"}
                h={20}
                placeholder={"Más información"}
                value={enlaces}
                onChange={(e) => setEnlaces(e.target.value)}
              />
            </Box>

            {/* Contactos */}
            <Box>
              <FormControl.Label>Contactos </FormControl.Label>
              <TextArea
                variant={"outline"}
                h={20}
                placeholder={"Pedir informes al... "}
                value={contactos}
                onChange={(e) => setContactos(e.target.value)}
              />
            </Box>

            {/* Btn publicar */}
            <Box pt={4}>
              <Button
                borderRadius="md"
                colorScheme="violet"
                onPress={(e) => {
                  console.log(categoria)
                  console.log(titulo)
                  console.log(descripcion)
                  console.log(fechaDePublicacion)
                  console.log(fechaDeInicio)
                  console.log(fechaDeFinal)
                  console.log(enlaces)
                  console.log(contactos)
                }}
              >
                Publicar
              </Button>
            </Box>
          </FormControl>
        </Stack>
      </Center>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btnContacto: {
    width: "50%",
    backgroundColor: "#3182CE",
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
  },
  divider: {
    marginTop: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
  },
  paragraph: {
    fontSize: 20,
    padding: 10,
    textAlign: "justify",
  },
  footer: {
    fontSize: 14,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    color: "gray",
    // marginVertical: 20,
  },
});

export default AgregarComunicado;
