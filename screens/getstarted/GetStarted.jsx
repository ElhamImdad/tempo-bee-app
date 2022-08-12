import React from 'react';
import { View, Image } from 'react-native';
import Button from '../../components/Button/Button';
// import { Actions } from 'react-native-router-flux';

export default function  GetStarted({history}) {
    const shopNowHandler =()=>{
        alert('I am shop now button')
    }
    const joinUsHandler =()=>{
        history.push("/joinUs")
    }
    return ( 
        <View className='flex-1 items-center justify-center space-y-6'>
            <View><Image className='w-44 h-40' source={require('../../assets/logo.png')} /></View>
            <View><Button onClick={shopNowHandler}>تسوق الان</Button></View>
            <View><Button onClick={joinUsHandler}>انضم إلينا</Button></View>
        </View>
     );
}
