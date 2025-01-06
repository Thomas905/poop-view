import React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {PlusCircleIcon} from "react-native-heroicons/solid";

const Button = (props: any) => {
    return (
        <>
            <TouchableOpacity
                onPress={() => props.action()}
                className="bg-orange-400 flex flex-row rounded-3xl items-center justify-center p-2 mb-3 shadow-lg "
            >
                <Text className="text-white font-bold me-5 p-3">DROP THE POOP</Text>
                <PlusCircleIcon className="-mr-0.5 size-5" color={"#FFFF"} size={"40"} />
            </TouchableOpacity>
        </>
    );
};

export default Button;