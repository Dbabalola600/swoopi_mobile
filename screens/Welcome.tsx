import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { RootStackParamList } from "./allroutes";
import React from "react";
import AppButton from "../components/Display/AppButton";
import apptw from "../utils/lib/tailwind";
import Onboarding from 'react-native-onboarding-swiper';



type WelcomeProps = NativeStackScreenProps<RootStackParamList, "Welcome">
const Welcome = ({ navigation }: WelcomeProps) => {
    const slides = [
        {
            title: 'Convenient Telehealth: Virtual Consultations and Follow-up... Anytime, Anywhere',
            subtitle: 'With Hospyta',
            backgroundColor: '#fff',
            image: ""
        },
        {
            title: 'Prescriptions Plus..... Your One-Stop Shop For Medicines, Equipment and More',
            subtitle: 'With Hospyta',
            backgroundColor: '#fff',
            image: ""
        },
        {
            title: 'Logistics ....And Well Deliver it all  Too, In Record Time',
            subtitle: 'With Hospyta',
            backgroundColor: '#fff',
            image: ""
        },
        {
            title: 'Inspire Your Medical Practice Through the Power of Collaboration and Knowledge Sharing.',
            subtitle: 'With Hospyta',
            backgroundColor: '#fff',
            image: ""

        },
    ];

    const navigatetoLogin = () => {
        navigation.navigate("SignIn")
    }

    const navigatetoSignUp = () => {
        navigation.navigate("SignUp")
    }


    return (
        <View style={styles.container}>
            <Onboarding
                pages={slides}
                onDone={navigatetoSignUp}
                onSkip={navigatetoLogin} // You can customize the behavior of the "Skip" button
                showSkip={false}
                showNext={false}

                showDone={false}

                nextLabel="Next" // Customize the "Next" button label
                bottomBarHighlight={false}
                titleStyles={styles.title} // Apply custom styles to the title
                subTitleStyles={styles.subtitle}
                skipLabel="Skip" // Customize the "Skip" button label
            />
            <View style={styles.loginSignUpButtonsContainer}>
                <AppButton
                    text="Sign In"
                    buttonStyle={apptw.style("  bg-blue-500 mb-5")}
                    onPress={navigatetoLogin}

                />

                <AppButton
                    text="Sign Up"
                    buttonStyle={apptw.style("border border-black bg-transparent")}
                    onPress={navigatetoSignUp}
                    textStyle={apptw`text-black`}
                />



            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageContainer: {
        flex: 10, // Adjust the styling for the image container as needed
        justifyContent: 'center',
        alignItems: 'center',

    },
    loginSignUpButtonsContainer: {
        position: 'absolute',
        bottom: 100, // Adjust the position as needed
        left: 0,
        right: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    loginButton: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        marginRight: 20,
    },
    signUpButton: {
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
    title: {
        fontSize: 24,
        textAlign: 'left',

    },
    subtitle: {
        fontSize: 18,
        color: 'red',
        textAlign: 'left',
    },
});

export default Welcome;