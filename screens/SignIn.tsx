import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { RootStackParamList } from "./allroutes";
import PressAppText from "../components/Display/PressAppText";




type SignInScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignIn"
>;

const SignIn = ({ navigation }: SignInScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)

    const navigatetoDashBoard = () => {
        navigation.navigate("DashBoardScreen")
    }


    const navigateToSignUp = () => {
        navigation.navigate("SignUp")
    }

    return (
        <BasicBackButtonLayout>
            <>
                <View>

                </View>
                <ScrollView
                    style={apptw`px-5 mt-5`}
                    contentContainerStyle={apptw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-black`}>
                            Hello Dr!
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center `}>
                            Fill your details or continue with
                            social media
                        </AppText>


                        <AppTextField
                            title="Username/Email"

                            validationName="userName"
                            placeholder="username/email"
                        />

                        <AppTextField
                            title="Password"

                            validationName="password"

                            placeholder="***********"
                            isPassword={true}
                        />

                        <View>
                            <PressAppText
                                // onPress={navigatetoForgotPassword}
                                style={apptw`text-black `}
                            >
                                Forgot Password?
                            </PressAppText>
                        </View>

                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            // text={isButtonLoading ? "Loading..." : "Sign In"}
                            onPress={navigatetoDashBoard}
                            text="Sign In"

                        />


                    </View>
                    <View style={apptw`mb-19`}>




                        <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                            Don't have an account?{' '}


                            <PressAppText
                                onPress={navigateToSignUp}
                                style={apptw`text-primary top-[1]  `}>
                                Register
                            </PressAppText>



                        </AppText>


                    </View>
                </ScrollView>
            </>
        </BasicBackButtonLayout>
    )
}


export default SignIn;