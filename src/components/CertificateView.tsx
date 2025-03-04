import React from 'react';
import { X, Award, Download, Share2 } from 'lucide-react';
import { Certificate } from '../types/certificate';
import { ModuleType } from '../data/modules';

interface CertificateViewProps {
  certificate: Certificate;
  module: ModuleType;
  userProfile: {
    name: string;
    role: string;
    department: string;
  };
  onClose: () => void;
}

const CertificateView: React.FC<CertificateViewProps> = ({ 
  certificate, 
  module, 
  userProfile, 
  onClose 
}) => {
  const formattedDate = new Date(certificate.issueDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              type="button"
              className="text-gray-400 hover:text-gray-500 focus:outline-none"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="certificate-container border-8 border-double border-blue-200 p-8 bg-blue-50 relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] opacity-5"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                      <Award className="h-10 w-10 text-blue-600" />
                    </div>
                  </div>
                  <h1 className="text-3xl font-bold text-blue-800 mb-1">Certificate of Completion</h1>
                  <p className="text-gray-600">This certifies that</p>
                </div>
                
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-1">{userProfile.name}</h2>
                  <p className="text-gray-600">{userProfile.role} - {userProfile.department}</p>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-gray-600">has successfully completed the</p>
                  <h3 className="text-xl font-bold text-blue-700 mb-1">{module.title}</h3>
                  <p className="text-gray-600">security training module</p>
                </div>
                
                <div className="flex justify-between items-center mt-8 text-sm text-gray-600">
                  <div>
                    <p>Issue Date: {formattedDate}</p>
                    <p>Certificate ID: {certificate.certificateNumber}</p>
                  </div>
                  <div className="text-right">
                    <p>SecureAware Training</p>
                    <p>Security Education Program</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                // In a real app, this would trigger a download
                alert('Certificate download functionality would be implemented here');
              }}
            >
              <Download className="h-4 w-4 mr-2" />
              Download
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                // In a real app, this would open a share dialog
                alert('Certificate sharing functionality would be implemented here');
              }}
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;