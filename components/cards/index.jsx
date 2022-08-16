import { View, Text } from 'react-native'
import React from 'react'
import cn from 'classnames'

const Card = ({children})=> {
  return (
    <View className={cn("block p-6 rounded-lg shadow-lg bg-white")}>
      <Text>{children}</Text>
    </View>
  )
}
export default Card;