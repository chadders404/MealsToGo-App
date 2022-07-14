import React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Test Restaurant",
    icon,
    photos = [
      "https://malou.io/wp-content/uploads/2018/02/Foodporn-Instagram-image-mise-en-avant.jpg",
    ],
    address = "12 Princeton Square, London, W1J 7VF",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  const styles = StyleSheet.create({
    card: { flex: 1, elevation: 5 },
    paragraph: { paddingBottom: 16 },
    cardCover: { key: { name }, flex: 0.65 },
  });
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph style={styles.paragraph}>{address}</Paragraph>
        </Card.Content>
        <Card.Cover
          source={{
            uri: photos[0],
          }}
          style={styles.cardCover}
        />
      </Card>
    </>
  );
};
