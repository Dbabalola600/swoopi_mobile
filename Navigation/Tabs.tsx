import { MaterialCommunityIcons, FontAwesome, AntDesign, MaterialIcons, Ionicons, Feather, SimpleLineIcons, Entypo } from "@expo/vector-icons";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import apptw from "../utils/lib/tailwind";
import MyTabBar from "./CustomBottomNav";
import DashBoardScreen from "../screens/DashBoard/DashBoardScreen";
import AccountScreen from "../screens/Account/AccountScreen";
import OrdersScreen from "../screens/Orders/OrdersScreen";
import SearchScreen from "../screens/Search/SearchScreen";
import { Pressable, Image } from "react-native";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import AppText from "../components/Display/AppText";
import { useState } from "react";
import LocationDrawer from "../screens/DashBoard/Components/BottomDrawers/LocationDrawer";




const Tab = createBottomTabNavigator();

const Tabs = () => {
    const navigation = useNavigation();


    const [isDrawerVisible, setDrawerVisible] = useState(false);

    const openDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);
    return (
        <Tab.Navigator

            screenOptions={{
                tabBarStyle: { backgroundColor: "white" },
                tabBarInactiveTintColor: "#667085",
                // tabBarShowLabel: false,
                headerShown: true,
                headerShadowVisible: false,
                headerTitle: "",
                tabBarActiveTintColor: "#6741FF"
            }}
        // tabBar={props => <MyTabBar {...props} />}
        >

            <Tab.Screen
                name='Home'
                component={DashBoardScreen}
                options={{
                    headerShown: false,
                    headerTitle: '',
                    headerRight: () => (
                        <Pressable
                            onPress={() => { }}
                        >
                            {/* <AntDesign
                                name="bells"
                                size={20}
                                style={{ marginRight: 15 }}
                                color="black"
                            /> */}

                            <Image
                                source={require("../assets/icons/lover_1.png")}
                                style={apptw`mx-2`}
                            />
                        </Pressable>
                    ),
                    headerLeft: () => (
                        <Pressable onPress={
                            // () => openDrawer()
                         ()=>   console.log("addy")
                        }
                            style={apptw` flex flex-row`}>
                            <Ionicons
                                name="location-outline"
                                size={30}
                                style={apptw`bg-white ml-2 text-primary font-bold`}
                            // color="black"
                            />
                            <AppText style={apptw`my-auto`}>
                                23, Kudirat Abiola...
                            </AppText>
                            <Entypo
                                name="chevron-down"
                                style={apptw`my-auto`}
                                size={22}
                                color="black" />

                        </Pressable>
                    ),
                    tabBarIcon: ({ color, size }) => (
                        <Feather
                            name="home"
                            color={color}
                            size={26} />
                    ),
                }}
            />



            <Tab.Screen
                name='Orders'
                component={OrdersScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons
                            name="dashboard"
                            color={color}
                            size={26} />
                    ),
                }}
            />

            <Tab.Screen
                name='Search'
                component={SearchScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome
                            name="search"
                            color={color}
                            size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name='Account'
                component={AccountScreen}
                options={{

                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="person-circle-outline"
                            color={color}
                            size={26} />
                    ),
                }}
            />


            {/* <LocationDrawer isVisible={isDrawerVisible} onClose={closeDrawer}>



            </LocationDrawer> */}





        </Tab.Navigator>
    )


}


export default Tabs