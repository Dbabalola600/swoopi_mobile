import React, { FC, useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, Pressable, Image, FlatList } from 'react-native';
import AppText from '../../../../components/Display/AppText';
import apptw from '../../../../utils/lib/tailwind';
import CatgoriesCard from '../../../../components/Display/CategoriesCard';


const BottomDrawer = ({ isVisible, onClose, }) => {


    const dashItems = [
        { name: "Restaurant", image: require("../../../../assets/icons/restaurant_image.png"), click: () => { } },
        { name: "Supermarket", image: require("../../../../assets/icons/supermarket_image.png"), click: () => { } },
        { name: "Pharmacy", image: require("../../../../assets/icons/pharmacy_image.png"), click: () => { } },
        { name: "Flower", image: require("../../../../assets/icons/flower_image.png"), click: () => { } },
        { name: "Drinks", image: require("../../../../assets/icons/drinks_image.png"), click: () => { } },

        { name: "Dispatch", image: require("../../../../assets/icons/dispatch_image.png"), click: () => { } },

    ]
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}

        >
            {/* <View style={apptw``}>
          <View style={apptw``}> */}

            <TouchableOpacity
                style={styles.modalContainer}
                activeOpacity={1}
                onPressOut={onClose} // Close the modal when clicking the background
            >
                <View style={styles.drawerContainer}>
                    <View style={apptw`h-2 bg-[#626262CC] rounded-full mx-auto w-10`}>

                    </View>
                    <AppText
                        style={apptw`font-bold py-2`}
                    >All Categories</AppText>
                  

                    <FlatList
                        data={dashItems}
                        numColumns={4}
                        renderItem={({ item, index }) => (
                            <View
                                key={index}
                                style={apptw`px-1 py-2`}
                            >

                                <CatgoriesCard
                                    name={item.name}
                                    image={item.image}
                                />
                            </View>
                        )}
                    />

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
export default BottomDrawer;


