import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, AlertTriangle, Award } from 'lucide-react';
import { ModuleType } from '../data/modules';

interface ModuleContentProps {
  module: ModuleType;
  onComplete: () => void;
  isCompleted: boolean;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ 
  module, 
  onComplete,
  isCompleted
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, string>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizPassed, setQuizPassed] = useState(false);
  const [showCertificatePreview, setShowCertificatePreview] = useState(false);
  
  const handleNextStep = () => {
    if (currentStep < module.content.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };
  
  const handleQuizAnswer = (questionId: string, answer: string) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionId]: answer
    });
  };
  
  const handleQuizSubmit = () => {
    // Check if all questions are answered
    const allAnswered = module.quiz.every(q => quizAnswers[q.id]);
    
    if (!allAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }
    
    // Calculate score
    const correctAnswers = module.quiz.filter(q => 
      quizAnswers[q.id] === q.correctAnswer
    ).length;
    
    const score = (correctAnswers / module.quiz.length) * 100;
    const passed = score >= 70; // Pass threshold is 70%
    
    setQuizPassed(passed);
    setQuizSubmitted(true);
    
    if (passed && !isCompleted) {
      // Show certificate preview before completing
      setShowCertificatePreview(true);
    }
  };
  
  const resetQuiz = () => {
    setQuizAnswers({});
    setQuizSubmitted(false);
  };

  const handleCompletionConfirm = () => {
    setShowCertificatePreview(false);
    onComplete();
  };
  
  const currentContent = module.content[currentStep];
  const isLastStep = currentStep === module.content.length - 1;
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Module Header */}
      <div className="mb-6">
        <button 
          onClick={() => onComplete()}
          className="flex items-center text-blue-600 hover:text-blue-700 mb-4"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to modules
        </button>
        
        <div className="flex items-center mb-2">
          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
            {React.createElement(module.icon, { className: "h-5 w-5 text-blue-600" })}
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{module.title}</h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600">
          <span>{module.duration} minutes</span>
          <span>•</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">{module.level}</span>
          {isCompleted && (
            <>
              <span>•</span>
              <span className="flex items-center text-green-600">
                <CheckCircle className="h-4 w-4 mr-1" />
                Completed
              </span>
            </>
          )}
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Progress</span>
          <span>{currentStep + 1} of {module.content.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className="bg-blue-600 h-2.5 rounded-full" 
            style={{ width: `${((currentStep + 1) / module.content.length) * 100}%` }}
          ></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">{currentContent.title}</h2>
        
        <div className="prose max-w-none">
          {currentContent.content.map((item, index) => (
            <div key={index} className="mb-4">
              {item.type === 'text' && <p className="text-gray-700">{item.value}</p>}
              
              {item.type === 'image' && (
                <div className="my-4">
                  <img 
                    src={item.value} 
                    alt={`Content illustration ${index}`} 
                    className="rounded-lg max-w-full h-auto"
                  />
                </div>
              )}
              
              {item.type === 'tip' && (
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <AlertTriangle className="h-5 w-5 text-blue-600" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm text-blue-700">{item.value}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Quiz (on last step) */}
      {isLastStep && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Knowledge Check</h2>
          
          {quizSubmitted ? (
            <div className="space-y-6">
              <div className={`p-4 rounded-lg ${quizPassed ? 'bg-green-50' : 'bg-red-50'}`}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    {quizPassed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : (
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="ml-3">
                    <h3 className={`text-lg font-medium ${quizPassed ? 'text-green-800' : 'text-red-800'}`}>
                      {quizPassed ? 'Congratulations!' : 'Try Again'}
                    </h3>
                    <div className="mt-2 text-sm">
                      {quizPassed ? (
                        <p className="text-green-700">
                          You've successfully completed this module. You can now move on to the next one.
                        </p>
                      ) : (
                        <p className="text-red-700">
                          You didn't pass the quiz. Review the module content and try again.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              
              {module.quiz.map((question, qIndex) => {
                const isCorrect = quizAnswers[question.id] === question.correctAnswer;
                
                return (
                  <div key={question.id} className="border rounded-lg overflow-hidden">
                    <div className="bg-gray-50 p-4 border-b">
                      <h3 className="font-medium text-gray-900">Question {qIndex + 1}</h3>
                    </div>
                    <div className="p-4">
                      <p className="text-gray-700 mb-4">{question.question}</p>
                      
                      <div className="space-y-2">
                        {question.options.map((option) => {
                          const isSelected = quizAnswers[question.id] === option.value;
                          const isCorrectOption = option.value === question.correctAnswer;
                          
                          let optionClass = "border rounded-md p-3 flex items-center";
                          
                          if (isSelected) {
                            optionClass += isCorrect 
                              ? " bg-green-50 border-green-200" 
                              : " bg-red-50 border-red-200";
                          } else if (isCorrectOption) {
                            optionClass += " bg-green-50 border-green-200";
                          }
                          
                          return (
                            <div key={option.value} className={optionClass}>
                              <div className="mr-3">
                                {isSelected && isCorrect && (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                )}
                                {isSelected && !isCorrect && (
                                  <AlertTriangle className="h-5 w-5 text-red-600" />
                                )}
                                {!isSelected && isCorrectOption && (
                                  <CheckCircle className="h-5 w-5 text-green-600" />
                                )}
                              </div>
                              <span>{option.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {!quizPassed && (
                <div className="flex justify-center">
                  <button
                    onClick={resetQuiz}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Try Again
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-6">
              {module.quiz.map((question, qIndex) => (
                <div key={question.id} className="border rounded-lg overflow-hidden">
                  <div className="bg-gray-50 p-4 border-b">
                    <h3 className="font-medium text-gray-900">Question {qIndex + 1}</h3>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-700 mb-4">{question.question}</p>
                    
                    <div className="space-y-2">
                      {question.options.map((option) => (
                        <label 
                          key={option.value} 
                          className={`border rounded-md p-3 flex items-center cursor-pointer ${
                            quizAnswers[question.id] === option.value 
                              ? 'bg-blue-50 border-blue-200' 
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name={question.id}
                            value={option.value}
                            checked={quizAnswers[question.id] === option.value}
                            onChange={() => handleQuizAnswer(question.id, option.value)}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                          />
                          <span className="ml-3">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-center">
                <button
                  onClick={handleQuizSubmit}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit Answers
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Certificate Preview Modal */}
      {showCertificatePreview && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Certificate Earned!
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Congratulations! You've successfully completed the "{module.title}" module and earned a certificate.
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        Your certificate will be available in the Certificates section.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleCompletionConfirm}
                >
                  View My Certificates
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => {
                    setShowCertificatePreview(false);
                    onComplete();
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          onClick={handlePrevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded-md flex items-center ${
            currentStep === 0
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-blue-600 hover:text-blue-700'
          }`}
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Previous
        </button>
        
        {!isLastStep && (
          <button
            onClick={handleNextStep}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center"
          >
            Next
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ModuleContent;