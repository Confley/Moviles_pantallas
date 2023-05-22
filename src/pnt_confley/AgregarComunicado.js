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
  // const [urlImagen, setUrlImagen] = useState(
  //   "https://www.w3schools.com/css/img_lights.jpg"
  // );
  // const [categoria, setCategoria] = useState("General");
  // const [titulo, setTitulo] = useState("");
  // const [descripcion, setDescripcion] = useState("");
  // const [fechaDePublicacion, setFechaDePublicacion] = useState(new Date());
  // const [fechaDeInicio, setFechaDeInicio] = useState("");
  // const [fechaDeFinal, setFechaDeFinal] = useState("");
  // const [enlaces, setEnlaces] = useState("");
  // const [contactos, setContactos] = useState("");
  // const [showFechaInicio, setShowFechaInicio] = useState(false);
  // const [showFechaFinal, setShowFechaFinal] = useState(false);

  const [estado, setEstado] = useState({
    urlImagen: "https://www.w3schools.com/css/img_lights.jpg",
    categoria: "",
    titulo: "",
    descripcion: "",
    fechaDePublicacion: new Date(),
    fechaDeInicio: "",
    fechaDeFinal: "",
    enlaces: "",
    contactos: "",
    showFechaInicio: false,
    showFechaFinal: false,
  });

  const actualizarEstado = (name, value) => {
    setEstado({ ...estado, [name]: value });
  };

  const handleFechaInicio = (nuevaFecha) => {
    // setFechaDeInicio(nuevaFecha);
    // setShowFechaInicio(false);
    actualizarEstado("fechaDeInicio", nuevaFecha);
    actualizarEstado("showFechaInicio", false);
  };

  const handleFechaFinal = (nuevaFecha) => {
    // setFechaDeFinal(nuevaFecha);
    // setShowFechaFinal(false);
    actualizarEstado("fechaDeFinal", nuevaFecha);
    actualizarEstado("showFechaFinal", false);
  };

  const agregarNuevoAviso = () => {
    console.log("Función de agregar...");
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
              <ImagenFormulario urlImagen={estado['urlImagen']} />
            </Box>

            {/* Categoría */}
            <Box>
              <FormControl.Label>Categoría </FormControl.Label>

              <Select
                variant="rounded"
                placeholder="Seleccione la categoría a la que va dirigida"
                selectedValue={estado['categoria']}
                onValueChange={(itemValue) =>
                  actualizarEstado("categoria", itemValue)
                }
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
                value={estado['titulo']}
                onChange={(e) => actualizarEstado("titulo", e.target.value)}
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
                value={estado['descripcion']}
                onChange={(e) =>
                  actualizarEstado("descripcion", e.target.value)
                }
              />
            </Box>

            {/* Fecha de inicio */}
            <Box>
              <FormControl.Label>Fecha de inicio </FormControl.Label>
              <Button
                borderRadius="md"
                colorScheme="blue"
                onPress={(e) =>
                  actualizarEstado("showFechaInicio", !estado['showFechaInicio'])
                }
              >
                Calendario
              </Button>
              {estado['showFechaInicio'] && <Calendario metodo={handleFechaInicio} />}
              <FormControl.HelperText>
                Fecha de inicio: {estado['fechaDeInicio']}
              </FormControl.HelperText>
              <Divider />
            </Box>

            {/* Fecha de final */}
            <Box mt={4}>
              <FormControl.Label>Fecha de final </FormControl.Label>
              <Button
                borderRadius="md"
                colorScheme="teal"
                onPress={(e) => actualizarEstado('showFechaFinal', !estado['showFechaFinal'])}
              >
                Calendario
              </Button>
              {estado['showFechaFinal'] && <Calendario metodo={handleFechaFinal} />}
              <FormControl.HelperText>
                Fecha de final: {estado['fechaDeFinal']}
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
                value={estado['enlaces']}
                onChange={(e) => actualizarEstado('enlaces', e.target.value)}
              />
            </Box>

            {/* Contactos */}
            <Box>
              <FormControl.Label>Contactos </FormControl.Label>
              <TextArea
                variant={"outline"}
                h={20}
                placeholder={"Pedir informes al... "}
                value={estado['contactos']}
                onChange={(e) => actualizarEstado('contactos', e.target.value)}
              />
            </Box>
{/* //! el poner el calendario ya no quiso jalar  */}
            {/* Btn publicar */}
            <Box pt={4}>
              <Button
                borderRadius="md"
                colorScheme="violet"
                onPress={(e) => {
                  agregarNuevoAviso()
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
