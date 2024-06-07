import React, { useState } from 'react';
import axios from 'axios';
import './ContactForm.css'; // Ensure you create this CSS file

const FormComponent: React.FC = () => {
  // State to manage form inputs
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  // Function to handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // Replace with your API endpoint and API key if needed
    const apiEndpoint = 'https://ena8de7hm7jd.x.pipedream.net/';

    // Data to be sent to the API
    const data = {
      name: name,
      email: email,
    };

    try {
      const response = await axios.post(apiEndpoint, data);
      setMessage('Sign up completed');
    } catch (error: any) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="background-wrapper">
      <div className="content">
        <div className="contact">
          <h1>SIGN UP FOR NEWSLETTER</h1>
          Get discounts for your personal fitness and gym services now.
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            Submit
          </button>
        </form>
        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
};

export default FormComponent;
