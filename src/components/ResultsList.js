import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ResultsList = ({ title, results, }) => {
    return(
        <>
        <Text style={styles.title}>{title}</Text>
        <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {return <Text>{item.name}</Text>}}

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