import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

// https://developers.google.com/identity/sign-in/web/reference
// Kullanıcının sign in olabilmesi için gerekli bilgiler
// gapi ile verileri windows penceremizde görüyoruz ve gerekli işlemlerimizi
// de google documentation ile ilerletiyoruz
// Hazır. gapi.auth2.init veya başka bir API'ye çağrı yapın (gapi.load(),function(){});
//GoogleAuth nesnesini başlatır. window.gapi.client.init 

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client: auth2', () => {
            window.gapi.client.init({
                clientId: '1044259234799-nsu4tjjt9hu4imkoivn9vil36iefvn6j.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());//redux store güncelleyeceğiz
                this.auth.isSignedIn.listen(this.onAuthChange);//ve burada da değişimi bekleyeceğiz
            });
        });
    };

    //giriş durumumuzu alıyoruz
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon' />Sign In with Gooogle
                </button>);;
        }
        else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className='ui red google button'>
                    <i className='google icon' />Sign Out
                </button>);
        } else {
            return (
                <button onClick={this.onSignInClick} className='ui red google button'>
                    <i className='google icon' />Sign In with Gooogle
                </button>);
        }
    };



    render() {
        return (
            <div> {this.renderAuthButton()} </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);