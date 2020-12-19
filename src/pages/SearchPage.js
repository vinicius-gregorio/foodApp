import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    const [term, setTerm] = useState('');
    return(
        <View style = {styles.pageContainer}>
        <SearchBar 
        term = {term}
         onTermChanged = {(newTerm) => setTerm(newTerm)}
         onSubmit = { () => console.log('submit')}/>
        <Text> search page {term}</Text>
        
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
