import React from 'react';

const ContactForm = () => {
  return (
    <form className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
            placeholder="john@example.com"
          />
        </div>
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          placeholder="Project Inquiry"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={6}
          className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 rounded-lg text-lg font-semibold hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-500/25"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;