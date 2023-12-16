import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allroutes";

import AppStack from "./AppStack";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Image, Pressable, TouchableOpacity } from "react-native";
import apptw from "../utils/lib/tailwind";
import { AntDesign, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";
import StoreScreen from "../screens/Store/StoreScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import BasketScreen from "../screens/Basket/BasketScreen";
import BasketDetails from "../screens/Basket/BasketDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();



const AuthStack = () => {
    const navigation = useNavigation();



    const toggle = () => {
        navigation.dispatch(DrawerActions.toggleDrawer());
    }
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
                headerTitle: "",
                headerStyle: {
                    backgroundColor: "transparent"
                },
                headerShadowVisible: false
            }}
            initialRouteName='SignIn'

        >

            <Stack.Screen
                name="SignIn"
                component={SignIn}

                options={{
                    headerTitle: '',

                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />





            <Stack.Screen
                name="StoreScreen"
                component={StoreScreen}
                options={{
                    headerShown: false,
                }}
            />


            <Stack.Screen
                name="BasketScreen"
                component={BasketScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="BasketDetails"
                component={BasketDetails}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="DashBoardScreen"
                component={AppStack}
                options={{

                    headerShown: false
                    // headerTitle: '',
                    // headerRight: () => (
                    //     <Pressable
                    //         onPress={() => { }}
                    //     >
                    //         {/* <AntDesign
                    //             name="bells"
                    //             size={20}
                    //             style={{ marginRight: 15 }}
                    //             color="black"
                    //         /> */}

                    //         <Image
                    //         source={require("../assets/icons/lover_1.png")}
                    //         />
                    //     </Pressable>
                    // ),
                    // headerLeft: () => (
                    //     <Pressable onPress={() => toggle()} style={apptw``}>
                    //         <SimpleLineIcons
                    //             name="menu"
                    //             size={20}
                    //             style={apptw`bg-white`}
                    //             color="black"
                    //         />
                    //     </Pressable>
                    // )
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack