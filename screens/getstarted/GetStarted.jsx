import React from 'react';
import { Text, View, Image } from 'react-native';
import Button from '../../components/Button/Button';

export default function  GetStarted() {
    const shopNowHandler =()=>{
        alert('I am shop now button')
    }
    return ( 
        <View className='bg-primary flex-1 items-center justify-center'>
            <Image className='w-44 h-40 m-6' source={require('../../assets/logo.png')} />
            <Button onClick={shopNowHandler}>Shop Now</Button>
        </View>
     );
}
