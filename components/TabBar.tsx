import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useRouter} from 'expo-router';
import {FontAwesome} from "@expo/vector-icons";


const TabBar = ({ state, descriptors} :any) => {
    const router = useRouter();
    const icons: any = {
        index: 'map-o',
        profile: 'user-o',
        settings: 'gear',
    };

    return (
        <View className="flex-row bg-white border-t border-gray-200 py-2">
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const iconName = icons[route.name] || 'question';

                return (
                    <TouchableOpacity
                        key={route.name}
                        onPress={() => router.push(route.name)}
                        className={`flex-1 items-center justify-center ${
                            isFocused ? 'border-b-2 border-blue-500' : ''
                        }`}
                    >
                        <FontAwesome
                            name={iconName}
                            size={24}
                            color={isFocused ? '#007bff' : '#6b7280'} // Couleurs : bleu actif, gris inactif
                        />
                        <Text className={`text-sm mt-2 ${isFocused ? 'text-blue-500' : 'text-gray-600'}`}>
                            {options.title || route.name.toUpperCase()}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};


export default TabBar;
