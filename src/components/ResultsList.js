import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';

import ResultsTile from './ResultsTile';


const ResultsList = ({ title, results, navigation}) => {

    if(!results.length){ return null;}

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
                <TouchableOpacity onPress={() => navigation.navigate('Results', {
                    id: item.id
                })}>
                     <ResultsTile result = {item} />
                </TouchableOpacity>
            );}}

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
export default withNavigation(ResultsList);