import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 224,
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textDecorationLine: 'underline',
    textAlign: 'center',
    fontFamily: theme.fonts.title700,
  },
  buttonAdd: {
    height: 48,
    width: 48,
    backgroundColor: theme.colors.heading,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginTop: 10
  },
  buttonAc: {
    width: 50,
    height: 50,
    backgroundColor: theme.colors.heading,
    borderRadius: 8,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonEnter: {
    width: 250,
    height: 100,
    backgroundColor: theme.colors.heading,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textEnter: {
    fontFamily: theme.fonts.title700,
    fontSize: 40,
    color: theme.colors.primary
  },
  buttonGg: {
    width: 60,
    height: 60,
    marginRight: 5,
    marginTop: 10
  },
  buttonFc: {
    width: 60,
    height: 60,
    marginRight: 5,
    marginTop: 10
  },
  buttonIc: {
    width: 60,
    height: 60,
    marginTop: 10
  },
});
