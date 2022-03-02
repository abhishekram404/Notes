import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import ThemeContext from "../utils/ThemeContext";
import { MaterialIcons } from "@expo/vector-icons";
export default function FloatingActionButton() {
  const { colors } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    button: {
      borderRadius: 50,
      width: 60,
      height: 60,
      backgroundColor: colors.primary,

      elevation: 5,
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      color: "white",
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={{ position: "absolute", bottom: 40, right: 40 }}
    >
      <View style={styles.button}>
        <MaterialIcons name="create" size={24} style={styles.icon} />
      </View>
    </TouchableOpacity>
  );
}
