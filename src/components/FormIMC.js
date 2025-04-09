import { Text,StyleSheet,TextInput,Button, View } from "react-native";
import Result from "./Result.js";
import Classification from "./Classification.js";
import idealWeight from "./idealWeight.js";
import { use, useState } from "react";

const FormIMC = ()=>{


    const styles = StyleSheet.create({
        formContainer:{
            backgroundColor: 'f0f0f0',
            padding: 16,
            borderRadius: 10, 
        },
        input:{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 8,
            borderRadius: 5,
        },
        btnContainer:{
            display: 'flex',
            justifyContent: 'space-between'
        },
    })

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('')
    const [clas, setClas] = useState(null);
    const [pesoMaxIdeal, setMaxIdeal] = useState(null);
    const [pesoMinIdeal, setMinIdeal] = useState(null);
    const [imc, setImc] = useState(null);

    const calcularIMC = ()=>{
        if(isNaN(peso) && isNaN(altura)){
            setImc("Por favor inserir valores númericos ao formulário!");
            setAltura('');
            setPeso('');            
        }else
        {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalulado = (parseFloat(peso) / (alturaMetros*alturaMetros)).toFixed(2);      
            setImc(imcCalulado);
            setAltura('');
            setPeso('');
            
        if (imcCalulado < 18.5) {
            setClas('Magreza');
        }
        else if(imcCalulado <= 24.9){
            setClas('Normal');
        }else if(imcCalulado <= 29.9){
            setClas('Sobrepeso');
        }else if(imcCalulado <= 34.9){
            setClas('Obesidade grau I')
        }else if(imcCalulado <= 39.9){
            setClas('Obesidade grau II')
        }else{
            setClas('Obesidade grau III')
        }

        const pesoMinimoIdeal = (18.5 *(alturaMetros*alturaMetros)).toFixed(2);
        const pesoMaximoIdeal = (18.5 *(alturaMetros*alturaMetros)).toFixed(2);
        setMaxIdeal(pesoMaximoIdeal);
        setMinIdeal(pesoMinimoIdeal);

        }


    };

    return(
        <View style={styles.formContainer}>
            <TextInput
            style={styles.input}
            placeholder="Peso (kg)"
            keyboardType="numeric"
            value={peso}
            onChangeText={setPeso}
            />

            <TextInput
            style={styles.input}
            placeholder="Altura (cm)"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
            />


            <View style={styles.btnContainer}>
                
            <Button 
            title="Calcular IMC" onPress={calcularIMC}/>
            
            <View style={{marginVertical:10}}/>
            <Button  
            title="Limpar tela" onPress={limparTela}/>
            {imc && <Result imc={imc} />}
            {clas && <Classification clas ={clas}/>}
            {{pesoMinIdeal,pesoMaxIdeal} && <idealWeight pesoMinIdeal={pesoMinIdeal} pesoMaxIdeal={pesoMaxIdeal}/>}
            
            </View>

        </View>
    );

};

export default FormIMC;