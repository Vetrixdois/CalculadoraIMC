import { Text,StyleSheet } from "react-native";

const Title = ()=>{

    const styles = StyleSheet.create({
        title:{
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: 24,
        },
    });

    return(
        <Text style={styles.title}>Calculadora de IMC</Text>
    );


}

export default Title

