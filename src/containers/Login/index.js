import React, { Component }                                    from 'react';
import { StatusBar } from 'react-native'
import { Navigation }                                          from "react-native-navigation";
import DismissKeyboardView                                     from '../../components/Common/DismissKeyboardView'
import Form 												   from '../../components/Login/Form'
import BackButton											   from '../../components/Login/BackButoon'
import Title											   	   from '../../components/Login/Title'
import { submit } from 'redux-form'
import { connect } from 'react-redux'
import styles from './containerStyles'

class LoginScreen extends Component {
	static get options() {
		return {
			statusBar: {
				backgroundColor: "transparent",
				style: "dark",
				drawBehind: true
			},
			layout: {
				backgroundColor: "#1e2527"
			},
			topBar: {
				title: {
					text: "LoginScreen"
				},
				drawBehind: true,
				visible: false,
				animate: false
			}
		};
	}
	
	componentDidMount() {
		StatusBar.setBarStyle( 'light-content', true )
	}
	
	_back() {
		if ( this.props.fromSignUp ) {
			Navigation.popToRoot( this.props.componentId );
		} else {
			Navigation.pop( this.props.componentId );
		}
	}
	
	_toSignup() {
		Navigation.push( this.props.componentId, {
			component: {
				name: "clover.rent.SignupScreen",
				passProps: {
					fromLogIn: true
				},
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}
	
	goToMainApp() {
		Navigation.showOverlay( {
			component: {
				name: "clover.rent.Loader",
				options: {
					overlay: {
						interceptTouchOutside: true
					},
					modalPresentationStyle: "overCurrentContext"
				}
			}
		} );
		Navigation.setRoot( {
			root: {
				sideMenu: {
					left: {
						width: 250,
						shouldStretchDrawer: false,
						component: {
							id: "DrawerLeft",
							name: "clover.rent.DrawerLeft"
						}
					},
					center: {
						stack: {
							id: "MapViewPage",
							children: [
								{
									component: {
										name: "clover.rent.MapViewPage",
										options: {
											topBar: {
												visible: false
											}
										}
									}
								}
							]
						}
					}
				}
			}
		} );
	}

	handleSubmit = values => {
		alert(JSON.stringify(values));
	}

	
	render() {
		return (
			<DismissKeyboardView style={ styles.fullScreen }>
				<BackButton onPress={this._back.bind(this)}/>
				<Title/>
				<Form 
					onSubmit={this.handleSubmit} 
					fromSignUpthis={this.props.fromSignUp} 
					toSignup={this._toSignup.bind( this )} 
				/>
			</DismissKeyboardView>
		);
	}
}

export default connect( null, { submit })(LoginScreen);

