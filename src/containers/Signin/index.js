import React, { PureComponent }                                       from 'react';
import { StatusBar, View } 											  from 'react-native'
import { Navigation }                                                 from "react-native-navigation";
import Slogan 														  from "../../components/Signin/Slogan";
import ButtonsGroup													  from "../../components/Signin/ButtonsGroup";
import Logo												  			  from "../../components/Signin/Logo";
import styles 														  from './containerStyles';
import * as ROUTES													  from '../../constants';
import { connect }                     								  from 'react-redux';
import { signInAction }												  from '../../ducks/auth';

class SigninScreen extends PureComponent {
	constructor( props ) {
		super( props );
		Navigation.events().bindComponent( this );
		this._toLogin = this._toLogin.bind(this);
		this._toSignup = this._toSignup.bind(this);
	}
	
	static get options() {
		return {
			statusBar: {
				backgroundColor: "transparent",
				style: "dark",
				drawBehind: true
			},
			layout: {
				backgroundColor: "white"
			},
			topBar: {
				drawBehind: true,
				visible: false,
				animate: false
			}
		};
	}
	
	
	componentDidMount() {
		StatusBar.setBarStyle( 'dark-content' )
	}
	
	componentDidAppear() {
		StatusBar.setBarStyle( "dark-content", true );
	}
	
	_toLogin() {
		Navigation.push( this.props.componentId, {
			component: {
				name: ROUTES.LOG_IN,
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	_toSignup() {
		Navigation.push( this.props.componentId, {
			component: {
				name: ROUTES.SIGN_UP,
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	render() {
		alert(this.props.user)
		return (
			<View style={ styles.container }>
				<Logo/>
				<Slogan/>
				<ButtonsGroup logIn={this._toLogin} signUp={this._toSignup}/>
			</View>
		);
	}
}

const mapStateToProps = state => ({
    user: state.auth.user
});

const mapDispatchToProps = ({
    signInAction
});

export default connect(mapStateToProps, mapDispatchToProps)(SigninScreen)
