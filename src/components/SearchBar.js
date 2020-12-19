import React from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return(
        <View style = {styles.background}>
            <Feather name='search' style= {styles.searchIcon}/>
            <TextInput placeholder='Search' style= {styles.textInputStyle}/>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius : 5,
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    textInputStyle: {
        fontSize: 18,
        flex: 1,

    },
    searchIcon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,

    }
});
export default SearchBar;
