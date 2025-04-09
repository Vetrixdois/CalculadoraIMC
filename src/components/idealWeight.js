import React from "react";
import { Text,StyleSheet } from "react-native";
import FormIMC from "./FormIMC";

const idealWeight = ({pesoMinIdeal, pesoMaxIdeal})=>{

    const styles = StyleSheet.create({
        idealPeso:{
                marginTop: 20,
                fontSize: 24,
                textAlign: 'center',
                color: '#333',
        }
    });

    return(
        <Text>Seu peso ideal está entre {pesoMinIdeal} e {pesoMaxIdeal}</Text>
    );
};

export default idealWeight;