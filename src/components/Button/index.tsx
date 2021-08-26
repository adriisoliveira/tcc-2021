import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { styles } from "./styles";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { theme } from "../../global/styles/theme";

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