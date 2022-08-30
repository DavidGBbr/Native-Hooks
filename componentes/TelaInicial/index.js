import React, {useState} from 'react';
import { View, Text, Button } from 'react-native';
import styles from './style';

const TelaInicial = () => {
    const [ numeroSorteado, setNumeroSorteado ] = useState(0);

    const gerarNumero = () => {
        const novoNumero = Math.floor(Math.random() * (101 - 1) + 1);
        setNumeroSorteado(novoNumero);
    }

return (
    <View style={styles.screen}>
        <Text style={styles.title}>Toque no botão para receber o resultado do sorteio</Text>

        <View style={styles.boxNumber}>
            <Text style={styles.number}>{numeroSorteado}</Text>
        </View>

        <View style={styles.boxButton}>
            <Button title='Sortear' onPress={gerarNumero} color="#135158"/>
        </View>
    </View>
);
}
     
export default TelaInicial;