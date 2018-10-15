import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: Dimensions.get("window").width,
        height: 80,
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e74c3c",
        shadowOffset: { width: 0, height: -1 },
        shadowColor: "#e74c3c",
        shadowRadius: 0,
        shadowOpacity: 1.0,
        zIndex: 200
    },
    text: {
        color: "white", 
        fontSize: 30, 
        fontWeight: "700",
        fontFamily: 'Montserrat'
    }
})

export default styles;