'use client';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [response, setResponse] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/api/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('Failed to submit form');
      }

      const data = await res.json();
      setResponse(data.message);
      setFormData({ name: '', email: '' }); // clear form
    } catch (error) {
      console.error(error);
      setResponse('Submission failed.');
    }
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Submit Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </main>
  );
}
