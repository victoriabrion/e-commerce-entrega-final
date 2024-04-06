import { StyleSheet, View, Pressable, Text } from 'react-native'
import colors from '../utils/globals/colors'
import { useState } from 'react'
import { useLoginMutation } from '../app/services/auth'
import { setUser } from '../features/auth/authSlice'
import { useDispatch } from 'react-redux'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { loginSchema } from '../utils/validations/authSchema'
import { deleteSession, insertSession } from '../utils/db'

const Login = ({navigation}) => {

const dispatch = useDispatch()
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [errorEmail, setErrorEmail] = useState('')
const [errorPassword, setErrorPassword] = useState('')
const [triggerLogin] = useLoginMutation()


const onSubmit = async () => {
    try {
        loginSchema.validateSync({email, password})
        const {data} = await triggerLogin({email, password})
        deleteSession()
        insertSession(data)
        dispatch(setUser({email: data.email, idToken: data.idToken, localId:data.localId}))
      } catch (error) {
          setErrorEmail('')
          setErrorPassword('')
          switch(error.path) {
          case 'email':
            setErrorEmail (error.message)
            break
          case 'password':
            setErrorPassword (error.message)
            break
          default:
            setErrorEmail ('Invalid email/pass combination')
            break
        }
      } 
}

  return (
    <View style={styles.main}>
        <View style={styles.container}>
            <InputForm label='Email' value={email} onChangeText={(t) => setEmail(t)} isSecure={false} error={errorEmail}/>
            <InputForm label='Password' value={password} onChangeText={(t) => setPassword(t)} isSecure={true} error={errorPassword}/>
            <SubmitButton onPress={onSubmit} title='Send' style={styles.button}/>
            <Text style={styles.sub}> Don't you have an account? </Text>
            <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style={styles.subLink}>Register</Text>
            </Pressable>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    main:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
      },
      container:{
        width: '90%',
        backgroundColor: colors.tertiary,
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
        fontFamily: 'Poppins',
        color: colors.primary
      },
      subLink:{
        fontSize: 14,
        fontFamily: 'Poppins',
        color: colors.quaternary
      },
      button: {
        color: colors.secondary,
        fontFamily: 'Poppins'
      }
})