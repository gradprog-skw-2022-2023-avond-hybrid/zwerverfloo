import React from 'react';

import AuthUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = Component => {
    class WithAuthentication extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                authUser: null,
            };
        }

        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    authUser
                        ? this.setState({ authUser })
                        : this.setState({ authUser: null });
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                <AuthUserContext.Provider value={this.state.authUser}>
                    <Component {...this.props} />
                </AuthUserContext.Provider>
            );
        }
    }

    return withFirebase(WithAuthentication);
};

export default withAuthentication;

/*
What we will do here, is create a higher order component that add the state of the authUser to the component.
Then we will also add withFirebase so we do not have to call that again.
We’ll use onAuthStateChanged from firebase to check if the state has changed and set our user state accordingly.
We will fire this as soon as the component has mounted &
and also when the component gets removed the authUser gets removed from the class.*/
