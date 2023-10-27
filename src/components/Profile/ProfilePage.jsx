import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProfile } from '../../Redux/Profilereducer/action';
import Navbar from '../Navbar/Navbar';
import './Profilepage.css'; 
import { Link } from 'react-router-dom';

function ProfilePage() {
  const dispatch = useDispatch();
  const userData = JSON.parse(localStorage.getItem('myData'));

  useEffect(() => {
    if (userData && userData.data && userData.data.id) {
      dispatch(getProfile(userData?.data?.id));
    }
  }, [ dispatch]); 

  const profileData = useSelector((state) => state?.profile?.profile);

  // Function to format the ISO date to the desired format
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);

// Options for formatting the date
const options = { year: 'numeric', month: 'long', day: 'numeric' };

// Format the date as a user-friendly string
const formattedDate = date.toLocaleDateString('en-US', options);
return formattedDate


  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <h3>Profile</h3>
        {profileData?.data && profileData?.data?.length > 0 && (
          <div className="profile-details">
            <p>Name: {profileData?.data[0]?.name}</p>
            <p>DOB: {formatDate(profileData?.data[0]?.dob)}</p> {/* Format the date here */}
            <p>Gender: {profileData?.data[0]?.gender}</p>
          </div>
        )}

        <Link className="login-button" to='/edit'>Edit</Link>
      </div>
    </div>
  );
}

export default ProfilePage;
