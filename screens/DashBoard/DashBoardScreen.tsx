import { Image, Pressable, ScrollView, View, Text, ImageBackground } from "react-native"
import LoggedInLayout from "../../components/Layout/LoggedLayout"
import SearchBar from "../../components/Input/SearchBar"
import apptw from "../../utils/lib/tailwind"
import AppText from "../../components/Display/AppText"
// import { dashItems } from "../../utils/data/mockData"
import { AntDesign, Entypo, Ionicons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { useState } from "react"
import BottomDrawer from "./Components/BottomDrawers/BottomDrawer"
import LocationDrawer from "./Components/BottomDrawers/LocationDrawer"
import TopDeals from "./Components/TopDeals"
import Favourites from "./Components/Favourites"
import Restaurants from "./Components/Restaurants"
import Supermarket from "./Components/SuperMarket"
import Pharmacy from "./Components/Pharmacy"
import Drinks from "./Components/Drinks"
import Flower from "./Components/Flower"
import FlashDrawer from "./Components/BottomDrawers/FlashDrawer"
import PressAppText from "../../components/Display/PressAppText"
import { RestaurantsArray } from "../../utils/data/mockData"



function DashBoardScreen() {

    const [isSelected, SetSelected] = useState(false)

    const [isDrawerVisible, setDrawerVisible] = useState(false);
    const [isLocationVisible, setLocationVisible] = useState(false);
    // filter
    const [isFlashVisible, setFlashVisible] = useState(false);
    const [isPickUpVisible, setPickupVisible] = useState(false);
    const [isOffersVisible, setOffersVisible] = useState(false);
    const [isPriceVisible, setPriceVisible] = useState(false);
    const [isDeliveryVisible, setDeliveryVisible] = useState(false);
    const [isDistanceVisible, setDistanceVisible] = useState(false);

    const openDrawer = () => setDrawerVisible(true);
    const closeDrawer = () => setDrawerVisible(false);
    const openLocation = () => setLocationVisible(true);
    const closeLocation = () => setLocationVisible(false);

    // filters
    const openFlash = () => setFlashVisible(true);
    const closeFlash = () => setFlashVisible(false);

    const openPickUp = () => setPickupVisible(true);
    const closePickup = () => setPickupVisible(false);

    const openOffers = () => setOffersVisible(true);
    const closeOffers = () => setOffersVisible(false);

    const openPrice = () => setPriceVisible(true);
    const closePrice = () => setPriceVisible(false);

    const openDelivery = () => setDeliveryVisible(true);
    const closeDelivery = () => setDeliveryVisible(false);

    const openDistance = () => setDistanceVisible(true);
    const closeDistance = () => setDistanceVisible(false);


    const dashItems = [
        { name: "Restaurant", image: require("../../assets/icons/restaurant_image.png"), click: () => { } },
        { name: "Supermarket", image: require("../../assets/icons/supermarket_image.png"), click: () => { } },
        { name: "Pharmacy", image: require("../../assets/icons/pharmacy_image.png"), click: () => { } },
        { name: "See all", image: require("../../assets/icons/see_all_image.png"), click: () => openDrawer() },
    ]


    // const filterItems = [
    //     { name: "Flash:20 mins", onclick: () => openFlash() },
    //     { name: "Pickup", onclick: () => selectFilter() },
    //     { name: "Offers", onclick: () => selectFilter() },
    //     { name: "Rating", onclick: () => selectFilter() },
    //     { name: "Price", onclick: () => selectFilter() },
    //     { name: "Delivery Fee", onclick: () => selectFilter() },
    //     { name: "Distance", onclick: () => selectFilter() },
    // ]


    const [filterItems, setFilterItems] = useState([
        { name: "Flash:20 mins", isSelected: false, icon: require("../../assets/icons/rocket.png") },
        { name: "Pickup", isSelected: false, icon: require("../../assets/icons/walkman.png") },
        { name: "Offers", isSelected: false, icon: require("../../assets/icons/ticket.png") },
        { name: "Rating", isSelected: false },
        { name: "Price", isSelected: false },
        { name: "Delivery Fee", isSelected: false },
        { name: "Distance", isSelected: false },
    ]);





    const selectFilter = (index: any) => {


        const updatedFilterItems = [...filterItems];
        updatedFilterItems[index].isSelected = !updatedFilterItems[index].isSelected;
        setFilterItems(updatedFilterItems);


    };


    const clearFilters = () => {
        const clearedFilterItems = filterItems.map(item => ({ ...item, isSelected: false }));
        setFilterItems(clearedFilterItems);
    };





    return (
        <LoggedInLayout>
            <View style={apptw` pt-10 `}>


            </View>

            <View style={apptw`flex flex-row justify-between py-5  top-0  w-full`}>
                <Pressable onPress={
                    () => openLocation()
                    // () => console.log("addy")
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
                        source={require("../../assets/icons/lover_1.png")}
                        style={apptw`mx-2`}
                    />
                </Pressable>



            </View>

            <View>



            </View>

            <View style={apptw`flex flex-row gap-x-5 mx-auto`}>



                {dashItems.map((item, index) => (
                    <View
                        key={index}
                    >
                        <Pressable
                            onPress={item.click}
                            style={apptw`w-20 `}
                        >
                            <View
                                style={apptw`
                                bg-[#F0F1F3] w-20 h-20 rounded-lg`}
                            >
                                <Image
                                    source={`${item.image}`}
                                    style={apptw`mx-auto my-auto w-10 h-11`}
                                />
                            </View>

                            <AppText style={apptw`text-xs text-center`}>
                                {item.name}
                            </AppText>

                        </Pressable>
                    </View>
                ))}


            </View>

            <View style={apptw`mx-2 mt-5`}>
                <SearchBar />
            </View>


            {/* filter */}
            <View style={apptw`pb-5`}>
                <ScrollView
                    horizontal
                >

                    {/* {filterItems.map((items, index) => (
                        <View
                            key={index}
                        >

                            <Pressable
                                onPress={items.onclick}
                                style={apptw`
                                ${isSelected ? "bg-primary" : " bg-[#F0F1F3]"}
                                px-5 flex flex-row py-1 rounded-full mx-4 `}
                            >
                                <Image
                                    source={require("../../assets/icons/rocket.png")}
                                    style={apptw`my-auto mr-5`}
                                />

                                <AppText style={apptw`text-md  my-auto`}>
                                    {items.name}
                                </AppText>

                            </Pressable>

                        </View>
                    ))} */}

                    {filterItems.map((item, index) => (
                        <View key={index}>
                            <Pressable
                                onPress={() => selectFilter(index)}
                                style={apptw`
              ${item.isSelected ? "bg-primary" : " bg-[#F0F1F3]"}
              px-5 flex flex-row py-1 rounded-full mx-4
            `}
                            >
                                <Image
                                    source={item.icon}
                                    style={apptw`my-auto mr-5`}
                                />
                                <AppText style={apptw`text-md  my-auto`}>
                                    {item.name}
                                </AppText>
                            </Pressable>
                        </View>
                    ))}



                </ScrollView>

                {filterItems.some((item) => item.isSelected) && (
                    <PressAppText
                        onPress={() => clearFilters()}
                        style={apptw`text-right mx-2 text-sm pt-2 text-red-500`}
                    >
                        Clear filter
                    </PressAppText>
                )}


            </View>


            <ScrollView
                nestedScrollEnabled
                style={apptw`h-10 `}>




                <TopDeals />

                <View>
                    <Image
                        source={require("../../assets/icons/Advert.png")}
                        style={apptw`mx-auto my-10`}
                    />
                </View>

                <Favourites />

                <Restaurants />

                <Supermarket />
                <Pharmacy />
                <Drinks />

                <Flower />



            </ScrollView>


            <BottomDrawer isVisible={isDrawerVisible} onClose={closeDrawer}>
            </BottomDrawer>

            <LocationDrawer isVisible={isLocationVisible} onClose={closeLocation}>
            </LocationDrawer>


            {/* filters */}
            <FlashDrawer isVisible={isFlashVisible} onClose={closeFlash}>

            </FlashDrawer>
        </LoggedInLayout>
    )
}



export default DashBoardScreen