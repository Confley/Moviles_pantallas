import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, ScrollView } from "react-native";
import {
  NativeBaseProvider,
  Button,
  Box,
  HamburgerIcon,
  Pressable,
  Heading,
  VStack,
  Text,
  Center,
  HStack,
  Divider,
  Icon,
  Image,
} from "native-base";
global.__reanimatedWorkletInit = () => {};
const Drawer = createDrawerNavigator();

//Crea componentes con la configuración determinada
// function Component(props) {
//   return (
//     <Center>
//       <Text mt="12" fontSize="18">
//         This is {props.route.name} page.
//       </Text>
//     </Center>
//   );
// }

const getIcon = (screenName) => {
  switch (screenName) {
    case "Home":
      return "home";
    case "Outbox":
      return "send";
    case "Favorites":
      return "heart";
    case "Archive":
      return "archive";
    case "Trash":
      return "trash-can";
    case "Setting":
      return "cog";
    default:
      return "star";
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

// TODO: YA CON MÁS MODIFICACIONES
function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <VStack space="6" my="2" mx="1">
//         <Box px="5">
//           <Image
//             source="https://cdn-4.motorsport.com/images/mgl/6AEomeD6/s800/fernando-alonso-aston-martin-r-1.jpg"
//             alt="Nombre de la imagen"
//             size={"200px"}
//             alignContent={"center"}
//             resizeMode="contain"
//           />
//           <Text bold color="gray.700">
//             Mail
//           </Text>
//           <Text fontSize="14" mt="1" color="gray.500" fontWeight="500">
//             elnano33@gmail.com
//           </Text>
//         </Box>

//         <VStack divider={<Divider />} space="4">
//           <VStack space="3">
//             {props.state.routeNames.map((name, index) => (
//               <Pressable
//                 px="5"
//                 py="3"
//                 rounded="md"
//                 bg={
//                   index === props.state.index
//                     ? "rgba(6, 182, 212, 0.1)"
//                     : "transparent"
//                 }
//                 onPress={(event) => {
//                   props.navigation.navigate(name);
//                 }}
//               >
//                 <HStack space="7" alignItems="center">
//                   <Icon
//                     color={
//                       index === props.state.index ? "primary.500" : "gray.500"
//                     }
//                     size="5"
//                     as={<MaterialCommunityIcons name={getIcon(name)} />}
//                   />
//                   <Text
//                     fontWeight="500"
//                     color={
//                       index === props.state.index ? "primary.500" : "gray.700"
//                     }
//                   >
//                     {name}
//                   </Text>
//                 </HStack>
//               </Pressable>
//             ))}
//           </VStack>

//           <VStack space="3">
//             <Text fontWeight="500" fontSize="14" px="5" color="gray.500">
//               Labels
//             </Text>
//             <VStack space="3">
//               <Pressable px="5" py="3">
//                 <HStack space="7" alignItems="center">
//                   <Icon
//                     color="gray.500"
//                     size="5"
//                     as={<MaterialCommunityIcons name="bookmark" />}
//                   />

//                   <Text color="gray.700" fontWeight="500">
//                     Family
//                   </Text>
//                 </HStack>
//               </Pressable>
//               <Pressable px="5" py="2">
//                 <HStack space="7" alignItems="center">
//                   <Icon
//                     color="gray.500"
//                     size="5"
//                     as={<MaterialCommunityIcons name="bookmark" />}
//                   />
//                   <Text color="gray.700" fontWeight="500">
//                     Friends
//                   </Text>
//                 </HStack>
//               </Pressable>
//               <Pressable px="5" py="3">
//                 <HStack space="7" alignItems="center">
//                   <Icon
//                     color="gray.500"
//                     size="5"
//                     as={<MaterialCommunityIcons name="bookmark" />}
//                   />
//                   <Text fontWeight="500" color="gray.700">
//                     Work
//                   </Text>
//                 </HStack>
//               </Pressable>
//             </VStack>
//           </VStack>
//         </VStack>
//       </VStack>
//     </DrawerContentScrollView>
  // );

  // TODO: ESTRUCTURA PEQUEÑA
  // const CustomDrawerContent = ({ navigation }) => {

  //   return (
  //     <DrawerContentScrollView style={styles.container}>
  //       {/*//? TITULO */}
  //       <Text style={styles.title}>Mi menú ^-^</Text>

  //       {/*//? ELEMENTOS */}
  //       <MenuButtonItem
  //         imagen={
  //           "https://img.freepik.com/vector-gratis/hermosa-casa_24877-50819.jpg"
  //         }
  //         text="Home"
  //         onPress={() => navigation.navigate("Home")}
  //       />
  //       <MenuButtonItem
  //         imagen={
  //           "https://img.freepik.com/psd-gratis/caja-carton-aislada_125540-1169.jpg "
  //         }
  //         text="Component"
  //         onPress={() => navigation.navigate("Trash")}
  //       />
  //       <MenuButtonItem
  //         imagen={
  //           "https://http2.mlstatic.com/D_NQ_NP_683658-MLM42909780153_072020-W.jpg"
  //         }
  //         text="Setting"
  //         onPress={() => navigation.navigate("Setting")}
  //       />
  //     </DrawerContentScrollView>
  //   );
}

// Todo. Importar las pantallas
import Home from "../screens/HomeScreen";
import NewScreen from "../screens/NewScreen";
// import MenuButtonItem from "../components/MenuButtonItem"; //No sé que sea ni que haga xd
import SobreNosotros from '../pnt_confley/SobreNosotros';
import VisualizarAnuncios from '../pnt_confley/VisualizarAnuncios'
import Categorias from '../pnt_ramon/Categorías'
import AgregarComunicado from "../pnt_confley/AgregarComunicado";

export default function MyDrawer() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator
        // drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen name="Nuevo Comunicado" component={AgregarComunicado} />
          
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="NewScreen" component={NewScreen} />
          <Drawer.Screen name="Sobre Nosotros" component={SobreNosotros} />
          <Drawer.Screen name="Ver Anuncios" component={VisualizarAnuncios} />
          <Drawer.Screen name="Categorias" component={Categorias} />
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

