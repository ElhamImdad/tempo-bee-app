import { View, TouchableHighlight } from 'react-native'
import React from 'react'

export default function Restaurants() {
  const restaurantsCardHandler =()=>{
    alert('I am restaurants card')
  }

  return (
    <View className="bg-white flex-1 items-center space-y-6 px-3 py-9">
      <TouchableHighlight onPress={restaurantsCardHandler}>
        <Card>
          <Image
            className="h-40 w-full"
            source={require("../../assets/restaurants.jpg")}
          />
        </Card>
        </TouchableHighlight>
    </View>
  )
}