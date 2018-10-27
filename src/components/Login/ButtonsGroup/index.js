import React                    from 'react';
import { View, Text, TouchableOpacity }                 from 'react-native'
import RoundedButton            from '../../../Common/components/RoundedButton'
import styles                   from './styles'
import I18n                     from 'react-native-i18n'

const ButtonsGroup = ({ handleSubmit, fromSignUp, toSignup}) => (
    <View style={ styles.bottom }>
        <RoundedButton text={ 'Log in' } color={ '#000' } onPress={ handleSubmit }/>
        { !fromSignUp && (
            <View style={ styles.signUpGroup }>
                <Text style={ styles.signUpAsk }>
                    {I18n.t("auth.firstTime")}
                </Text>
                <TouchableOpacity activeOpacity={ 0.7 } onPress={ toSignup }>
                    <Text style={ styles.signUpButton }>
                        {I18n.t("auth.signup")}
                    </Text>
                </TouchableOpacity>
            </View>
        ) }
    </View>
)

export default ButtonsGroup;