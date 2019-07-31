import React, { Component } from "react";
import welcomePage from "../../components/WelcomePage";
import loginPage from "../../components/LoginPage";
import { createStackNavigator } from "react-navigation";
import { Header, Left, Button, Icon, Body, Title, Right } from "native-base";

const AppNavigator = createStackNavigator({
  welcomePage: { screen: welcomePage },
  loginPage: {screen: loginPage}
});

export default AppNavigator;
