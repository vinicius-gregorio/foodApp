import React, { useState } from 'react';
import { View, Text, StyleSheet , ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';


const SearchPage = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();


    const filterResultsByPrice = (price) => {
        return results.filter(result => {
            return result.price === price;
        });
    };


    return (
        <View style={styles.pageContainer}>
            <SearchBar
                term={term}
                onTermChanged={setTerm}
                onSubmit={() => searchApi(term)} />
                {errorMessage ? <Text>{errorMessage}</Text> : null}
                <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title='$   - Cost Effective'/>
                <ResultsList results={filterResultsByPrice('$$')} title='$$  - Bit Pricier'/>
                <ResultsList results={filterResultsByPrice('$$$')} title='$$$ - Big Spender'/>
                </ScrollView>
            

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
