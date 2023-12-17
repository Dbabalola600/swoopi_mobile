import { Pressable, ScrollView, View, StyleSheet } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import { AntDesign, Feather } from "@expo/vector-icons"
import AppText from "../../components/Display/AppText"
import apptw from "../../utils/lib/tailwind"
import { RouteProp, useNavigation } from "@react-navigation/native"
import { RootStackParamList } from "../allroutes"
import { useCartStore } from "../../utils/Cart/useCartStore"
import PressAppText from "../../components/Display/PressAppText"
import CheckoutDrawer from "./Components/CheckoutDrawer"
import { useState } from "react"
import { RestaurantsArray } from "../../utils/data/mockData"

type MyScreenProps = RouteProp<RootStackParamList, "BasketDetails">



type Props = {
    route: MyScreenProps
}


const BasketDetails: React.FC<Props> = ({ route }) => {

    const navigation = useNavigation()

    const requestCart = useCartStore((state) => state.cart)
    const deleteFromCart = useCartStore((store) => store.removeFromCart)

    const addToCart = useCartStore((state) => state.addToCart)
    const decrease = useCartStore((state) => state.decreaseQunatity)


    const ResDetails = requestCart[route.params.index]
    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const openDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);


    const storeDets = RestaurantsArray.find((resName: { name: string }) => resName.name === ResDetails?.storeName)




    function addCart(info: any) {
        const breakdown = {
            storeName: storeDets?.name,
            info: [{ ...info, quantity: 1 }]
        }

        addToCart(breakdown)
    }


    function reduceQuant(info: any) {
        const breakdown = {
            storeName: storeDets?.name,
            info: [{ ...info, quantity: 1 }]
        }
        decrease(breakdown)
    }



    function DelItem() {


        deleteFromCart(route.params.index)
        navigation.goBack()
    }


    return (
        <LoggedInLayout>
            <View style={apptw`h-full`} >

                <View
                    style={apptw`flex flex-row  py-5   justify-between top-0  w-full  mt-5 `}
                >
                    <View
                        style={apptw`flex flex-row`}
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
                            {ResDetails?.storeName}
                        </AppText>


                    </View>

                    <Pressable
                        onPress={() => DelItem()}
                        style={apptw`my-auto mx-4`}
                    >
                        <Feather name="trash-2" size={24} color="#48505E" />
                    </Pressable>


                </View>



                <ScrollView
                    nestedScrollEnabled
                    style={apptw``}
                >


                    <View
                        style={apptw`border py-2 mx-5 px-4 rounded-md border-[#D9DCE2] `}
                    >

                        {ResDetails?.info.map((items: any, index: any) => (
                            <View
                                key={index}
                            >
                                <View>
                                    <View
                                        style={apptw`flex-row justify-between`}
                                    >
                                        <View>
                                            <AppText>
                                                {items.name}
                                            </AppText>
                                            <AppText>
                                                ₦{items.price}
                                            </AppText>
                                        </View>

                                        <View
                                            style={apptw`bg-[#F0ECFF] w-12 h-7 rounded-full`}
                                        >
                                            <AppText style={apptw`text-primary text-center`}>
                                                {items.quantity}x
                                            </AppText>
                                        </View>


                                    </View>


                                    <View
                                        style={apptw`flex-row justify-between pb-2 py-3`}
                                    >
                                        <View
                                            style={apptw`border border-[#B9BDC7] w-12 h-12 rounded-full`}
                                        >
                                            <PressAppText
                                                onPress={() => reduceQuant(storeDets?.products[index])}
                                                style={apptw` text-center my-auto text-4xl`}>
                                                -
                                            </PressAppText>

                                        </View>

                                        <View
                                            style={apptw`border border-[#B9BDC7] w-12 h-12 rounded-full`}
                                        >
                                            <PressAppText
                                                onPress={() => addCart(storeDets?.products[index])}
                                                style={apptw` text-center my-auto text-4xl`}>
                                                +
                                            </PressAppText>
                                        </View>


                                    </View>
                                    <View style={styles.line}></View>
                                </View>
                            </View>
                        ))}




                    </View>

                    <View
                        style={apptw`mx-5 my-4`}
                    >
                        <PressAppText

                            onPress={() => navigation.navigate("StoreScreen", { name: ResDetails.storeName })}
                            style={apptw`text-primary`}>
                            + Add more items
                        </PressAppText>
                    </View>





                </ScrollView>
                <Pressable

                    onPress={() => openDrawer()}
                    style={apptw` bg-[#6741FF] py-2 px-30 rounded-full absolute top-[90%] left-[10%] z-10  `}
                >

                    <AppText style={apptw`text-white text-center`}> checkout</AppText>
                </Pressable>

                <CheckoutDrawer isVisible={isDrawerVisible} onClose={closeDrawer} index={route.params.index} >


                </CheckoutDrawer>
            </View>
        </LoggedInLayout>
    )
}


const styles = StyleSheet.create({

    line: {
        borderBottomColor: '#D9DCE2',
        borderBottomWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10
    },

});
export default BasketDetails