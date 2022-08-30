import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const TelaInicial = () => {
return (
    <View style={styles.screen}>
        <Text style={styles.title}>Toque no botão para receber o resultado do sorteio</Text>

        <View style={styles.boxNumber}>
            <Text style={styles.number}>0</Text>
        </View>
    </View>
);
}
     
export default TelaInicial;