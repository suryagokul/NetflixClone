import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: '100%',
        aspectRatio: 16/9
    },
    title: {
        color: 'white',
        fontSize: 20
    },
    match: {
        color:'#43f740',
        marginRight:5
    },
    year: {
        color:'#757575',
        marginRight:5
    },
    ageContainer: {
        backgroundColor:'#e6e228',
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:4,
        marginRight:5
    },
    age: {
        color:'black'
    },
    playButton: {
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        marginVertical:5,
        padding:5
    },
    playButtonText:{
            color:'black',
            fontSize:20,
            fontWeight:'bold'       
    },
    downloadButton:{
        backgroundColor:'#757575',
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        borderRadius:3,
        // marginVertical:5
    },
    downloadButtonText: {
        color:'white',
        fontSize:20,
        fontWeight:'bold'      
    },
    socialicons: {
        // paddingLeft:10,
        paddingRight:60
    }
})

export default styles;