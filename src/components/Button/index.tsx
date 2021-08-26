import React from "react";
import {
  View,
  Image,
  Text,
  TextInput
} from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";
import Apple from '../../assets/Apple.png';
import Google from '../../assets/Google.png';
import Facebook from "../../assets/Facebook.png";
type Props = RectButtonProps & {
  title?: string;
}

export function ButtonAdd({ ...rest }: RectButtonProps) {
  return (
    <RectButton
      style={styles.buttonAdd}
      {...rest}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.primary}
        size={30}
      />
    </RectButton>
  );
}

export function Button({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.container}
      {...rest}
    >
      <MaterialCommunityIcons
        color={theme.colors.heading}
        size={24}
      />
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  )
}

export function ButtonCreateAc({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.buttonAc}
      {...rest}
    >
      <MaterialCommunityIcons
        name="plus"
        color={theme.colors.primary}
        size={30}
      />
      <Text style={styles.title}>
        {title}
      </Text>
    </RectButton>
  );
}

export function ButtonEnter({ title, ...rest }: Props) {
  return (
    <RectButton
      style={styles.buttonEnter}
      {...rest}
    >
      <Text style={styles.textEnter}>
        {title}
      </Text>
    </RectButton>
  );
}

export function ButtonGoogle({ ...rest }: Props) {
  return (
    <RectButton
      style={styles.buttonGg}
      {...rest}
    >
      <View style={styles.buttonGg}>
        <Image source={Google} style={styles.buttonGg} />
      </View>
    </RectButton>
  );
}

export function ButtonFacebook({ ...rest }: Props) {
  return (
    <RectButton
      style={styles.buttonFc}
      {...rest}
    >
      <View style={styles.buttonFc}>
        <Image source={Facebook} style={styles.buttonFc} />
      </View>
    </RectButton>
  );
}

export function ButtonICloud({ ...rest }: Props) {
  return (
    <RectButton
      style={styles.buttonIc}
      {...rest}
    >
      <View style={styles.buttonIc}>
        <Image source={Apple} style={styles.buttonIc} />
      </View>
    </RectButton>
  );
}