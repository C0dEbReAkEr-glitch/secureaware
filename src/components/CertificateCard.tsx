import React from 'react';
import { Award, Download, Share2 } from 'lucide-react';
import { Certificate } from '../types/certificate';

interface CertificateCardProps {
  certificate: Certificate;
  onView: (certificate: Certificate) => void;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate, onView }) => {
  const formattedDate = new Date(certificate.issueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="h-3 bg-blue-600"></div>
      <div className="p-5">
        <div className="flex items-center mb-3">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            <Award className="h-5 w-5 text-blue-600" />
          </div>
          <h3 className="font-medium text-gray-900">{certificate.moduleName}</h3>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-500">Certificate #{certificate.certificateNumber}</p>
          <p className="text-sm text-gray-500">Issued on {formattedDate}</p>
        </div>
        
        <div className="flex justify-between items-center">
          <button 
            onClick={() => onView(certificate)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            View Certificate
          </button>
          
          <div className="flex space-x-2">
            <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <Download className="h-4 w-4" />
            </button>
            <button className="p-1.5 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100">
              <Share2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;