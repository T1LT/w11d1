import { useState } from "react";

const Form = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    phoneType: '',
    staff: 'instructor',
    bio: '',
    emailNotifications: false
  });
  const [errors, setErrors] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    validate(userData);
    console.log(userData);
  }

  const handleChange = e => {
    let key = e.target.name;
    setUserData({ ...userData, [key]: e.target.value });
  }

  const validate = userData => {
    if (!userData.name.length) {
      setErrors([...errors, "name cannot be blank"]);
    }
    if (!userData.email.length) {
      setErrors([...errors, "email cannot be blank"]);
    }
    if (!/[0-9]{10}/.test(userData.phone)) {
      setErrors([...errors, "invalid phone number"]);
    }
    if (userData.bio.length > 280) {
      setErrors([...errors, "bio cannot be more than 280 characters"]);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        placeholder="Name" 
        value={userData.name}
        onChange={handleChange}
      />
      <br />
      <input 
        type="email" 
        name="email" 
        placeholder="Email" 
        value={userData.email}
        onChange={handleChange}
      />
      <br />
      <input 
        type="tel" 
        name="phone" 
        placeholder="Phone Number" 
        value={userData.phone}
        onChange={handleChange} 
      />
      <br />
      <select name="phoneType" value={userData.phoneType} onChange={handleChange} disabled={!userData.phone}>
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="mobile">Mobile</option>
      </select>
      <br />
      <label htmlFor="staff">Staff: </label>
      <input 
        type="radio" 
        name="staff" 
        value="instructor" 
        checked={userData.staff === "instructor"} 
        onChange={handleChange} 
      />Instructor
      <input 
        type="radio" 
        name="staff" 
        value="student" 
        checked={userData.staff === "student"} 
        onChange={handleChange} 
      />Student
      <br />
      <textarea 
        name="bio" 
        placeholder="Bio" 
        value={userData.bio} 
        onChange={handleChange}
        maxLength="280"
      />
      <br />
      Email Notifications?
      <input 
        type="checkbox" 
        name="emailNotifications" 
        value={!(userData.emailNotifications === "true")} 
        checked={userData.emailNotifications === "true"} 
        onChange={handleChange} 
      />
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
