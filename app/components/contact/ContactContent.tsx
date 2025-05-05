/**
 * Contact Content Component (/contact page)
 * 
 * Displays full contact information, interactive map, downloadable forms list,
 * and a contact form.
 * Uses a two-column layout on larger screens.
 */
'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '@/lib/theme';
import dynamic from 'next/dynamic';

// Shared Styles (consider abstracting)
const PageContainer = styled.div`
  padding: 2rem 1rem;
  max-width: 1100px; /* Wider for contact layout */
  margin: 0 auto;

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: ${theme.colors.primary};
  margin-bottom: 2.5rem;
  text-align: center;
`;

const Section = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${theme.colors.primary};
  margin-bottom: 1.5rem;
  border-bottom: 2px solid ${theme.colors.secondary};
  padding-bottom: 0.5rem;
`;

const ContactLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr; /* Two columns for details/map and form */
  }
`;

const InfoColumn = styled.div``;
const FormColumn = styled.div``;

// Specific Contact Styles
const ContactDetailsList = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;
  color: #444;

  p {
    margin-bottom: 1rem;
  }

  strong {
    color: ${theme.colors.primary};
  }

  a {
    color: ${theme.colors.secondary};
    font-weight: 500;
    text-decoration: none;
    &:hover { text-decoration: underline; }
  }

  .appointment-note {
      font-style: italic;
      color: #666;
      font-size: 0.95rem;
  }
`;

const MapContainer = styled.div`
  border-radius: 8px;
  overflow: hidden;
  height: 350px; /* Explicit height */
  width: 100%;
  background-color: #e9e9e9;
  margin-top: 1.5rem;
  position: relative; // Needed for potential overlays or loading indicators
`;

const MapPlaceholder = styled(MapContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-style: italic;
`;

const FormsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-bottom: 0.8rem;
  }

  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    font-weight: 500;
    &:hover { text-decoration: underline; }
    /* Add PDF icon later if desired */
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  label {
    font-weight: 500;
    color: ${theme.colors.primary};
    margin-bottom: 0.3rem;
    display: block;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  textarea {
    width: 100%;
    padding: 0.8rem 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    font-family: inherit;
    transition: border-color 0.2s ease;

    &:focus {
      outline: none;
      border-color: ${theme.colors.primary};
      box-shadow: 0 0 0 2px ${theme.colors.primary}30;
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }

  button {
    background-color: ${theme.colors.secondary};
    color: white;
    padding: 0.9rem 2rem;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s ease;
    align-self: flex-start;

    &:hover {
      background-color: #4cae4c;
    }
    
    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
  }
`;

const FeedbackMessage = styled.div<{ type: 'success' | 'error' }>`
    padding: 1rem;
    border-radius: 5px;
    margin-top: 1rem;
    font-weight: 500;
    border: 1px solid;
    background-color: ${props => props.type === 'success' ? '#dff0d8' : '#f2dede'};
    border-color: ${props => props.type === 'success' ? '#d6e9c6' : '#ebccd1'};
    color: ${props => props.type === 'success' ? '#3c763d' : '#a94442'};
`;

// Dynamically import LeafletMap - simplified loading
const LeafletMap = dynamic(() => import('../../components/home/LeafletMap'), {
  ssr: false,
  loading: () => <p style={{ textAlign: 'center', paddingTop: '2rem' }}>Loading map...</p> // Simple text loading
});

// Updated forms array
const forms = [
    { name: "Authorization Consenting to Release of Information", url: "https://cdn.websites.hibu.com/9cbbe6282a474b6a85980c948ff8c941/files/uploaded/Auth%20of%20ROI.pdf" },
    { name: "Declaration of Agreement", url: "https://cdn.websites.hibu.com/9cbbe6282a474b6a85980c948ff8c941/files/uploaded/Declaration%20of%20Agreement.pdf" },
    { name: "HIPAA Notice of Privacy Practices", url: "https://cdn.websites.hibu.com/9cbbe6282a474b6a85980c948ff8c941/files/uploaded/HIPAA%20Notice.pdf" },
    { name: "Informed Consent & Statement of Understanding", url: "https://cdn.websites.hibu.com/9cbbe6282a474b6a85980c948ff8c941/files/uploaded/Informed%20Consent%20%20&%20Understanding%20pdf.pdf" },
];

export default function ContactContent() {
    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [feedback, setFeedback] = useState('');

    const address = "16864 Royal Crest Drive, Houston, TX 77058";
    const encodedAddress = encodeURIComponent(address);
    const googleMapsDirectionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    const position: L.LatLngExpression = [29.5714, -95.1176];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setFeedback('');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFeedback('Thank you for your message! We will get back to you shortly.');
            setFormData({ name: '', phone: '', email: '', message: '' });
        } catch (error) {
            setStatus('error');
            setFeedback('Sorry, there was an error sending your message. Please try again or contact us directly.');
        }
    };

  return (
    <PageContainer>
      <PageTitle>Contact Us for Exceptional Counseling Services</PageTitle>

      <ContactLayout>
        <InfoColumn>
          <Section>
            <SectionTitle>Contact Details</SectionTitle>
            <ContactDetailsList>
              <p><strong>Colleen Neal, MS, LPC, NCC</strong></p>
              <p><strong>Address:</strong> {address}</p>
              <p><strong>Email:</strong> <a href="mailto:colleenneal.lpc@gmail.com">colleenneal.lpc@gmail.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:281-508-2566">281-508-2566</a></p>
              <p className="appointment-note">* By appointment only</p>
            </ContactDetailsList>
          </Section>

          <Section>
            <SectionTitle>Get Directions</SectionTitle>
            <MapContainer>
                <LeafletMap position={position} address={address} />
            </MapContainer>
            <a 
                href={googleMapsDirectionsUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{display: 'inline-block', marginTop: '1rem'}}
            >
                View on Google Maps
            </a>
          </Section>

          <Section>
            <SectionTitle>Downloadable Forms</SectionTitle>
            <FormsList>
                {forms.map(form => (
                    <li key={form.name}>
                        <a href={form.url} target="_blank" rel="noopener noreferrer">{form.name} (PDF)</a>
                    </li>
                ))}
            </FormsList>
          </Section>
        </InfoColumn>

        <FormColumn>
            <Section>
                <SectionTitle>Send a Message</SectionTitle>
                <ContactForm onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="phone">Phone Number:</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit" disabled={status === 'submitting'}>
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && <FeedbackMessage type="success">{feedback}</FeedbackMessage>}
                    {status === 'error' && <FeedbackMessage type="error">{feedback}</FeedbackMessage>}
                </ContactForm>
            </Section>
        </FormColumn>
      </ContactLayout>
    </PageContainer>
  );
} 