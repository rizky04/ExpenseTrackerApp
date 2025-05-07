import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors, spacingY } from '@/constants/theme'
import ScreenWrapper from '@/components/ScreenWrapper'
import BackButton from '@/components/BackButton'
import Typo from '@/components/Typo'
import { verticalScale } from '@/utils/styling'
import Input from '@/components/Input'

const login = () => {
  return (
    <ScreenWrapper>
        <View style={styles.container}>
        <BackButton />
         <View style={{ gap: 5, marginTop: spacingY._20}}>
            <Typo size={30} fontWeight={"800"}>Hey,</Typo>
            <Typo size={30} fontWeight={"800"}>Welcome Back</Typo>
         </View>

         <View style={styles.form}>
            <Typo size={16} color={colors.textLighter}>
              Login now to track all expenses
            </Typo>
            <Input
              placeholder="Email"
              containerStyle={{ marginTop: spacingY._20 }} />
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
      form: {
        gap: spacingY._20
      },
      forgotPassword: {
        textAlign: "right",
        fontWeight: "600",
        color: colors.text,
      },
      footer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
      },
      footerText: {
        textAlign: "center",
        color: colors.text,
        fontSize: verticalScale(15),
      }
})