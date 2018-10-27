import React                                                                     from "react";
import { AsyncStorage, FlatList, StatusBar, TouchableOpacity, View }             from "react-native";
import { Navigation }                                                            from "react-native-navigation";
import QRCodeScanner                                                             from "../QRScanner";
import QRCodeScreen                                                              from "../QRCode";
import styles																	 from "./containerStyles";
import * as ROUTES 		
														 from "../../constants";
export default class QRSwiper extends React.PureComponent {
	state = {
		index: 0,
		isCameraActive: false,
		hideInstructions: false
	};
	
	constructor( props ) {
		super( props );
		Navigation.events().bindComponent( this ); // <== Will be automatically unregistered when unmounted
	}
	
	static get options() {
		return {
			topBar: {
				title: {
					text: "QR code"
				},
				drawBehind: true,
				leftButtons: [
					{
						id: "close",
						text: "Close",
						color: "white"
					}
				]
			}
		};
	}
	
	navigationButtonPressed( { buttonId } ) {
		if ( buttonId === "close" ) {
			StatusBar.setBarStyle( "dark-content", true );
			Navigation.dismissModal( this.props.componentId );
		}
	}
	
	_nextScreen() {
		AsyncStorage.setItem( "rent:hideInstructions", "1" );
		if ( this.swiper ) {
			this.swiper.scrollToIndex( { index: 1, animated: true } );
			setTimeout( () => {
				this.setState( {
					isCameraActive: true,
					hideInstructions: true
				} );
			}, 1000 );
		}
	}
	
	_goToScooterPage( { model, uuid } ) {
		Navigation.push( this.props.componentId, {
			component: {
				name: ROUTES.SCOOTER_INFO,
				passProps: {
					model,
					uuid
				},
				options: {
					push: {
						waitForRender: true
					}
				}
			}
		} );
	}

	showCamera(index) {
		const { hideInstructions } = this.state;
		return (index === 1 && hideInstructions) || !hideInstructions
	}

	keyExtractor = (item, index) => String(index);

	
	render() {
		const { hideInstructions, isCameraActive } = this.state;
		
		return (
			<FlatList
				data={ [ "item1", "item2" ] }
				contentContainerStyle={ styles.flex1 }
				horizontal={ false }
				scrollEnabled={ false }
				keyExtractor={this.keyExtractor}
				ref={ swiper => this.swiper = swiper }
				renderItem={ ( { item, index } ) =>
					index === 0 && !hideInstructions ? (
						<View style={ styles.wrap } key={ "QRCodeScreen" }>
							<QRCodeScreen next={ this._nextScreen.bind( this ) }/>
						</View>
					) : (
						<TouchableOpacity
							style={ styles.wrap }
							key={ "QRCodeScanner" }
							onPress={ this._goToScooterPage.bind( this, {} ) }
						>
							<QRCodeScanner
								showCamera={this.showCamera(index)}
								onFindBarcode={ this._goToScooterPage.bind( this ) }
								isCameraActive={ isCameraActive && index !== 0 }
							/>
						</TouchableOpacity>
					)
				}
			/>
		);
	}
}
