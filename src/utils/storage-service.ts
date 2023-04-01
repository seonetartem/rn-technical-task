import { AsyncStorage } from 'react-native'

import { PictureObject } from "./create-picture-object";

const collectionKey = '@Pictures:key'

export async function setPictureToCollection(picture: PictureObject): Promise<void> {
    try {
        let collection = await getPictures()
        collection.push(picture)

        await AsyncStorage.setItem(
            collectionKey,
            JSON.stringify(collection)
        )
    } catch (e) {
        return Promise.reject(e)
    }
}

export async function getPictures(): Promise<PictureObject[]> {
    const res = await AsyncStorage.getItem(collectionKey)
    const collection = res && JSON.parse(res)
    return Array.isArray(collection) ? collection : []
}

export async function removePicture(id: string): Promise<void> {
    let collection = await getPictures()
    collection = collection.filter((item) => id !== item.id)

    await AsyncStorage.setItem(
        collectionKey,
        JSON.stringify(collection)
    )
}