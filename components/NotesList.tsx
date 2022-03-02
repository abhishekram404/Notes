import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import GridItem from "./GridItem";

export default function NotesList() {
  const styles = StyleSheet.create({
    notesListContainer: {
      padding: 10,
    },
    pageTitle: {
      fontSize: 20,
      marginBottom: 10,
      marginStart: 10,
    },
    notesGrid: {
      paddingBottom: 20,
      flexDirection: "column",
    },
    gridRow: {
      flexDirection: "row",
    },
  });
  return (
    <ScrollView style={styles.notesListContainer}>
      <Text style={styles.pageTitle}>Your notes</Text>
      <View style={styles.notesGrid}>
        <View style={styles.gridRow}>
          <GridItem
            title="Places to visit this summer"
            summary="Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum recusandae tempora dolor rem unde id sed veritatis, reprehenderit facilis tempore!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni commodi maxime eaque laborum dolorem laboriosam a eius voluptas aut minus."
          />
          <GridItem title="Hello" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
        <View style={styles.gridRow}>
          <GridItem title="Bank accounts" />
          <GridItem title="Importants" summary="Lorem ipsum dolopar" />
        </View>
      </View>
    </ScrollView>
  );
}
