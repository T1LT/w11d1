const Form = () => {
  return (
    <form>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="phoneNumber" placeholder="Phone Number" />
      <select name="phoneType">
        <option value="home">Home</option>
        <option value="work">Work</option>
        <option value="mobile">Mobile</option>
      </select>
      Instructor <input type="radio" name="staff" value="instructor" />
      Student <input type="radio" name="staff" value="student" />
      <textarea name="bio" placeholder="Bio" />
      Email Notifications?
      <input type="checkbox" name="emailNotifications" />
    </form>
  );
};

export default Form;
