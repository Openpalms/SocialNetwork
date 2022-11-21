import './App.css';
// import NavBar from './components/NavBar/NavBar';
// import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route, Routes } from 'react-router-dom';
// import News from './components/News/News';
// import Music from './components/Music/Music';
// import Sets from './components/Sets/Sets';
// import UsersContainer from './components/Users/UsersContainer';
// import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/Common/Preloader/Preloader';
const News = React.lazy(() => import('./components/News/News'));
const UsersContainer = React.lazy(() =>
  import('./components/Users/UsersContainer')
);
const ProfileContainer = React.lazy(() =>
  import('./components/Profile/ProfileContainer')
);
const DialogsContainer = React.lazy(() =>
  import('./components/Dialogs/DialogsContainer')
);
const Music = React.lazy(() => import('./components/Music/Music'));
const Sets = React.lazy(() => import('./components/Sets/Sets'));
const NavBar = React.lazy(() => import('./components/NavBar/NavBar'));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    // if (!this.props.initialized) {
    //   return <Preloader />;
    // } else
    return (
      <div className="App">
        <div className="app-wrapper">
          <HeaderContainer />
          <div className="container">
            <div className="row text-start">
              <div className="col-3">
                <NavBar />{' '}
              </div>
              <div className="col">
                <Suspense
                  fallback={
                    <div>
                      <Preloader />
                    </div>
                  }
                >
                  <Routes>
                    <Route
                      path="/Profile/:userID"
                      element={<ProfileContainer />}
                    />
                    <Route path="/Profile" element={<ProfileContainer />} />
                    <Route path="/users" element={<UsersContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/music" element={<Music />} />
                    <Route path="/settings" element={<Sets />} />
                    <Route path="/login" element={<Login />} />
                  </Routes>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);
// export default App;
