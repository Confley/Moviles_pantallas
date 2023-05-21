import React from "react";
import MyDrawer from "./src/navigation/DrawerNavigation";

const App = () => {
  return (
    <>
      <MyDrawer />
    </>
  );
};

export default App;

//? Componentes de native-base
// NativeBaseProvider:    proveedor raíz de NativeBase. Es necesario utilizarlo en la parte superior de la jerarquía de componentes para habilitar el uso de los demás componentes.
// Center:        este componente permite centrar cualquier contenido dentro de él, tanto horizontal como verticalmente.
// Box:           este es un componente de contenedor que se puede utilizar para envolver otros componentes. Es útil para establecer estilos comunes en múltiples componentes, o para crear diseños personalizados.
// FormControl:   envolver los campos de entrada de un formulario, lo que permite la validación y el control del estado de los mismos.
// Stack:         apilar elementos horizontal o verticalmente. Es útil para crear diseños de estilo "mampostería" o para mostrar contenido en varias columnas.
// Text:          mostrar texto en la interfaz de usuario. Es altamente personalizable y se puede utilizar para estilizar el texto en diferentes formas y tamaños.
// Button:        crear botones interactivos. Puede personalizarse según el estilo deseado y se puede utilizar para desencadenar acciones en la aplicación.
// HStack:        apilar elementos horizontalmente, similar al Stack. Sin embargo, el HStack solo permite la alineación horizontal.
// VStack:        apilar elementos verticalmente, similar al Stack. Sin embargo, el VStack solo permite la alineación vertical.
// Radio:         crear botones de radio, que permiten al usuario seleccionar una opción de un conjunto de opciones.
// Divider:       crear una línea divisoria entre dos secciones de contenido.
// Pressable:     crear componentes interactivos que responden a las interacciones táctiles del usuario.
// Input:         crear campos de entrada de texto, que permiten al usuario ingresar información en la aplicación.
// Select:        crear menús desplegables, que permiten al usuario seleccionar una opción de un conjunto de opciones.

// Icon:          mostrar iconos en la interfaz de usuario. Se puede personalizar para cambiar el tamaño, color y estilo de los iconos.
// Badge:         crear una insignia o etiqueta en la interfaz de usuario. Es útil para mostrar información adicional sobre un elemento o para resaltar algo importante.
// Checkbox:      crear casillas de verificación que permiten al usuario seleccionar una o varias opciones de un conjunto de opciones.
// Spinner:       mostrar un indicador de carga o progreso en la interfaz de usuario.
// Avatar:        mostrar una imagen de perfil o avatar en la interfaz de usuario.
// Image:         mostrar imágenes en la interfaz de usuario. Se puede personalizar para cambiar el tamaño, recortar y ajustar la imagen.
// Slider:        crear controles deslizantes que permiten al usuario seleccionar un valor de un rango de valores.
// Toast:         mostrar notificaciones breves en la interfaz de usuario. Es útil para proporcionar retroalimentación instantánea al usuario.
// ActionSheet:   mostrar un menú de opciones en la parte inferior de la pantalla. Es útil para mostrar acciones contextuales para un elemento seleccionado.
// Modal:         mostrar una ventana emergente en la interfaz de usuario. Es útil para mostrar contenido adicional o requerir la atención del usuario para una tarea específica.
// Tabs:          crear pestañas de navegación en la parte superior de la pantalla. Es útil para organizar el contenido en diferentes secciones.
