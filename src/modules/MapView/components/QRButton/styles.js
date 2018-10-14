import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 12
    },
    button: {
        position: "absolute",
        bottom: 20,
        right: 20,
        borderRadius: 50,
        width: 75,
        height: 75,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        shadowOffset: { width: -1, height: 2 },
        shadowColor: "gray",
        shadowOpacity: 1.0
    }
})

export default styles;