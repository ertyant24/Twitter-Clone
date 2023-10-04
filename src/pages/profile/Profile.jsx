import React from 'react'
import { useParams } from 'react-router-dom';
import store from '../../store';

function Profile() {

  const {username} = useParams();

  return (
    <>
      Profile Page - {username}
    </>
  )
}

export default Profile
