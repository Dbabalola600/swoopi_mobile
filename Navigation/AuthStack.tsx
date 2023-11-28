import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../screens/allroutes";
import Welcome from "../screens/Welcome";
import AppStack from "./AppStack";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { Pressable, TouchableOpacity } from "react-native";
import apptw from "../utils/lib/tailwind";
import { AntDesign, MaterialIcons, SimpleLineIcons } from "@expo/vector-icons";

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
            initialRouteName='Welcome'

        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}

                options={{
                    headerTitle: '',
                    headerLeft: () => (
                        <Pressable onPress={() => navigation.goBack()} >
                            <MaterialIcons
                                name="keyboard-arrow-left"
                                size={40}
                                style={apptw`bg-white`}
                                color="black"
                            />
                        </Pressable>
                    )
                }}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
            />


            <Stack.Screen
                name="DashBoardScreen"
                component={AppStack}
                options={{
                    headerTitle: '',
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => { }}
                        >
                            <AntDesign
                                name="bells"
                                size={20}
                                style={{ marginRight: 15 }}
                                color="black"
                            />
                        </TouchableOpacity>
                    ),
                    headerLeft: () => (
                        <Pressable onPress={() => toggle()} style={apptw``}>
                            <SimpleLineIcons
                                name="menu"
                                size={20}
                                style={apptw`bg-white`}
                                color="black"
                            />
                        </Pressable>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

export default AuthStack