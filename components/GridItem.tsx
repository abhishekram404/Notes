import { useContext } from "react";
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import ThemeContext from "../utils/ThemeContext";

interface Props {
  title?: string;
  summary?: string;
}

const GridItem = ({ title = "Note", summary = "" }: Props) => {
  const { colors } = useContext(ThemeContext);
  const styles = StyleSheet.create({
    gridItem: {
      borderColor: colors.white,
      borderWidth: 1,
      marginHorizontal: 10,
      marginBottom: 20,
      padding: 10,
      borderRadius: 5,
      elevation: 1,
      overflow: "hidden",
      height: 200,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      color: colors.secondary,
    },
    summary: {
      color: colors.black,
      lineHeight: 20,
    },
  });
  return (
    <TouchableOpacity style={{ flex: 0.5 }}>
      <View style={styles.gridItem}>
        <Text style={styles.title}>
          {title?.split(" ").slice(0, 3).join(" ")}
          {title?.split(" ").length > 3 ? "..." : ""}
        </Text>
        <Text style={styles.summary}>
          {summary?.substring(0, 140)} {summary?.length > 140 ? "..." : ""}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GridItem;
