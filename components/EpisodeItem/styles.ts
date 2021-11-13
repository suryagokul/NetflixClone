import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:5
    },
    image:{
        height:75,
        aspectRatio:16/9,
        borderRadius:3,
        resizeMode:'cover'
   },
   titleContainer: {
    flex:1,
    padding:5,
    justifyContent:'center'
   },
    title: {
    
    },
    duration: {
        color:'darkgrey'
    },
    plot:{
        color:'darkgrey',
        margin:5
    }
})

export default styles;