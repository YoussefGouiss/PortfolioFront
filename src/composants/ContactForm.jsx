// src/components/ContactForm.js
import React, { useState } from 'react';
import { FiUser, FiMail, FiPhone, FiMessageSquare, FiLoader, FiCheckCircle } from 'react-icons/fi';

const ContactForm = () => {
  // State for the form fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for the submission status: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form redirect
    setStatus('loading');

    try {
      // Submit to your GetForm.io endpoint
      const response = await fetch('https://getform.io/f/awnweovb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Important for GetForm to know how to respond
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ fullName: '', email: '', phone: '', message: '' }); // Clear form on success
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  // --- STYLED SUCCESS MESSAGE ---
  // If submission is successful, show the custom thank you message
  if (status === 'success') {
    return (
      <div className="w-full max-w-xl mx-auto py-16 px-4">
        {/* Main container with entrance animation */}
        <div className="text-center p-1 rounded-lg bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-400 animate-fadeInUp">
          <div className="p-8 md:p-10 bg-black/80 backdrop-blur-lg rounded-md">
            
            {/* Checkmark Icon with glow and delayed animation */}
            <FiCheckCircle 
              className="mx-auto w-20 h-20 text-cyan-400 mb-5 animate-pulse" 
              style={{ 
                animationName: 'fadeInUp',
                animationDuration: '0.8s',
                animationDelay: '0.2s',
                animationFillMode: 'backwards',
                filter: 'drop-shadow(0 0 12px rgba(0, 255, 255, 0.6))' 
              }}
            />
            
            {/* "Message Sent!" text with gradient and delayed animation */}
            <h3 
              className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-3"
              style={{
                animationName: 'fadeInUp',
                animationDuration: '0.8s',
                animationDelay: '0.4s',
                animationFillMode: 'backwards'
              }}
            >
              Message Sent!
            </h3>

            {/* Subtext with delayed animation */}
            <p 
              className="text-indigo-200/80"
              style={{
                animationName: 'fadeInUp',
                animationDuration: '0.8s',
                animationDelay: '0.6s',
                animationFillMode: 'backwards'
              }}
            >
              Thank you for reaching out. I'll get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // --- MAIN CONTACT FORM ---
  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4 animate-fadeInUp">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <p className="text-indigo-200/80 mt-2">Have a project in mind? I'd love to hear from you.</p>
      </div>

      <div className="relative bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-lg ring-1 ring-purple-500/30">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Form Fields */}
          <InputField icon={<FiUser />} label="Full Name" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
          <InputField icon={<FiMail />} label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          <InputField icon={<FiPhone />} label="Phone (Optional)" name="phone" type="tel" value={formData.phone} onChange={handleChange} />
          <TextareaField icon={<FiMessageSquare />} label="Message" name="message" value={formData.message} onChange={handleChange} required />
          
          {/* Submit Button with loading state */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="
              w-full flex items-center justify-center px-8 py-3 rounded-full
              font-semibold tracking-wider text-indigo-200
              border-2 border-purple-500/50
              transition-all duration-300 ease-in-out
              hover:bg-purple-500/20 hover:backdrop-blur-sm
              hover:border-purple-400 hover:text-cyan-300
              hover:shadow-lg hover:shadow-purple-500/30
              hover:scale-105
              disabled:opacity-50 disabled:cursor-not-allowed
            "
          >
            {status === 'loading' ? (
              <FiLoader className="animate-spin w-6 h-6" />
            ) : (
              'Send Message'
            )}
          </button>
          {status === 'error' && <p className="text-center text-red-400 mt-4">Something went wrong. Please try again later.</p>}
        </form>
      </div>
    </section>
  );
};

// --- Reusable Input Field Component ---
const InputField = ({ icon, label, ...props }) => (
  <div className="relative">
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-purple-300/60 pointer-events-none">
      {icon}
    </span>
    <input
      {...props}
      className="
        w-full pl-12 pr-4 py-3 rounded-md
        bg-gray-900/50 border border-purple-500/30
        text-gray-200 placeholder-gray-500
        transition-all duration-300
        focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50
      "
      placeholder={label}
    />
  </div>
);

// --- Reusable Textarea Field Component ---
const TextareaField = ({ icon, label, ...props }) => (
  <div className="relative">
     <span className="absolute left-4 top-4 text-purple-300/60 pointer-events-none">
      {icon}
    </span>
    <textarea
      {...props}
      rows="5"
      className="
        w-full pl-12 pr-4 py-3 rounded-md resize-none
        bg-gray-900/50 border border-purple-500/30
        text-gray-200 placeholder-gray-500
        transition-all duration-300
        focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/50
      "
      placeholder={label}
    />
  </div>
);

export default ContactForm;