import React from 'react';
import {View} from 'react-native';
import InteractiveMap from "@/components/Map";

export default function IndexScreen() {
    return (
        <View className={"flex items-center justify-center h-full"}>
            <InteractiveMap />
        </View>
    );
}
