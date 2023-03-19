import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '@/styles/Contact.module.css';
import withNavbar from './withNavbar';

interface FormState {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formState),
    });

    if (response.status === 200) {
      setStatus('Message sent successfully!');
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus('Failed to send the message. Please try again later.');
    }
  };

  return (
    <section className={styles.main} id="contact">
        <div>
            <h1>CONTACT</h1>
        </div>
        <hr />
    <div className={styles.contactForm}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
          required
          className="contactForm"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formState.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formState.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">SEND</button>
      </form>
      {status && <p>{status}</p>}
    </div>
    </section>
  );
};

export default withNavbar(Contact);
