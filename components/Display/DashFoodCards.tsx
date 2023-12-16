import { AntDesign, Octicons } from "@expo/vector-icons";
import { View, ImageBackground, Image, GestureResponderEvent, Pressable } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from "./AppText";


type Myprops={
    title?: any
    deliveryPrice?: any
    rating?: any
    deliveryTime?: any
    onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
    
}


export default function DashFoodCards(props:Myprops){
    return(
        <Pressable
        onPress={props.onClick}

        style={apptw` mx-5`}
    >

        <ImageBackground
            source={require("../../assets/icons/chicken_roast.png")}
            imageStyle={{ borderRadius: 5 }}
            style={apptw`  rounded-t-2  rounded-b-2 h-30 mx-`}>
            <View style={apptw`flex flex-row py-5 justify-between`}>
                <View style={apptw`bg-[#00E3A4] h-7 w-40 rounded-r-5  px-2`}>
                    <AppText>
                        Buy 3, get 1 free
                    </AppText>

                </View>

                <View style={apptw`bg-[#00000099]   px-2 my-auto mx-3 rounded-l-2 rounded-r-2 py-2 `}>
                    <AntDesign name="hearto" size={20} color="white" />

                </View>


            </View>

            <View style={apptw`flex flex-row mx-1  justify-between`}>
                <View style={apptw` `}>


                </View>

                <View style={apptw`bg-white flex flex-row  px-2 my-auto mx-3 rounded-l-2 rounded-r-2 py-2 `}>

                    <Image
                        source={require("../../assets/icons/Bike.png")}
                        style={apptw`my-auto`}
                    />
                    <AppText style={apptw`text-sm ml-2`}>
                        {props.deliveryTime} mins
                    </AppText>

                </View>


            </View>
        </ImageBackground>


        <View style={apptw`flex flex-row justify-between pt-2`}>
            <AppText>
                {props.title}
            </AppText>
            <View style={apptw`flex flex-row gap-x-1`}>
                <Octicons name="star-fill" size={24} color="#FDB91C" />
                <AppText>{props.rating}</AppText>
            </View>
        </View>

        <AppText style={apptw`text-[#667085]`}>
            ₦{props.deliveryPrice} delivery fee
        </AppText>

    </Pressable>
    )
}