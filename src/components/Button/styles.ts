import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  buttonAdd: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.heading,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end'
  }
});