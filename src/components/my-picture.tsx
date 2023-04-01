import * as React from 'react'
import { Image, View, Text, StyleSheet, Dimensions } from 'react-native'

import { PictureObject } from '../utils/create-picture-object'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignItems: 'center'
    },
    logo: {
        width: windowWidth * 0.95,
        height: 400
    },
    label: {
        fontSize: 20
    }
  });

export default function MyPicture({ picture }: { picture: PictureObject }) {
    return (
        <View style={styles.container}>
            <Image resizeMode={'contain'} style={styles.logo} source={{ uri: picture.url}}/>
            <Text style={styles.label}>{picture.name}</Text>
        </View>
    )
}