import React, {useState} from 'react';
// import './mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  console.log('t1')
  const [formData, setFormData] = useState({
    email: null,
    firstName: null,
    lastName: null,

  });
  const changeHandler = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formData.email &&
    formData.firstName &&
    formData.lastName &&
    formData.email.indexOf("@") > -1 &&
    onValidated({
        EMAIL: formData.email,
        MERGE1: formData.firstName,
        MERGE2: formData.lastName,
    });
}

  return (
    <form onSubmit={(e) => handleSubmit(e)}> 
      <h3>join our email</h3> 
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={changeHandler}
      />
      <input
        id="firstName"
        name="firstName"
        type="text"
        placeholder="firstName"
        value={formData.firstName}
        onChange={changeHandler}
      />
      <input
        id="lastName"
        name="lastName"
        type="text"
        placeholder="lastName"
        value={formData.lastName}
        onChange={changeHandler}
      />
      <input type="submit" />
      <div>
        {status === "success" ? (
          <div>
            Thank you for registering.
          </div>
        ) : null}
        {status === "error" ? (
          <div>{message}</div>
        ) : null}
      </div>
    </form>
  );
};

const MailchimpFormContainer = props => {
  const postUrl = `https://hotmail.us20.list-manage.com/subscribe/post?u=daaf6d61c262407593d7455dd&id=$976d627fd9`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
             />
        </div>
    );
};

export default MailchimpFormContainer;