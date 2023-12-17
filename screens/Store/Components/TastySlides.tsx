import { View, Text, Image, ImageBackground, Pressable, StyleSheet } from "react-native";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";
import { Feather } from "@expo/vector-icons";
import PressAppText from "../../../components/Display/PressAppText";
import { RestaurantsArray } from "../../../utils/data/mockData";
import { useCartStore } from "../../../utils/Cart/useCartStore";




export default function TastySlides(index: any) {

    const ResDetails = RestaurantsArray.find((resName: {name:string})=>resName.name === index.index)
    const addToCart = useCartStore((state) => state.addToCart)
    const removeFromCart = useCartStore((state) => state.removeFromCart)
    const requestCart = useCartStore((state) => state.cart)
    const decrease = useCartStore((state) => state.decreaseQunatity)


    function addCart(info: any) {
        const breakdown = {
            storeName: ResDetails?.name,
            info: [{ ...info, quantity: 1 }]
        }

        addToCart(breakdown)
    }


    function reduceQuant(info: any) {
        const breakdown = {
            storeName: ResDetails?.name,
            info: [{ ...info, quantity: 1 }]
        }
        decrease(breakdown)
    }





    const isCart = requestCart.find((resName: { storeName: string }) => resName.storeName === index.index)

    return (
        <View style={apptw`mb-10`}>
            <AppText style={apptw`font-bold mx-5  pt-5`}>
                Tasty Slides
            </AppText>

            <View style={styles.line}></View>


            {ResDetails?.products.map((items, index) => (
                <View
                    key={index}
                >

                    <View
                        style={apptw` flex flex-row justify-between px-5 gap-x-5 w-[100%]`}
                    >
                        {isCart?.info.find((foodI: { name: string; }) => foodI.name === items.name) &&
                            <View style={apptw`bg-primary h-full w-2 rounded-r-full  absolute`}>

                            </View>}


                        <View
                            style={apptw`w-[50%]`}
                        >
                            <AppText style={apptw`font-bold`}>
                                {items.name}
                            </AppText>
                            <Text style={apptw`text-[3]`}>
                                {items.description}
                            </Text>
                            <View style={apptw`flex flex-row mt-2`}>

                                <Pressable>
                                    <Feather name="thumbs-up"
                                        style={apptw`my-auto`}
                                        size={20} color="black"
                                    />
                                </Pressable>

                                <Text style={apptw`my-auto ml-1`}>
                                    90%
                                </Text>

                                <View
                                    style={apptw`bg-[#858D9D] h-2 w-2 rounded-full my-auto mx-4`}
                                />

                                <Text style={apptw`my-auto`}>₦ {items.price}</Text>

                            </View>

                        </View>



                        <View
                            style={apptw``}
                        >
                            <Image
                                source={require("../../../assets/icons/images/food/pottage_beans.png")}
                                style={apptw`h-30 w-40 mx-auto rounded-lg`}
                            />

                            <View
                                style={apptw``}
                            >



                                {isCart?.info.find((foodI: { name: string; }) => foodI.name === items.name) ?

                                    <View>
                                        <Pressable
                                            style={apptw`rounded-full h-10 w-30 bg-[#D0C4FF] border border-[#6741FF] border-2 mx-auto top-[-5] flex-row justify-between `}
                                        >

                                            <Pressable

                                                onPress={() => reduceQuant(ResDetails?.products[index])}
                                                style={apptw`my-auto px-2`}
                                            >

                                                <Feather name="trash-2" size={24} color="#6741FF" />

                                            </Pressable>



                                            {isCart?.info.find((foodI: { name: string; quantity: any }) => foodI.name === items.name) ? (
                                                <AppText style={apptw`text-center text-xl text-[#6741FF] my-auto`}>
                                                    {isCart?.info.find((foodI: { name: string; quantity: any }) => foodI.name === items.name)?.quantity}
                                                </AppText>
                                            ) : (
                                                <AppText style={apptw`text-center text-xl text-[#6741FF] my-auto`}>
                                                    nop
                                                </AppText>
                                            )}


                                            <PressAppText
                                                onPress={() => addCart(ResDetails?.products[index])}
                                                style={apptw`text-center text-3xl text-[#6741FF] my-auto px-2`}
                                            >
                                                +
                                            </PressAppText>
                                        </Pressable>
                                    </View>
                                    :
                                    <>
                                        <Pressable

                                            onPress={() => addCart(ResDetails?.products[index])}
                                            style={apptw`rounded-full h-10 w-10 bg-[#D0C4FF] border border-[#6741FF] border-2 mx-auto top-[-5] `}
                                        >

                                            <AppText
                                                style={apptw`text-center text-2xl text-[#6741FF]`}
                                            >
                                                +
                                            </AppText>

                                        </Pressable>
                                    </>}



                            </View>


                        </View>
                    </View>

                    <View style={styles.line}></View>

                </View>
            ))}




        </View>
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