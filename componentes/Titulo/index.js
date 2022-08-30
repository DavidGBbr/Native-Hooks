import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const titulo = () => {
return (
    <View style={styles.boxTitle}>
        <Text style={styles.title}>Sorteio</Text>
        <Text style={styles.subtitle}>Hora de ver quem é o vencedor</Text>
    </View>
);
}

export default titulo;