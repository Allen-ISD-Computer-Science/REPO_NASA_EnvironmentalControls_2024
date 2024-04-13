import React, { Component , useRef} from 'react';
import { Animated, Text, View, Pressable, Image } from 'react-native';
import { UserMenuStyles } from '../Styles/User/UserMenuStyles';
import NasaImageLogo from '../assets/Logos/NasaImageLogo.png';
import NasaTextLogo from '../assets/Logos/NasaTextLogo.png';
import { DeveloperMenuStyles } from '../Styles/Developer/DeveloperMenuStyles';

export default class Menu extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return(
            // Styling for the USER Menu
            <View style = {UserMenuStyles.sideMenu}>
                <Image source = {NasaImageLogo} style = {UserMenuStyles.logoStyle} />

                <Text style = {UserMenuStyles.userText}> User </Text>

                <Pressable
                    onPress = {() => this.props.navigation.navigate("Main")}
                >
                    <Text style = {UserMenuStyles.menuText}> Main Page </Text>
                </Pressable>

                {/* <Pressable
                    onPress = {() => this.props.navigation.navigate("Alarm")}
                >
                    <Text style = {UserMenuStyles.menuText}> Alarm Page </Text>
                </Pressable> */}

                <Pressable
                    onPress = {() => this.props.navigation.navigate("BuildingController")}
                >
                    <Text style = {UserMenuStyles.menuText}> Building Controller </Text>
                </Pressable>

                
                {/* Styling for the DEVELOPER Menu */}
                <View style = {DeveloperMenuStyles.sideMenu}>
                    <Image source = {NasaTextLogo} style = {DeveloperMenuStyles.logoStyle} />

                    <Text style = {DeveloperMenuStyles.developerText}> Developer </Text>

                    <Pressable
                        onPress = {() => this.props.navigation.navigate("DeveloperMain")}
                    >
                        <Text style = {DeveloperMenuStyles.menuText}> Main Page </Text>
                    </Pressable>

                    {/* <Pressable
                        onPress = {() => this.props.navigation.navigate("DeveloperAlarm")}
                    >
                        <Text style = {DeveloperMenuStyles.menuText}> Alarm Page </Text>
                    </Pressable> */}

                    <Pressable
                        onPress = {() => this.props.navigation.navigate("DeveloperBC")}
                    >
                        <Text style = {DeveloperMenuStyles.menuText}> Building Controller </Text>
                    </Pressable>
                </View>
            </View>
        );
    };
};