import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Image,
} from "react-native";
import AppButtons from "../components/AppButtons";
import AuthenticationFormContainer from "../components/AuthenticationFormContainer";
import SharedStyles from "../Styles/SharedStyles";

const LoginPassword = () => {
  return (
    <View style={styles.loginEmailContainer}>
      <AuthenticationFormContainer>
        <Text style={styles.title}>enter your password</Text>
        <TextInput
          placeholderTextColor="rgba(255, 255, 255, 0.7)"
          placeholder="password"
          textContentType="password"
          style={SharedStyles.AppInput}
        />
        <View style={styles.ButtonsContainer}>
          <AppButtons
            ViewStyle={{
              ...styles.ButtonTextContainer,
              backgroundColor: "#000",
            }}
            TextStyle={styles.ButtonContinue}
            PressableStyle={styles.Buttons}
            onPress={() => {
              console.log("pressed");
            }}
            buttonText="Continue"
          />
        </View>
        <Image
          style={styles.logoStyle}
          source={require("../assets/images/167-1673721_controlled-drugs-cabinets-hdl-icon-logo-pharmacy-logo-1.png")}
        />
      </AuthenticationFormContainer>
    </View>
  );
};

export default LoginPassword;

const styles = StyleSheet.create({
  loginEmailContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 21,
    textTransform: "uppercase",
    marginBottom: 20,
    width: "100%",
  },
  emailInput: {
    backgroundColor: "#6FB98F",
    height: 46,
    width: "100%",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  ButtonsContainer: {
    width: "100%",
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  Buttons: {
    width: "100%",
  },
  ButtonTextContainer: {
    borderRadius: 5,
    height: 46,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  ButtonContinue: {
    color: "#fff",
    textTransform: "uppercase",
    fontSize: 21,
    fontWeight: "500",
  },
  logoStyle: {
    width: "44%",
    // height: 100,
    marginVertical: 30,
    resizeMode: "contain",
  },
});