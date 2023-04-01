import * as React from "react";
import { View, Button, FlatList, Dimensions } from "react-native";

import { PictureObject } from "../utils/create-picture-object";
import { getPictures, removePicture } from "../utils/storage-service";
import MyPicture from "../components/my-picture";
import NavigationBar from '../components/navigation-bar';
import ConfirmationPopup from "../components/confirmation-popup";

const windowWidth = Dimensions.get('window').width;

export default function Carousel() {
    const [pictures, setPictures] = React.useState<PictureObject[]>([])
    const [showConfirmation, setShowConfirmation] = React.useState<boolean>(false)
    const [selectedPicture, setSelectedPicture] = React.useState<string>('')

    React.useEffect(() => {
        getPictures().then((collection: PictureObject[]) => {
            setPictures(collection)
        })
    }, [])

    const showConfirmationPopup = (id: string) => {
      setShowConfirmation(true)
      setSelectedPicture(id)
    }

    const cancelHandler = () => {
      setShowConfirmation(false)
      setSelectedPicture('')
    }

    const confirmHandler = async () => {
      await removePicture(selectedPicture)
      await getPictures().then((collection: PictureObject[]) => {
        setPictures(collection)
      })
      cancelHandler()
    }

    return (
        <>
            <NavigationBar />
            <FlatList
                data={pictures}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={{ width: windowWidth }}>
                        <MyPicture picture={item}/>
                        <Button title="Delete" onPress={() => showConfirmationPopup(item.id)}/>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
            {showConfirmation && (<ConfirmationPopup confirmHandler={confirmHandler} cancelHandler={cancelHandler} />)}
        </>
        
    )
}