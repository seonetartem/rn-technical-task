import * as React from 'react'
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import {Screens} from "../utils/constants";
import { useNavigation } from '@react-navigation/native';

export default function NavigationBar() {
    const navigation = useNavigation<any>()
    return (
      <View style={styles.root}>
        <View><TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Screens.home)}><Text>Home</Text></TouchableOpacity></View>
        <View><Text style={styles.separator}>{'>'}</Text></View>
        <View><TouchableOpacity style={styles.button} onPress={() => navigation.navigate(Screens.carousel)}><Text>Carousel</Text></TouchableOpacity></View>
      </View>
    )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    margin: 15,
    alignItems: 'center',
    marginBottom: 50
  },
  button: {
    padding: 10
  },
  separator: { paddingHorizontal: 8 }
})