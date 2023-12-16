import React, { FC, useState } from 'react';
import { View,  TouchableOpacity, Modal, StyleSheet, Pressable, Image, FlatList } from 'react-native';
import AppText from '../../../components/Display/AppText';
import apptw from '../../../utils/lib/tailwind';
import { Feather } from '@expo/vector-icons';
import PressAppText from '../../../components/Display/PressAppText';
import { useCartStore } from '../../../utils/Cart/useCartStore';



const CheckoutDrawer = ({ isVisible, onClose }) => {


    const clearCart = useCartStore((state) => state.clearCart)

   


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
                    <AppText style={apptw`mt-20`}>
                        Order placed successfully! Now awaiting the vendor’s decision.
                    </AppText>

                    <Pressable
                        onPress={() => onClose()}
                        style={apptw`font-bold py-2 bg-primary rounded-full my-10`}
                    >

                        <AppText style={apptw`text-white text-center `}>
                            Okay, got that!
                        </AppText>
                    </Pressable>




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
export default CheckoutDrawer;


