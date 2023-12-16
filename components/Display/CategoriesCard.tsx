import { GestureResponderEvent, View, Pressable, Image } from "react-native";
import apptw from "../../utils/lib/tailwind";
import AppText from "./AppText";


type MyProps = {
    name: string
    onClick?: ((event: GestureResponderEvent) => void) | null | undefined;
    image?: any
}


export default function CatgoriesCard(props: MyProps) {
    return (
        <View

        >
            <Pressable
                onPress={props.onClick}
                style={apptw`w-20 `}
            >
                <View
                    style={apptw`bg-[#F0F1F3] w-20 h-20 rounded-lg`}
                >
                    <Image
                        source={`${props.image}`}
                        style={apptw`mx-auto my-auto w-10 h-11`}
                    />
                </View>

                <AppText style={apptw`text-xs text-center`}>
                    {props.name}
                </AppText>
                {props.name === "Dispatch" &&
                    <View style={apptw` border border-[#AA4B71] rounded-full my-2`}>
                        <AppText style={apptw`text-sm mx-auto text-[#AA4B71]`}>
                            Upcoming
                        </AppText>
                    </View>
                }

            </Pressable>



        </View>
    )
}