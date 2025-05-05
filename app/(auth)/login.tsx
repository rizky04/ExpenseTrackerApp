import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { spacingY } from '@/constants/theme'
import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'

const login = () => {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
        <BackButton />
         <View style={{ gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>Hey,</Typo>
            <Typo size={30} fontWeight={"800"}>Welcome Back</Typo>
         </View>
        </View>
    </ScreenWrapper>
  )
}

export default login

const styles = StyleSheet.create({
     container: {
        flex: 1,
        gap: spacingY._30,
        paddingHorizontal: spacingY._20,
      },
})