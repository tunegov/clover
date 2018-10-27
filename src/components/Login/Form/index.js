// import React                    from 'react';
// import { View, TouchableOpacity, Text }                 from 'react-native'
// import TextInputWithIcon        from '../../../Common/components/TextInputWithIcon'
// import { reduxForm, Field } 		from 'redux-form'
// import styles                   from './styles'
// import validations              from './validations'
// import ButtonsGroup             from '../ButtonsGroup';

// const Form = (props) => (
//     <View style={ styles.form }>
// 		  <Field
// 			  icon={ 'user' }
// 			  iconColor={ '#fff' }
// 			  placeholderTextColor={ '#808e9b' }
// 			  placeholder={ 'E-mail' }
// 			  name={'user'}
// 			  component={ TextInputWithIcon }
// 			  validate={validations.email}
// 		  />

// 		  <Field
// 			  icon={ 'lock' }
// 			  iconColor={ '#fff' }
// 			  placeholderTextColor={ '#808e9b' }
// 			  placeholder={ 'Password' }
// 			  secureTextEntry
// 			  name={'password'}
// 			  component={ TextInputWithIcon }
// 			  validate={validations.password}
// 		  />
//       {/* <ButtonsGroup 
//       fromSignUp={fromSignUp} 
//       handleSubmit={onSubmit} 
//       toSignup={toSignup}
// 	/> */}	
// 		<TouchableOpacity onPress={props.handleSubmit}>
//         	<Text style={{color: 'white'}}>Submit!</Text>
//       	</TouchableOpacity>
// 	  </View>
  
// )

// export default reduxForm({
// 	form: 'login' 
// })(Form);


import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';
import TextInputWithIcon        from '../../Common/TextInputWithIcon'
import validations              from './validations'

function MyForm(props) {

  const formStates = ['asyncValidating', 'dirty', 'pristine', 'valid', 'invalid', 'submitting',
    'submitSucceeded', 'submitFailed'];

  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Field
         icon={ 'user' }
		  			  iconColor={ '#fff' }
		  			  placeholderTextColor={ '#808e9b' }
		  			  placeholder={ 'E-mail' }
		  			  name={'user'}
		  			  component={ TextInputWithIcon }
		  			  validate={validations.email}
      />
    
	 		  <Field
			  icon={ 'lock' }
			  iconColor={ '#fff' }
			  placeholderTextColor={ '#808e9b' }
			  placeholder={ 'Password' }
			  secureTextEntry
			  name={'password'}
			  component={ TextInputWithIcon }
			  validate={validations.password}
		  />
      <TouchableOpacity onPress={props.handleSubmit(v => console.log(v))}>
        <Text style={{color: 'white'}}>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);