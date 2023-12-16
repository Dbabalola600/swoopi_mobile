import { AntDesign, MaterialIcons, Octicons } from "@expo/vector-icons";
import { View, Image, ImageBackground, ScrollView } from "react-native";
import AppText from "../../../components/Display/AppText";
import apptw from "../../../utils/lib/tailwind";
import DashFoodCards from "../../../components/Display/DashFoodCards";
import { RestaurantsArray } from "../../../utils/data/mockData";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../allroutes";
import { useNavigation } from "@react-navigation/native";
import { useCartStore } from "../../../utils/Cart/useCartStore";




export default function TopDeals() {

    const navigation = useNavigation()
  
    const getStore = (index: any) => {
        // console.log(index)

        navigation.navigate("StoreScreen", { name: index })
    }




    return (
        <View>
            <View style={apptw`flex flex-row justify-between mx-2 my-5`}>
                <AppText style={apptw`font-bold text-xl`}>
                    Top Deals
                </AppText>

                <View style={apptw`flex flex-row justify-between`}>
                    <AppText style={apptw`font-nornal text-md my-auto`}>
                        See all

                    </AppText>
                    <MaterialIcons
                        name="keyboard-arrow-right"

                        size={24}
                        style={apptw`my-auto`}
                        color="black" />
                </View>

            </View>

            <ScrollView
                horizontal
            >
                {RestaurantsArray.map((items, index) => (
                    <View
                        key={index}
                    >
                        <DashFoodCards
                            onClick={() => getStore(items.name)}
                            title={items.name}
                            deliveryPrice={items.deliveryPrice}
                            rating={items.rating}
                            deliveryTime={items.deliveryTime}
                        />

                    </View>
                ))}




            </ScrollView>



        </View>

    )
}