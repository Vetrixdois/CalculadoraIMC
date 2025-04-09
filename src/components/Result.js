import React from "react";
import { Text,StyleSheet } from "react-native";

const Result = ({imc})=>{

    
    const styles = StyleSheet.create({
        result:{
            marginTop: 20,
            fontSize: 24,
            textAlign: 'center',
            color: '#333',
        },
    })

    return(
        <Text style={styles.result}>Seu IMC é: {imc}</Text>
        
    );

};

export default Result