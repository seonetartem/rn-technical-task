import * as React from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Animated, { FadeInDown } from 'react-native-reanimated'

type Props = {
    confirmHandler: () => void;
    cancelHandler: () => void;
}

export default function ConfirmationPopup({ confirmHandler, cancelHandler }: Props) {
    return (
    <View style={styles.root}>
        <Animated.View
            style={styles.wrapper}
            entering={FadeInDown.duration(800)}
        >
            <View style={styles.header}><Text style={[styles.headerText, styles.text]}>Delete Picture</Text></View>
            <View style={styles.content}>
                <Text style={[styles.contentText, styles.text]}>Are you sure you want to delete this picture? This action cannot be undone.</Text>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity onPress={cancelHandler} style={[{flex: 1, marginRight: 15}]}>
                    <View style={styles.buttonWrapper}><Text style={[styles.button, styles.buttonText]}>Cancel</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={confirmHandler} style={{flex: 1}}>
                    <View style={styles.buttonWrapper}>
                        <Text style={[styles.button, styles.buttonText]}>Confirm</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </Animated.View>
    </View>
    )
}

const styles = StyleSheet.create({
    root: {},
    wrapper: {
        backgroundColor: '#808080',
        padding: 15,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    header: {
        marginBottom: 50
    },
    content: {
        marginBottom: 80
    },
    footer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 80
    },
    text: {
        color: '#ffffff'
    },
    headerText: {
        fontSize: 20,
        fontWeight: '600'
    },
    contentText: {
        fontSize: 18
    },
    buttonWrapper: {
        width: '100%',
    },
    button: {
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        paddingVertical: 10,
        borderColor: '#ffffff',
        borderWidth: 2,
        borderRadius: 10,
    },
    buttonText: {
        color: '#ffffff',
    }
})