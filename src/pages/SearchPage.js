import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    const [term, setTerm] = useState('');
    return(
        <View style = {styles.pageContainer}>
        <SearchBar term = {term} onTermChange = {(newTerm) => setTerm(newTerm)}/>
        <Text> search page</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer:{
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
});
export default SearchPage;
