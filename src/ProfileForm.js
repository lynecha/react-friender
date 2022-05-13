import React, { useContext, useState, useEffect } from "react";
import UserContext from "./userContext";
import { Link, useNavigate } from "react-router-dom";
/**
 *  Prop: updateUser function
 *  State: form data, and error messages
 *  Render profile form
 */
function ProfileForm({ update, addPhoto }) {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const initialFormData = {
      username: user.username,
      email: user.email,
      hobbies: user.hobbies,
      bio: user.bio,
      interests: user.interests,
      location: user.location,
      friend_radius: user.friend_radius,
      file: null
};
  const [formData, setFormData] = useState(initialFormData);
  const [images, setImages] = useState([]);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
    ...fData, [name]: value 
    }));
  }

  function handleChangeForFile(evt) {
    setFormData((fData) => ({
    ...fData, "file": evt.target.files[0]
    }));
  }


  /** Call parent function to update.*/
  async function handleSubmit(evt) {
    evt.preventDefault();
    let updatedFormData = { ...formData };
    delete updatedFormData.username;

    try {
      await update(updatedFormData, user.username);
      console.log("what is updatedformdata",updatedFormData)
      let filePath = await addPhoto(updatedFormData.file)
      setFormData((fData) => (
        { ...fData}
        ));
      setImages(() => [...images,filePath])
      navigate("/profile");
      
    } catch (error) {
    }
  }

  //separate file
  function renderForm() {
    return Object.keys(initialFormData).map((field) => {
      if (field !== "file") {
        return (
          <div className="mb-3" key={field}>
            <input
              disabled={field === "username"}
              id={`Profile-${field}`}
              name={field}
              className="form-control"
              placeholder={field}
              onChange={handleChange}
              value={formData[field]}
              aria-label={field}
            />
          </div>
        );
      }
    });
  }

  return (
    <div>
      <form encType="multipart/form-data" className="ProfileForm" onSubmit={handleSubmit}>
        <label className="form-label" id="file">Upload image</label>
        <input className="form-control" type="file" id="file" name="file" accept="image/png,image/jpeg" onChange={handleChangeForFile}/>
        {renderForm()}

        <button className="btn-primary rig btn btn-sm ProfileForm-Btn">
          Save changes
        </button>
      </form>
    </div>
  );
}

export default ProfileForm;
