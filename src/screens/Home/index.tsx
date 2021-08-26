import React, { useRef, useState } from "react";
import {
  View,
  Text,
  DrawerLayoutAndroid
} from "react-native";
import { Background } from "../../components/Background";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { theme } from "../../global/styles/theme"
//import { ButtonCreateAc } from "../../components/Button";
//import { Menu } from "../../components/Menu";
import { NavigationContainer } from '@react-navigation/native'
import { ButtonAdd } from "../../components/Button";
import MapView from 'react-native-maps';



export function Home() {
  const navigation = useNavigation();
  const { heading } = theme.colors;

  //function handleLogin() {
  //navigation.navigate('Login');
  //}


  return (
    <Background>

      <View style={styles.container}>
        <ButtonAdd></ButtonAdd>
        <View style={styles.containerMap}>
          <Text
            style={styles.text}
          >
            Encontre o ponto mais proximo
          </Text>
          <MapView style={styles.map} />
        </View>
      </View>
    </Background>
  );
}
