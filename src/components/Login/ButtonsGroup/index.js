import React                    from 'react';
import { View, Text, TouchableOpacity }                 from 'react-native'
import RoundedButton            from '../../../Common/components/RoundedButton'
import styles                   from './styles'


const ButtonsGroup = ({ handleSubmit, fromSignUp, toSignup}) => (
    <View style={ styles.bottom }>
        <RoundedButton text={ 'Log in' } color={ '#000' } onPress={ handleSubmit }/>
        { !fromSignUp && (
            <View style={ styles.signUpGroup }>
                <Text style={ styles.signUpAsk }>
                    First time here?
                </Text>
                <TouchableOpacity activeOpacity={ 0.7 } onPress={ toSignup }>
                    <Text style={ styles.signUpButton }>
                        Sign up.
                    </Text>
                </TouchableOpacity>
            </View>
        ) }
    </View>
)

export default ButtonsGroup;