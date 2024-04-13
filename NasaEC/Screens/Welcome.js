import React from 'react';
import { Text, View, Pressable, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { WelcomeStyles } from '../Styles/WelcomeStyles';
import NasaImageLogo from '../assets/Logos/NasaImageLogo.png';

export default function Welcome({navigation}) {
    return (
        // Linear Gradient for the background
        <LinearGradient
            colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
            start = {{x: 0, y: 0}}
            end = {{x: 0.5, y: 0.5}}
            style = {WelcomeStyles.container}
        >
            {/* Container that holds and renders the 2nd layer background */}
            <View style = {WelcomeStyles.mainTextContainer}>

                {/* Renders the image and all of the text*/}
                <Image source = {NasaImageLogo} style = {WelcomeStyles.image} />
                <Text style = {WelcomeStyles.mainText}> NASA Hunch </Text>
                <Text style = {WelcomeStyles.subText}> Environmental Controls </Text>

                {/* Navigates to the USER Main page*/}
                <View style = {WelcomeStyles.buttonContainer}>
                    <Pressable
                        onPress = {() => navigation.navigate('Main')}
                    >
                    <Text style = {WelcomeStyles.buttonText}> Welcome </Text>
                    </Pressable>
                </View>

            </View>
        </LinearGradient>
    );
};