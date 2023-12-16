import { Pressable, View, Image, ImageBackground, ScrollView } from "react-native";
import BasicBackButtonLayout from "../../components/Layout/BasicBackButtonLayout";
import LoggedInLayout from "../../components/Layout/LoggedLayout";
import { Ionicons, Entypo, AntDesign, Feather, Octicons, MaterialIcons } from "@expo/vector-icons";
import AppText from "../../components/Display/AppText";
import apptw from "../../utils/lib/tailwind";
import PressAppText from "../../components/Display/PressAppText";
import Popular from "./Components/Popular";
import FamilyValue from "./Components/FamilyValue";
import TastySlides from "./Components/TastySlides";
import Burger from "./Components/Burger";
import Drinks from "./Components/Drinks";
import { RootStackParamList } from "../allroutes";
import { RouteProp, useNavigation } from "@react-navigation/native";
import { RestaurantsArray } from "../../utils/data/mockData";
import { useCartStore } from "../../utils/Cart/useCartStore";


type MyScreenProps = RouteProp<RootStackParamList, "StoreScreen">



type Props = {
    route: MyScreenProps
}

const StoreScreen: React.FC<Props> = ({ route }) => {
    const navigation = useNavigation()

    // console.log(RestaurantsArray.find((resName: {name:string})=>resName.name ==="Spice Paradise"))

    const ResDetails = RestaurantsArray.find((resName: { name: string }) => resName.name === route.params.name)

    const requestCart = useCartStore((state) => state.cart)


    // console.log(requestCart)

    return (
        <LoggedInLayout>
            {/* heaader */}
            <ImageBackground
                source={require("../../assets/icons/images/Store_image.png")}
                imageStyle={apptw`h-60 w-full`}
            >

                <View
                    style={apptw`flex flex-row justify-between py-5   top-0  w-full  mt-5 `}
                >

                    <Pressable
                        onPress={() => { navigation.goBack() }}
                        style={apptw`h-10 w-10 bg-white rounded-full mx-4`}
                    >
                        <AntDesign
                            name="arrowleft"
                            size={20}
                            style={apptw`mx-auto my-auto`}
                            color="black"
                        />

                    </Pressable>




                    <View style={apptw`flex flex-row gap-x-2 mx-4 my-2`}>
                        <Pressable
                            onPress={() => { }}
                            style={apptw`h-10 w-10 bg-white rounded-full`}
                        >
                            <AntDesign
                                name="search1"
                                size={20}
                                style={apptw`mx-auto my-auto`}
                                color="black"
                            />

                        </Pressable>

                        <Pressable
                            onPress={() => { }}
                            style={apptw`h-10 w-10 bg-white rounded-full`}
                        >
                            <Feather
                                name="more-horizontal"
                                size={20}
                                style={apptw`mx-auto my-auto`}
                                color="black"
                            />

                        </Pressable>

                    </View>
                </View>





            </ImageBackground>
            <View
                style={apptw`bg-white h-full mt-20 rounded-t-10`}
            >
                <View style={apptw`flex items-center justify-center absolute left-[40%] top-[-10]  `}>
                    <View style={apptw`bg-white h-19 rounded-full w-19`}>
                        <Image
                            source={require("../../assets/icons/images/Store_Logo.png")}
                        />
                    </View>
                </View>

                {/* store title */}
                <View
                    style={apptw` pt-10 mx-2 flex flex-row justify-between`}
                >
                    <AppText
                        style={apptw`text-black font-bold`}
                    >
                        {ResDetails.name}
                    </AppText>

                    <View
                        style={apptw`flex-row gap-x-4 my-auto`}
                    >
                        <Pressable>
                            <Image
                                source={require("../../assets/icons/Bike.png")}
                                style={apptw`my-auto mx-auto`}
                            />
                        </Pressable>

                        <View
                            style={apptw`rounded-full p-1 bg-[#FD6E5D] w-1 h-1 mx-auto my-auto`}
                        >

                        </View>

                        <Pressable>
                            <Image
                                source={require("../../assets/icons/walkman.png")}
                                style={apptw`my-auto mx-auto`}
                            />
                        </Pressable>
                    </View>

                </View>

                <View>
                    <View style={apptw`flex flex-row gap-x-1 mx-2`}>
                        <Octicons name="star-fill" size={24} color="#FDB91C" />
                        <AppText> {ResDetails.rating}(462) </AppText>
                    </View>
                </View>


                {/* hours */}
                <View
                    style={apptw`w-full px-5 py-2`}
                >

                    <View
                        style={apptw` h-20 w-full border px-2 py-5 mx-auto flex-row gap-x-7 `}
                    >
                        <View>

                            <AppText
                                style={apptw`text-sm text-[#858D9D]`}
                            >
                                Open until:
                            </AppText>
                            <AppText
                                style={apptw`text-sm`}
                            >
                                3:00PM
                            </AppText>
                        </View>

                        <View>

                            <AppText
                                style={apptw`text-sm text-[#858D9D]`}
                            >
                                Delivery fee:
                            </AppText>
                            <AppText
                                style={apptw`text-sm`}
                            >
                                From ₦{ResDetails.deliveryPrice}
                            </AppText>
                        </View>
                        <Pressable
                            style={apptw`flex flex-row`}
                        >
                            <AppText
                                style={apptw`my-auto text-sm `}
                            >
                                More Info
                            </AppText>

                            <MaterialIcons
                                name="keyboard-arrow-right"
                                size={24}
                                style={apptw`my-auto`}
                                color="black" />
                        </Pressable>


                    </View>

                </View>


                {/* deal */}

                <View
                    style={apptw`w-full px-5 py-2`}
                >

                    <View
                        style={apptw` h-10 w-full bg-[#00E3A4] px-5  rounded-lg flex-row gap-x-2 `}
                    >
                        <AntDesign
                            name="tago"
                            size={24}
                            style={apptw` my-auto`}
                            color="black" />

                        <AppText
                            style={apptw` my-auto`}
                        >
                            12 % off some selected products
                        </AppText>
                    </View>

                </View>

                {requestCart?.find((foodI: { storeName: string; quantity: any }) => foodI.storeName === route.params.name) ?

                    <>
                     <Pressable
                    onPress={() => navigation.navigate("BasketScreen")}
                    style={apptw` bg-[#6741FF] py-2 px-15 rounded-full absolute top-[70%] left-[10%] z-10  `}
                >
                    <AppText style={apptw`text-white text-center`}>
                        View Basket ({requestCart?.find((foodI: { storeName: string; quantity: any }) => foodI.storeName === route.params.name)?.info.length}) items
                    </AppText>
                </Pressable>
                    </> :
                  null
                }
               
                {/* itmes */}
                <ScrollView
                    nestedScrollEnabled
                    style={apptw`h-10 py-5 mb-50`}>
                    <Popular index={route.params.name} />
                    <FamilyValue index={route.params.name} />
                    <TastySlides index={route.params.name} />
                    <Burger index={route.params.name} />
                    <Drinks index={route.params.name} />
                </ScrollView>


            </View>
        </LoggedInLayout>
    )
}


export default StoreScreen;