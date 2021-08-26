import { StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerMap: {
    width: 400,
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100

  },
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 26,
    marginBottom: 42

  },
  matches: {
    marginTop: 24,
    marginLeft: 24
  },
  map: {
    width: 350,
    height: 300,
  },
  text: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    alignContent: 'center',
    color: theme.colors.heading
  }
})