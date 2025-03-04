import React, { useState, useEffect } from 'react';
import { Award, Search, Filter } from 'lucide-react';
import { Certificate } from '../types/certificate';
import { ModuleType } from '../data/modules';
import CertificateCard from './CertificateCard';
import CertificateView from './CertificateView';

interface CertificatesProps {
  completedModules: string[];
  modules: ModuleType[];
  userProfile: {
    name: string;
    role: string;
    department: string;
  };
}

const Certificates: React.FC<CertificatesProps> = ({ 
  completedModules, 
  modules,
  userProfile
}) => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);
  const [selectedModule, setSelectedModule] = useState<ModuleType | null>(null);

  // Generate certificates for completed modules
  useEffect(() => {
    const generatedCertificates = completedModules.map(moduleId => {
      const module = modules.find(m => m.id === moduleId);
      const completionDate = new Date();
      // Subtract a random number of days (0-30) to make certificates appear to be earned over time
      completionDate.setDate(completionDate.getDate() - Math.floor(Math.random() * 30));
      
      return {
        id: `cert-${moduleId}`,
        userId: 'current-user',
        moduleId: moduleId,
        moduleName: module ? module.title : 'Unknown Module',
        issueDate: completionDate.toISOString(),
        certificateNumber: `SEC-${Math.floor(100000 + Math.random() * 900000)}`
      };
    });
    
    // Sort certificates by issue date (newest first)
    generatedCertificates.sort((a, b) => 
      new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
    );
    
    setCertificates(generatedCertificates);
  }, [completedModules, modules]);

  const filteredCertificates = certificates.filter(certificate =>
    certificate.moduleName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleViewCertificate = (certificate: Certificate) => {
    setSelectedCertificate(certificate);
    const module = modules.find(m => m.id === certificate.moduleId);
    if (module) {
      setSelectedModule(module);
    }
  };

  const handleCloseView = () => {
    setSelectedCertificate(null);
    setSelectedModule(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Your Certificates</h1>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search certificates..."
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {certificates.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <Award className="h-12 w-12 text-gray-400 mx-auto mb-3" />
          <p className="text-gray-700 font-medium">You haven't earned any certificates yet.</p>
          <p className="text-gray-500 mt-1">Complete training modules to earn certificates.</p>
        </div>
      ) : (
        <>
          {filteredCertificates.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <Search className="h-12 w-12 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-700 font-medium">No certificates match your search.</p>
              <button 
                className="mt-4 text-blue-600 hover:text-blue-700"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCertificates.map(certificate => (
                <CertificateCard
                  key={certificate.id}
                  certificate={certificate}
                  onView={handleViewCertificate}
                />
              ))}
            </div>
          )}
        </>
      )}
      
      {selectedCertificate && selectedModule && (
        <CertificateView
          certificate={selectedCertificate}
          module={selectedModule}
          userProfile={userProfile}
          onClose={handleCloseView}
        />
      )}
    </div>
  );
};

export default Certificates;