import React from "react";
import { Text, StyleSheet } from "react-native";

const Classification = ({ clas }) => {

    const styles = StyleSheet.create({
        classification: {
            marginTop: 20,
            fontSize: 24,
            textAlign: 'center',
            color: '#333',
        }
    }
    );

    return (
        <Text style={styles.classification}>Sua classificação é: {clas}</Text>
    );
};

export default Classification


