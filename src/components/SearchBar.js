import React from 'react';
import { View, Text, StyleSheet , TextInput} from 'react-native';

const SearchBar = () => {
    return(
        <View style = {styles.background}>
        <Text> search bar</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0EEEE',
        height: 40,
        borderRadius : 5,
        marginHorizontal: 15,
    }
});
export default SearchBar;
