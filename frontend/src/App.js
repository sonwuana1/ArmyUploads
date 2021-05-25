import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import * as sessionActions from "./store/session";
import Navigation from './components/Navigation/';
import ViewAllAlbums from './components/ViewAlbums/ViewAllAlbums';
import ViewAllPhotos from './components/ViewAllPhotos/ViewAllPhotos';
import PhotoShow from './components/PhotoShow/PhotoShow';



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
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
