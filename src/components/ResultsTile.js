import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultsTile = ({ result }) => {
    return(
        <>
        <Text>{result.name}</Text>
        </>
    );
}

const styles = StyleSheet.create({});
export default ResultsTile;
