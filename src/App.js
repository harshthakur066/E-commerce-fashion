import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GlobalStyle } from "./global.styles";

import { auth, createUserProfileDocument } from "./firebase/firebase-utils";

import { setCurrentUser } from "./redux/user/user-action";
import Header from "./components/header/header";
import { SelectCurrentUser } from "./redux/user/user-selector";
import WithSpinner from "./components/with-spinner/with-spinner";

const HomePage = lazy(() => import("./pages/homepage/homepage"));
const ShopPage = lazy(() => import("./pages/shop/shop"));
const SignInAndSignUpPage = lazy(() =>
  import("./pages/sign-in-and-sign-up/sign-in-and-sign-up")
);
const CheckoutPage = lazy(() => import("./pages/checkout/checkout"));
const CollectionPage = lazy(() => import("./pages/collection/collection"));

// import { selectCollectionForPreview } from './redux/shop/shop-selectors';

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
          // console.log(setCurrentUser);
        });
      } else {
        setCurrentUser(userAuth);
        // addCollectionAndDocuments('collection', collectionsArray.map(({ title, items }) => ({ title, items })))
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <Suspense fallback={<WithSpinner />}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route
              exact
              path="/shop/:collectionId"
              component={CollectionPage}
            />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            <Route exact path="/checkout" component={CheckoutPage} />
          </Suspense>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: SelectCurrentUser,
  // collectionsArray: selectCollectionForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
