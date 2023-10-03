import React from 'react'
import { useParams } from 'react-router-dom';

function Profile() {

  const {slug} = useParams();

  return (
    <>
      Profile Page - {slug}
    </>
  )
}

export default Profile
