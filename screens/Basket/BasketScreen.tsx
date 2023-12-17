import { Pressable, ScrollView, View, Text, Image } from "react-native";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import { AntDesign, Feather } from "@expo/vector-icons";
import apptw from "../../utils/lib/tailwind";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../allroutes";
import AppText from "../../components/Display/AppText";
import DeleteDrawer from "./Components/BoottomDrawer";
import { useState } from "react";
import { useCartStore } from "../../utils/Cart/useCartStore";



type ScreenProps = NativeStackScreenProps<RootStackParamList, "BasketScreen">




export default function BasketScreen({ navigation }: ScreenProps) {

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isLocationVisible, setLocationVisible] = useState(false);
    const [isIndex, SetIndex] = useState<any>("")
    const openDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);

    const requestCart = useCartStore((state) => state.cart)
    const calculateTotalPrice = (infoArray: any) => {
        return infoArray.reduce((total: any, item: { price: any; }) => total + (item.price || 0), 0);
    };

    console.log(requestCart.length)
    return (
        <LoggedInLayout>
            <View>
                <View
                    style={apptw`flex flex-row  py-5   top-0  w-full  mt-5 `}
                >

                    <Pressable
                        onPress={() => { navigation.goBack() }}
                        style={apptw`h-10 w-10 bg-white rounded-full ml-4`}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={20}
                            style={apptw`mx-auto my-auto`}
                            color="black"
                        />

                    </Pressable>

                    <AppText
                        style={apptw`font-bold my-auto text-xl`}
                    >
                        Your Basket
                    </AppText>



                </View>


                {requestCart.length < 1 ?

                    <>
                        <AppText style={apptw`text-center font-bold text-3xl`}>
                            Empty
                        </AppText>
                    </> :

                    <>
                        <ScrollView
                            nestedScrollEnabled
                            style={apptw`h-[70%] `}
                        >


                            {/* item Icons */}

                            {requestCart.map((items: any, index: any) => (
                                <View
                                    key={index}
                                >
                                    <View
                                        style={apptw` h-55 border mx-4 rounded-xl border-[#D9DCE2] mb-4`}
                                    >


                                        <View
                                            style={apptw`flex-row mx-4 mt-3 justify-between`}
                                        >

                                            <View style={apptw`flex-row gap-x-3`}>
                                                <View
                                                    style={apptw`bg-white border h-21 w-21 rounded-full border-[#D9DCE2]`}
                                                >
                                                    <Image
                                                        source={require(`../../assets/icons/brand_icon.png`)}

                                                    />

                                                </View>
                                                <View style={apptw`w-40`}>
                                                    <AppText>
                                                        {items.storeName}
                                                    </AppText>
                                                    <View style={apptw`flex-row gap-x-2`}>
                                                        <AppText>
                                                            {items.info.length} Items
                                                        </AppText>
                                                        <View style={apptw`h-2 w-2 bg-[#9980FF] rounded-full my-auto`} />
                                                        <AppText>
                                                            {/* ₦{items.info[0].price} */}

                                                            ₦{calculateTotalPrice(items.info)}
                                                        </AppText>
                                                    </View>

                                                    <Text style={apptw``}>
                                                        Delivers to 23, Kudirat Abiola Way, Oba Akran, Ikeja, Lagos
                                                    </Text>
                                                </View>

                                            </View>


                                            <Pressable
                                                onPress={() => { openDrawer(), SetIndex(index) }}
                                            >
                                                <Feather name="more-vertical" size={24} color="black" />
                                            </Pressable>



                                        </View>

                                        <View style={apptw`flex-row justify-between mx-auto gap-x-5 pt-10 pb-2`}>

                                            <Pressable
                                                onPress={() => navigation.navigate("StoreScreen", { name: items.storeName })}
                                                style={apptw`bg-[#F7F5FF] border border-[#9980FF] rounded-full px-6 border-2`}
                                            >
                                                <AppText style={apptw`text-[#6741FF]`}>
                                                    View Store
                                                </AppText>
                                            </Pressable>

                                            <Pressable
                                                style={apptw`bg-[#6741FF]  rounded-full px-6 `}
                                                onPress={() => navigation.navigate("BasketDetails", { index: index })}
                                            >
                                                <AppText style={apptw`text-white`}>
                                                    View Basket
                                                </AppText>
                                            </Pressable>
                                        </View>

                                    </View>

                                </View>
                            ))}


                        </ScrollView>
                    </>
                }


                <DeleteDrawer isVisible={isDrawerVisible} onClose={closeDrawer} index={isIndex}  >

                </DeleteDrawer>

            </View>
        </LoggedInLayout>
    )
}