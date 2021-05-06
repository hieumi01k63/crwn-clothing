import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from "./pages/shop/shop.component";
import { Header } from "./components/header/header.component";
import { SignInAndSignUp } from "./pages/sign-up-and-sign-in/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/signIn" component={SignInAndSignUp}></Route>
        </switch>
      </div>
    );
  }
}

export default App;
