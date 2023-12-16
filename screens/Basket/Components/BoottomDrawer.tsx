import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, Image, FlatList } from 'react-native';
import AppText from '../../../components/Display/AppText';
import apptw from '../../../utils/lib/tailwind';
import { Feather } from '@expo/vector-icons';
import PressAppText from '../../../components/Display/PressAppText';
import { useCartStore } from '../../../utils/Cart/useCartStore';



const DeleteDrawer = ({ isVisible, onClose, index }) => {

    console.log(index)
    const clearCart = useCartStore((state) => state.clearCart)

    function deleteAll() {
        clearCart()
        onClose()

    }


    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}

        >


            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPressOut={onClose} // Close the modal when clicking the background
            >
                <View style={styles.drawerContainer}>
                    <View style={apptw`h-2 bg-[#626262CC] rounded-full mx-auto w-10`}>

                    </View>


                    <PressAppText
                        onPress={() => deleteAll()}
                        style={apptw`font-bold py-2 text-[#EE2024]`}
                    >
                        <Feather name="trash-2" size={24} color="#EE2024" />
                        Clear Basket
                    </PressAppText>




                </View>
            </TouchableOpacity>
        </Modal>
    );
};



const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    drawerContainer: {
        backgroundColor: 'white',
        padding: 16,
        width: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
});
export default DeleteDrawer;


