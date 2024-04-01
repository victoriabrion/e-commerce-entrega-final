import { StyleSheet, View, Pressable, Text } from 'react-native'
import colors from '../utils/globals/colors'
import { useState } from 'react'
import { useRegisterMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { registerSchema } from '../utils/validations/authSchema'

const Register = ({navigation}) => {

    const dispatch = useDispatch
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [triggerRegister] = useRegisterMutation()

    const onSubmit = async () => {
      try {
        registerSchema.validateSync({email, password, confirmPassword})
        const {data} = await triggerRegister({email, password})
        dispatch(setUser({email: data.email, idToken: data.idToken, localId: data.localId}))
      } catch (error) {
          setErrorEmail('')
          setErrorPassword('')
          setErrorConfirmPassword('')
          switch(error.path) {
          case 'email':
            setErrorEmail (error.message)
            break
          case 'password':
            setErrorPassword (error.message)
            break
          case 'confirmPassword':
            setErrorConfirmPassword (error.message)
            break
          default:
            break
        }
      } 
       
    }
    
  return (
    <View style={styles.main}>
    <View style={styles.container}>
        <InputForm label='Email' value={email} onChangeText={(t) => setEmail(t)} isSecure={false} error={errorEmail}/>
        <InputForm label='Password' value={password} onChangeText={(t) => setPassword(t)} isSecure={true} error={errorPassword}/>
        <InputForm label='Confirm Password' value={confirmPassword} onChangeText={(t) => setConfirmPassword(t)} isSecure={true} error={errorConfirmPassword}/>
        <SubmitButton onPress={onSubmit} title='Register'/>
        <Text style={styles.sub}> Do you already have an account? </Text>
        <Pressable onPress={() => navigation.navigate('Login')}>
            <Text style={styles.subLink}>Login</Text>
        </Pressable>
    </View>
</View>
)
}

export default Register

const styles = StyleSheet.create({
main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  container:{
    width: '90%',
    backgroundColor: colors.secondary,
    gap: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  title:{
    fontSize: 22,
    fontFamily: 'Poppins'
  },
  sub:{
    fontSize: 14,
    fontFamily: 'Poppins'
  },
  subLink:{
    fontSize: 14,
    fontFamily: 'Poppins',
    color: colors.tertiary
  }
})