import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import InteractiveMap from "@/components/Map";

export default function IndexScreen() {
    return (
        <View className={"flex items-center justify-center h-full"}>
            <InteractiveMap />
        </View>
    );
}
