import * as React from "react";
import { Button, StyleSheet, View } from "react-native";

import {createPictureObject, PictureObject} from '../utils/create-picture-object'
import MyPicture from "../components/my-picture";
import { setPictureToCollection } from "../utils/storage-service";
import NavigationBar from '../components/navigation-bar';
import { API_URL } from "../utils/constants";


export default function Home() {
    const [picture, setPicture] = React.useState<PictureObject>()
    const [allowSave, setAllowSave] = React.useState<boolean>(false)

    const getPictureHandler = async () => {
        const res = await fetch(API_URL)
        const data = await res.json();
        const pictureObject = createPictureObject(data.message)
        setPicture(pictureObject)
        setAllowSave(true)
    }

    const savePictureHanlder = async () => {
        if (!picture || !allowSave) {
            return;
        }
        await setPictureToCollection(picture)
        setAllowSave(false)
    }

    return (
        <>
            <NavigationBar />
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button 
                        title="Get Picture"
                        onPress={getPictureHandler}
                    />

                    {allowSave && <Button 
                        title="Save Picture"
                        onPress={savePictureHanlder}
                    />}
                </View>
                {picture && <MyPicture picture={picture}/>}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
})