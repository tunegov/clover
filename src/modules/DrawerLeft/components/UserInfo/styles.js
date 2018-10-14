import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: 250,
        margin: 20,
        marginTop: 30,
        flexDirection: "row"
    },
    flex1: {
        flex: 1
    },
    avatar: {
        width: 75,
        height: 70,
        resizeMode: "contain",
        borderRadius: 75/2
    },
    userInfo: {
        flex: 2, 
        justifyContent: "center", 
        height: 85 
    },  
    text: {
        color: "white", 
        marginLeft: 20, 
        fontSize: 18,
        marginBottom: 5,
        fontFamily: 'Montserrat',
        fontWeight: '500'
    },
    bold: {
        fontWeight: '700'
    }
})

export default styles;