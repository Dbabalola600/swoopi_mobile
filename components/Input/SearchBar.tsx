import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable, GestureResponderEvent } from 'react-native';

import { FontAwesome } from '@expo/vector-icons';



type buttonProp = {
    onPress?: any
    // onPress?: ((event: GestureResponderEvent) => void) | null | undefined;
}

const SearchBar = (props: buttonProp) => {
    const [searchText, setSearchText] = useState('');
    const navigation = useNavigation();

    const search = () => {
        if (searchText !== "") {
            console.log("searched")
        }
    }

    const handlePress = () => {
        // Access the searchText value here
        props.onPress(searchText);
    };


    return (
        <View style={styles.container}>
            <Pressable
                onPress={handlePress}

            >
                <FontAwesome name="search" size={24} color="black" />
            </Pressable>
            <TextInput
                style={styles.input}
                placeholder="Search Swoopie"
                value={searchText}
                onChangeText={setSearchText}
            />



        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        width: "95%",
        padding: 10,
        borderRadius: 10, 
        margin: 10,
        overflow: 'hidden', 
    },
    input: {
        flex: 1,
        paddingVertical: 5,
        paddingLeft:10,
        fontSize: 15
    },
});


export default SearchBar