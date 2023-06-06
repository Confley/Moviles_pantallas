import React from 'react';
import { Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MenuButtonItem = ({ text, onPress, imagen }) =>{
    return (
        <TouchableOpacity 
            style = {styles.buttonContainer}
            onPress={ onPress }
        >
            <Image 
                // name = { icon }
                source = {{ uri: imagen }}
                style = {styles.image}
            />
            <Text
                style = {styles.text}
            >
                { text }
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#d4d4d4',
        borderRadius: 10, 
        marginBottom: 15, 
        padding: 15, 
    },
    image: {
        borderRadius: 23, 
        height: 45, 
        width: 45,
    },
    text: {
        fontWeight: 'bold',
        marginStart: 7, 
    },
  });

export default MenuButtonItem;