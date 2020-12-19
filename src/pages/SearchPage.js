import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchPage = () => {
    return(
        <View style = {styles.pageContainer}>
        <SearchBar/>
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
