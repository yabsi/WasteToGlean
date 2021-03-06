import React from 'react';
import { View, Button, Linking } from 'react-native';

export default class LoginView extends React.Component {
    constructor(props) {
        super(props);
    }

    _handleLoginPress = () => {
        this.props.navigation.navigate('WebLoginView',
            {
                requestToken: this.state.requestToken
            }
        )
    };

    componentDidMount() {
        const url = 'https://4yobgfho99.execute-api.us-east-2.amazonaws.com/default/firstLegHandler';
        fetch(
            url
        ).then(
            (response) => response.json()
        ).then(
            (response) => {
                this.setState(state => {
                    return { ...response, ...state }
                })
            }
        ).catch(
            (error) => console.log(error)
        )
    }

    getAccessTickets() {
        const base_url = 'http://35.208.38.242:3000/callback'
        const url = `${base_url}?oauth_verifier=${id}&token=${token}&secret=${secret}`

        fetch(url)
            .then(response => response.json())
            .then(
                () => this.props.navigation.navigate('FarmDetailsView')
            )
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={[{ width: "30%", margin: 10 }]}>
                <Button
                    disabled={!(this.state && this.state.requestToken)}
                    onPress={this._handleLoginPress}
                    title="Login"
                    color="#841584"
                    accessibilityLabel="Login"
                />
            </View>
        )
    }
}
