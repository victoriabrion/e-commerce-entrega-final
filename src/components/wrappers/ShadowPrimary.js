import { StyleSheet, View } from 'react-native'

const ShadowPrimary = ({children, style}) => {
  return (
    <View style= {[styles.container, style]}>
        {children}
    </View>
  )
}

export default ShadowPrimary

const styles = StyleSheet.create({
    container: {
        elevation: 10,

    }
})