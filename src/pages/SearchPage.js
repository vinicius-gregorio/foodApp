import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchPage = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async () => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term,
                    location: 'santos'
                }
            });
            setResults(response.data.businesses);
        }
        catch (error) {
            setErrorMessage('Something Went Wrong');
        }
    }
    return (
        <View style={styles.pageContainer}>
            <SearchBar
                term={term}
                onTermChanged={setTerm}
                onSubmit={searchApi} />
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
