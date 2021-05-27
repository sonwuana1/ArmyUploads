import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation/';
import ViewAllAlbums from './components/ViewAlbums/ViewAllAlbums';
import ViewAllPhotos from './components/ViewAllPhotos/ViewAllPhotos';
import PhotoShow from './components/PhotoShow/PhotoShow';
import EditAlbumForm from "./components/EditAlbum/EditAlbumForm";
import DeleteAlbumForm from "./components/DeleteAlbum/DeleteAlbumForm";
import ViewPhoto from "./components/ViewPhoto/ViewPhoto";
import Footer from "./components/Footer/Footer";
import AboutMe from "./components/AboutMe/AboutMe";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <ViewAllAlbums />
            <ViewAllPhotos />
          </Route>
          <Route path="/album/:id">
            <PhotoShow />
            <EditAlbumForm />
            <DeleteAlbumForm />
          </Route>
          <Route path="/photo/:id">
            <ViewPhoto />
          </Route>
          <Route path='/'>
            <AboutMe />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
