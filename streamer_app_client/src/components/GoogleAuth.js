import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId:
            "591469701674-ddffgmnb6qumheq0072dp1ffq3cdl30t.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>don't know if you are signed in</div>;
    } else if (this.props.isSignedIn) {
      return <div>I'm signed in</div>;
    } else {
      return <div>Not signed IN</div>;
    }
  }
  signInbtn = () => {
    this.auth.signIn();
  };
  signOutbtn = () => {
    this.auth.signOut();
  };
  authStatus() {
    if (this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.signOutbtn}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else if (this.props.isSignedIn === null || this.props.isSignedIn) {
      return (
        <button className="ui red google button" onClick={this.signOutbtn}>
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
    return (
      <button className="ui red google button" onClick={this.signInbtn}>
        <i className="google icon" />
        Sign In With Google
      </button>
    );
  }
  render() {
    console.log(this.props.userId);
    return <div>{this.authStatus()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, userId: state.auth.userId };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
