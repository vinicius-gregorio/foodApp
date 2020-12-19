import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchPage = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    return (
        <View style={styles.pageContainer}>
            <SearchBar
                term={term}
                onTermChanged={setTerm}
                onSubmit={() => searchApi(term)} />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text> We have found {results.length} results </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    }
});
export default SearchPage;
