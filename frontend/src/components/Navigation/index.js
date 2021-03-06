import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginForm from '../LoginForm';
import SignupFormModal from '../SignUpFormModal';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        {/* <LoginForm /> */}
        <SignupFormModal />
      </>
    );
  }

  return (
    <div className="navBar">
        <>
            <NavLink exact to="/" className='home-link'>⟭⟬Home</NavLink>
            {isLoaded && sessionLinks}
        </>
    </div>
  );
}

export default Navigation;
