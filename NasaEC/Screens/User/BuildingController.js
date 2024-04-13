import React, { useState, useEffect, useRef } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Menu from '../../Components/Menu';
import { BuildingControllerStyles } from '../../Styles/User/BuildingControllerStyles';

export default function BuildingController({navigation}) {

    const fadeIn = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeIn, {
            toValue: 1,
            duration: 1500,
            easing: Easing.bounce,
            useNativeDriver: false,
            RCTAnimation: true,
        }).start();
    }, []);

    return (
        <LinearGradient
            colors = {["#00236f", "#4e1264", "#6f004f", "#820036", "#88001a"]}
            start = {{x: 0, y: 0}}
            end = {{x: 0.5, y: 0.5}}
            style = {BuildingControllerStyles.container}
        >
            <Menu navigation = {navigation} />
                <Animated.View style = {[BuildingControllerStyles.container, {opacity: fadeIn}]}>
                    <View style = {BuildingControllerStyles.container}>
                        
                    </View>
                </Animated.View>
        </LinearGradient>
    )
}