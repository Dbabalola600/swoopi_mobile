import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { ScrollView, View, Pressable, Image } from "react-native";
import AppButton from "../components/Display/AppButton";
import AppText from "../components/Display/AppText";
import PressAppText from "../components/Display/PressAppText";
import AppTextField from "../components/Input/AppTextField";
import BasicBackButtonLayout from "../components/Layout/BasicBackButtonLayout";
import apptw from "../utils/lib/tailwind";
import { RootStackParamList } from "./allroutes";
import tw from "twrnc"
import { Checkbox } from "expo-checkbox";

type SignUpScreen = NativeStackScreenProps<
    RootStackParamList,
    "SignUp"
>;

const SignUp = ({ navigation }: SignUpScreen) => {
    const [isButtonLoading, setButtonLoading] = useState(false)
    // const { isError, isLoading, isSuccess, loginErrorMessage } = useSelector(authSelector);

    // const dispatch = useDispatch<AppDispatch>();

    const navigateToSignIn = () => {
        navigation.navigate("SignIn")
    }

    const [isChecked, setChecked] = useState(false);





    return (
        <BasicBackButtonLayout>
            <>

                <ScrollView
                    style={tw`px-5 `}
                    contentContainerStyle={tw.style(` justify-between`, {
                        flexGrow: 1,
                    })}
                >
                    <View>

                        <AppText
                            style={apptw`text-3xl text-center text-black`}>
                            Register Account
                        </AppText>
                        <AppText
                            style={apptw`text-lg text-center  pb-5`}>
                            Fill your details or continue with
                            social media
                        </AppText>


                        <AppTextField
                            title="Firstname"
                            validationName="userName"
                            placeholder="Firstname"
                        />

                        <AppTextField
                            title="Firstname"
                            validationName="userName"
                            placeholder="lastname"
                        />

                        <AppTextField
                            title="Email"
                            validationName="email"
                            placeholder="example@gmail.com"
                        />

                        <AppTextField
                            title="Password"
                            validationName="password"
                            placeholder="***********"
                            isPassword={true}
                        />

                        <View
                            style={apptw`flex-row`}
                        >
                            <Checkbox
                                style={apptw``}
                                value={isChecked}
                                onValueChange={setChecked}
                                color={isChecked ? '#4630EB' : undefined}
                            />
                            <AppText>

                                I accept all the Terms & Conditions
                            </AppText>
                        </View>


                    </View>





                    <View style={apptw`mb-19`}>

                        <AppButton
                            buttonStyle={apptw`  my-6`}
                            text={isButtonLoading ? "Loading..." : "Register"}
                            onPress={navigateToSignIn}
                        // text="Create Account"

                        />


                        <View
                            style={apptw`flex-row justify-between items-center mb-3`}
                        >
                            <View
                                style={{
                                    borderBlockColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 100,
                                    paddingBottom: 10
                                }}
                            />
                            <AppText style={apptw`font-bold pt-2 mx-2 mx-auto`}>

                                Or sign in with
                            </AppText>
                            <View
                                style={{
                                    borderBlockColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 100,
                                    paddingBottom: 10
                                }}
                            />
                        </View>













                        <View>
                            <Pressable>

                                <View style={apptw`rounded-lg bg-white flex-row justify-center items-center py-3`}>


                                    <Image
                                        source={require("../assets/google_logo.png")}
                                        style={apptw`mx-0 px-0`}
                                    />
                                    <AppText style={apptw`font-bold pt-0 mx-0`}>


                                        {" "} Sign Up with Google
                                    </AppText>
                                </View>


                            </Pressable>

                        </View>

                        <AppText style={apptw`self-center text-zinc-400 text-[4]`}>
                            Already have an account?{' '}


                            <PressAppText
                                onPress={navigateToSignIn}
                                style={apptw`text-primary top-[1]  `}>
                                Sign In
                            </PressAppText>



                        </AppText>


                    </View>
                </ScrollView>

            </>

        </BasicBackButtonLayout>
    )
}

export default SignUp