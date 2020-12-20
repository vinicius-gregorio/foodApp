import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultsTile from './ResultsTile';

const ResultsList = ({ title, results, }) => {
    return(
        <>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
            return (
            <ResultsTile result = {item}/>);}}

        />
        </>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});
export default ResultsList;