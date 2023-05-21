import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Box, Text } from "native-base";
import CustomCard from "./CustomCard";

const CardGallery = ({ title, items }) => {
  return (
    <Box style={styles.container}>
      <Text style={styles.galleryTitle}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {items.map((item, index) => (
          <Box key={index} style={styles.cardContainer}>
            <CustomCard
              title={item.title}
              description="Esta es una breve descripción de la tarjeta 1."
              buttonText={item.buttonText}
              onButtonClick={() => console.log("Card " + index)}
            />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  galleryTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 14,
    marginBottom: 10,
  },
  scrollContent: {
    flexDirection: "row",
  },
  cardContainer: {
    marginRight: 10,
  },
});

export default CardGallery;