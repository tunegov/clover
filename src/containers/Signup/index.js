import React, { Component }                                                          from 'react';
import { Dimensions, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Navigation }                                                                from "react-native-navigation";
import Icon
                                                                                     from "react-native-vector-icons/FontAwesome5";
import DismissKeyboardView
                                                                                     from '../../components/Common/DismissKeyboardView'
import RoundedButton                                                                 from '../../components/Common/RoundedButton'
import TextInputWithText
                                                                                     from '../../components/Common/TextInputWithText'


import I18n from 'react-native-i18n'
export default class SignupScreen extends Component {
	state = {
		index: 0
	}
	
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
					text: "SignupScreen"
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
		if ( this.state.index ) {
			this.swiper.scrollToIndex( { index: 0, animated: true } );
			this.setState( {
				index: 0
			} )
			return
		}
		if ( this.props.fromLogIn ) {
			Navigation.popToRoot( this.props.componentId );
		} else {
			Navigation.pop( this.props.componentId );
		}
	}
	
	_toLogin() {
		Navigation.push( this.props.componentId, {
			component: {
				name: "clover.rent.LoginScreen",
				passProps: {
					fromSignUp: true
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
	
	_nextScreen() {
		if ( this.swiper ) {
			this.swiper.scrollToIndex( { index: 1, animated: true } );
			this.setState( {
				index: 1
			} )
		}
	}
	
	render() {
		return (
			<DismissKeyboardView style={ styles.fullScreen }>
				<View style={ styles.backButton }>
					<TouchableOpacity activeOpacity={ 0.7 } onPress={ this._back.bind( this ) }>
						<Icon name="arrow-left" size={ 20 } color="white"/>
					</TouchableOpacity>
				</View>
				<View style={ styles.topBar }>
					<View style={ styles.title }>
						<Text style={ styles.titleText }>
							{I18n.t('auth.new')}
						</Text>
						<Text style={ styles.titleText }>
							{I18n.t('auth.account')}
						</Text>
					</View>
					<View style={ styles.progress }>
						<Text style={ styles.progressText }>
							<Text style={ styles.progressCurrent }>{ this.state.index + 1 }</Text>
							{ ' ' }/ 2
						</Text>
						
						<Text style={ styles.progressSteps }>{I18n.t('auth.steps')}</Text>
					</View>
				</View>
				<FlatList
					data={ [ "step1", "step2" ] }
					horizontal={ true }
					scrollEnabled={ false }
					ref={ swiper => (
						this.swiper = swiper
					) }
					contentContainerStyle={ styles.form }
					renderItem={ ( { item, index } ) =>
						index === 0 ? (
							<View style={ styles.step }>
								<View style={ styles.imageUploader }>
									<View style={ styles.imageIcon }>
										<Icon name="link" size={ 25 } color="#808e9b"/>
									</View>
									<View style={ styles.imageTexts }>
										<Text style={ styles.imageText }>{I18n.t('auth.photoUpload')}</Text>
										<Text style={ styles.imageText }>({I18n.t('auth.optional')})</Text>
									</View>
								
								</View>
								<View style={ { flex: 1 } }>
									<TextInputWithText
										text={ I18n.t('auth.name') }
										placeholderTextColor={ '#808e9b' }
									/>
									<TextInputWithText
										text={ I18n.t('auth.username') }
										placeholderTextColor={ '#808e9b' }
										secureTextEntry
									/>
								</View>
							
							</View>
						) : (
							<View style={ styles.step }>
								<TextInputWithText
									text={ I18n.t('auth.e-mail') }
									placeholderTextColor={ '#808e9b' }
								/>
								<TextInputWithText
									text={ I18n.t('auth.password') }
									placeholderTextColor={ '#808e9b' }
									secureTextEntry
								/>
								<TextInputWithText
									text={ I18n.t('auth.confirmPassword') }
									placeholderTextColor={ '#808e9b' }
									secureTextEntry
								/>
							</View>
						)
					}
				/>
				
				<View style={ styles.bottom }>
					<RoundedButton text={ this.state.index === 0 ? I18n.t('auth.next') :   I18n.t('auth.signup')}
					               color={ '#000' }
					               onPress={ this.state.index === 0 ? this._nextScreen.bind( this ) : this.goToMainApp.bind( this ) }/>
					{ !this.props.fromLogIn && (
						<View style={ styles.signUpGroup }>
							<Text style={ styles.signUpAsk }>
								{I18n.t('auth.haveAccount')}
							</Text>
							<TouchableOpacity activeOpacity={ 0.7 } onPress={ this._toLogin.bind( this ) }>
								<Text style={ styles.signUpButton }>
								{I18n.t('auth.login')}.
								</Text>
							</TouchableOpacity>
						</View>
					) }
				</View>
			</DismissKeyboardView>
		);
	}
}


const styles = StyleSheet.create( {
	fullScreen: {
		flex: 1,
		marginHorizontal: 40,
		paddingTop: 60
	},
	backButton: {
		flex: 1,
		maxHeight: 80
	},
	topBar: {
		flex: 1,
		maxHeight: 100,
		marginBottom: 40,
		flexDirection: 'row',
		alignItems: 'flex-end',
		justifyContent: 'space-between'
	},
	progressText: {
		color: 'white',
		marginBottom: 10
	},
	progressCurrent: {
		fontSize: 20,
		fontWeight: '800'
	},
	step: {
		flex: 1,
		width: Dimensions.get( 'window' ).width
	},
	progressSteps: {
		color: 'white',
		fontSize: 13,
		fontWeight: '600'
	},
	titleText: {
		fontSize: 40,
		fontWeight: '800',
		color: 'white'
	},
	imageUploader: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'baseline'
	},
	imageIcon: {
		width: 80,
		height: 80,
		borderRadius: 40,
		borderWidth: 3,
		borderColor: '#d2dae2',
		justifyContent: 'center',
		alignItems: 'center'
	},
	imageTexts: {
		marginLeft: 20
	},
	imageText: {
		color: '#808e9b'
	},
	form: {
		height: 200
	},
	bottom: {
		flex: 1
	},
	signUpGroup: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'baseline',
		marginTop: 25
	},
	signUpAsk: {
		color: 'white'
	},
	signUpButton: {
		color: '#ee5253',
		paddingLeft: 5,
		fontSize: 15,
		fontWeight: '600'
	}
} )
