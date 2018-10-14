import React, { PureComponent }                                       from 'react';
import { StatusBar, StyleSheet, View } from 'react-native'
import { Navigation }                                                 from "react-native-navigation";
import Slogan 														  from "./components/Slogan";
import ButtonsGroup													  from "./components/ButtonsGroup";
import Logo												  			  from "./components/Logo";
import styles 														  from './containerStyles';
export default class SigninScreen extends PureComponent {
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
				name: "clover.rent.LoginScreen",
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
				name: "clover.rent.SignupScreen",
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	render() {
		return (
			<View style={ styles.container }>
				<Logo/>
				<Slogan/>
				<ButtonsGroup logIn={this._toLogin} signUp={this._toSignup}/>
			</View>
		);
	}
}
