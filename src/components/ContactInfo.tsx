import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-start gap-4 group">
        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
          <Mail className="text-purple-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Email Us</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">careers@techlogx.in</p>
        </div>
      </div>

      <div className="flex items-start gap-4 group">
        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
          <Phone className="text-purple-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Call Us</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">6369952428</p>
        </div>
      </div>

      <div className="flex items-start gap-4 group">
        <div className="p-3 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
          <MapPin className="text-purple-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">Visit Us</h3>
          <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
            Bangalore<br />India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;