import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useAuth } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { RootStackParamList } from "./RootStackParams";
import { RegisterScreen } from "../screens/RegisterScreen/RegisterScreen";
import { ForgotPasswordScreen } from "../screens/ForgotPasswordScreen/forgotPassScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  const { isAuthenticated } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Siempre agregamos ambas pantallas */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="forgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
