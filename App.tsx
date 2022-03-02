import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import AppBar from "./components/AppBar";
import NotesList from "./components/NotesList";
import ThemeContext from "./utils/ThemeContext";
export default function App() {
  const theme = {
    colors: {
      primary: "#FF7B34",
      black: "#402E32",
      white: "#DFE0DF",
      secondary: "#6A3B22",
    },
  };

  return (
    <ThemeContext.Provider value={theme}>
      <View style={styles.container}>
        <AppBar />
        <NotesList />
        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
