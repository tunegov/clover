import React                                                                     from "react";
import { AsyncStorage, Dimensions, FlatList, StatusBar, TouchableOpacity, View } from "react-native";
import Appsee                                                                    from 'react-native-appsee';
import { Navigation }                                                            from "react-native-navigation";
import QRCodeScanner                                                             from "./QRCodeScanner";
import QRCodeScreen                                                              from "./QRCodeScreen";

const { width, height } = Dimensions.get( "screen" );

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
	
	componentDidMount() {
		Appsee.startScreen( "QR code scanning" )
		// AsyncStorage.getItem("rent:hideInstructions").then(i =>
		//   this.setState({ hideInstructions: !!i, isCameraActive: !!i })
		// );
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
				name: "clover.rent.ScooterScreen",
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
	
	render() {
		const { hideInstructions, isCameraActive } = this.state;
		
		return (
			<FlatList
				data={ [ "item1", "item2" ] }
				contentContainerStyle={ { flex: 1 } }
				horizontal={ false }
				scrollEnabled={ false }
				ref={ swiper => (
					this.swiper = swiper
				) }
				renderItem={ ( { item, index } ) =>
					index === 0 && !hideInstructions ? (
						<View style={ { width, height: height - 80 } } key={ "QRCodeScreen" }>
							<QRCodeScreen next={ this._nextScreen.bind( this ) }/>
						</View>
					) : (
						<TouchableOpacity
							style={ { width, height: height - 80 } }
							key={ "QRCodeScanner" }
							onPress={ this._goToScooterPage.bind( this, {} ) }
						>
							<QRCodeScanner
								showCamera={
									(
										index === 1 && hideInstructions
									) || !hideInstructions
								}
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
