import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";

function CircleButton({ onPress }) {
  return (
    <View style={styles.circleButtonContainer}>
      <Pressable onPress={onPress} style={styles.circleButton}>
        <MaterialIcons name="add" size={38} color="#25292e" />
      </Pressable>
    </View>
  );
}

export default CircleButton;
const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    borderRadius: 42,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: "#ffd33d",
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 42,
    backgroundColor: "#fff",
  },
});
