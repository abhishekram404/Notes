import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import ThemeContext from "../utils/ThemeContext";

const AppBar = () => {
  const { colors } = useContext(ThemeContext);

  const styles = StyleSheet.create({
    appbar: {
      backgroundColor: colors.primary,
      paddingVertical: 25,
      paddingTop: 40,
      paddingHorizontal: 15,
      elevation: 5,
    },
    title: {
      color: colors.secondary,
      fontSize: 26,
      fontWeight: "700",
    },
  });
  return (
    <View style={styles.appbar}>
      <Text style={styles.title}>Notes</Text>
    </View>
  );
};

export default AppBar;
