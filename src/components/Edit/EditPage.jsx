import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editProfile } from '../../Redux/Profilereducer/action';
import Navbar from '../Navbar/Navbar';
import './editpage.css'; // Import the CSS file

function EditProfilePage() {
  const user = useSelector((state) => state?.profile?.profile);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({ name: '', dob: '', gender: '' });
  
  function formatISODateToYYYYMMDD(isoDate) {
    const date = new Date(isoDate);
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getUTCDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  useEffect(() => {
    if (user) {
      setFormData({ name: user?.data[0]?.name,  dob: formatISODateToYYYYMMDD(user?.data[0]?.dob), gender: user?.data[0]?.gender });
    }
  }, [user]);

  const handleSubmit = () => {
    dispatch(editProfile(user?.data[0]?.id, formData));
  };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (

     
     <div>  
      
      <Navbar />

    <div className="edit-profile-container">
      <h3>Edit Profile</h3>
      <form className="edit-profile-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            className="edit-profile-input"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            className="edit-profile-input"
            value={formData.dob}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select
            name="gender"
            className="edit-profile-select"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <button className="edit-profile-button" type="submit">
          Save
        </button>
      </form>
    </div>
    
</div>
  );
}

export default EditProfilePage;
