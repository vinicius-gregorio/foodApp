import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsTile from './ResultsTile';

const ResultsList = ({ title, results, }) => {
    return(
        <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
            <ResultsTile result = {item}/>);}}

        />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    container:{
        marginBottom: 10,
    },
});
export default ResultsList;