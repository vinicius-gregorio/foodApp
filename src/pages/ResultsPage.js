import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Flatlist, Image} from 'react-native';
import yelp from '../api/yelp';

const ResultsPage = ({ navigation }) => {
   const id =  navigation.getParam('id');
   const [result, setResult] = useState(null);

   const getResult = async (id) => {
   const response =  await yelp.get(`/${id}`);
    setResult(response.data);
   };

   useEffect(() => {
    getResult (id)
   }, []);
   if(!result) {
       return <View style={styles.container}>
       <ActivityIndicator size="large" color="#00ff00"/>
       </View>;
   }
    return(
        <View>
        {result.is_closed === true ? <View styles={styles.closed}> <Text> Closed </Text></View> : null}
        <Text style={styles.title}> {result.name} </Text>
        <Image style={styles.image} source={{ uri: result.image_url }}/>
         <Text style={styles.subtitle}>Phone: {result.display_phone}</Text>
         <Text style={styles.subtitle}>Price: {result.price}</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    image:{
        height: 200,
        width: 300,
        alignSelf:'center',
        marginBottom: 30,
        borderRadius: 5,
    },
    text:{
        alignSelf: 'center',
        

    },
    title:{
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginHorizontal: 30,
    },
    subtitle: { 
        alignSelf: 'center',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
export default ResultsPage;
