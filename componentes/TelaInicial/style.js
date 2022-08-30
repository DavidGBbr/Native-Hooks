import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    screen:{
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
    },

    title:{
        fontSize:16,
        marginVertical:30,
        marginHorizontal:20,
        textAlign:'center',
    },

    boxNumber:{
        backgroundColor:'#10ACBF',
        height:150,
        width:150,
        borderWidth:5,
        borderColor:'#10ACBF',
        borderRadius:75,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },

    number:{
        fontSize:80,
        color:'#fff'
    },

    boxButton:{
        marginTop:40,
        width:170,
    }

})

export default styles;