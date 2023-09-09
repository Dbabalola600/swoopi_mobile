import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, ImageBackground, Image, Pressable  } from "react-native";
import AppText from "../components/Display/AppText";
import apptw from "../utils/lib/tailwind";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props: any) {
   
    const navigation = useNavigation()
   
    return (
        <DrawerContentScrollView
            contentContainerStyle={{
                // paddingBottom: 40,
                // paddingTop: 90,
                backgroundColor: "white",
                // flex: 1,
                // justifyContent: "space-between"
            }}
            {...props}
        >
            <ImageBackground

                style={{
                    padding: 20, flexDirection: "row"
                }}
            >
                {/* <Image
                     source={require(" ")}
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 40,
                        marginBottom: 10
                    }}
                /> */}
                <View
                    style={apptw` mx-5 `}
                >
                    <AppText
                        style={apptw`text-5 text-white `}
                    >
                        Welcome Dr,
                    </AppText>
                    <AppText
                        style={apptw`text-3 text-white `}
                    >
                        What do you want today?
                    </AppText>
                </View>



            </ImageBackground>

            <View
            >
                <DrawerItemList {...props} />
            </View>

            <Pressable
                onPress={()=>navigation.navigate("SignIn")}
                    style={apptw`bg-white flex-row px-5 pt-5`}
                >
                    <SimpleLineIcons name="logout" size={24} color="black" />
                    <AppText
                    style={apptw`mx-10`}
                    >
                        Logout
                    </AppText>
                </Pressable>



        </DrawerContentScrollView>
    )
}