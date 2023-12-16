import { Modal, TouchableOpacity, View, StyleSheet, FlatList, Image } from "react-native";
import AppText from "../../../../components/Display/AppText";
import apptw from "../../../../utils/lib/tailwind";
import CatgoriesCard from "../../../../components/Display/CategoriesCard";
import { Ionicons } from "@expo/vector-icons";






const LocationDrawer = ({ isVisible, onClose, }) => {


    const dashItems = [
        { name: "Restaurant", click: () => { } },
        { name: "Supermarket", click: () => { } },
        { name: "Pharmacy", click: () => { } },
        { name: "Flower", click: () => { } },
        { name: "Flower", click: () => { } },

        { name: "Flower", click: () => { } },

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
                        style={apptw`font-bold py-2 text-2xl pb-5 mx-auto`}
                    >What’s your delivery location?</AppText>




                    <View
                        style={apptw`pb-5`}
                    >

                        <View>
                            <View style={apptw`flex flex-row `}>

                                <Image
                                    source={require("../../../../assets/icons/location_pointer.png")}
                                />
                                <AppText style={apptw`mx-3`}>
                                    Current Location
                                </AppText>

                            </View>

                            <View style={apptw`flex flex-row `}>

                                <View >

                                </View>

                                <View style={apptw`mx-10`}>
                                    <AppText >
                                        23, Kudirat Abiola Way, Oba Akran, Avenue, Lagos, Nigeria.
                                    </AppText>
                                </View>

                            </View>
                        </View>



                        <View style={styles.line}></View>



                        <View>


                            <View style={apptw`flex flex-row `}>

                                <View >
                                    <Ionicons
                                        name="location-outline"
                                        size={30}
                                        style={apptw`bg-white ml-2  font-bold`}
                                    // color="black"
                                    />
                                </View>

                                <View style={apptw`mx-2`}>
                                    <AppText >
                                        12, William Estate, Lekki Phase 1, Admilralty way, Lagos
                                    </AppText>
                                </View>

                            </View>
                        </View>

                        <View style={styles.line}></View>

                        <View>


                            <View style={apptw`flex flex-row `}>

                                <View >
                                    <Ionicons
                                        name="location-outline"
                                        size={30}
                                        style={apptw`bg-white ml-2  font-bold`}
                                    // color="black"
                                    />
                                </View>

                                <View style={apptw`mx-2`}>
                                    <AppText >
                                        Other addresses
                                    </AppText>
                                </View>

                            </View>
                        </View>


                    </View>



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
    line: {
        borderBottomColor: '#D9DCE2',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10
    },

});
export default LocationDrawer;


