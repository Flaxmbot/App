import React, { useState } from 'react';
import { Heart, Phone, LifeBuoy, Clock } from 'lucide-react';

const EmergencySupport: React.FC = () => {
  const [isBreathingActive, setIsBreathingActive] = useState(false);
  const [breathingStep, setBreathingStep] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [seconds, setSeconds] = useState(4);
  
  const startBreathingExercise = () => {
    setIsBreathingActive(true);
    setBreathingStep('inhale');
    setSeconds(4);
    
    const breathingInterval = setInterval(() => {
      setSeconds((prev) => {
        if (prev === 1) {
          setBreathingStep((currentStep) => {
            if (currentStep === 'inhale') return 'hold';
            if (currentStep === 'hold') return 'exhale';
            return 'inhale';
          });
          
          return breathingStep === 'hold' ? 7 : 4;
        }
        return prev - 1;
      });
    }, 1000);
    
    // Clean up interval after 2 minutes
    setTimeout(() => {
      clearInterval(breathingInterval);
      setIsBreathingActive(false);
    }, 2 * 60 * 1000);
    
    return () => clearInterval(breathingInterval);
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
        <div className="flex items-center mb-4">
          <LifeBuoy className="h-8 w-8 text-red-600" />
          <h2 className="text-2xl font-bold text-gray-900 ml-2">Emergency Support</h2>
        </div>
        <p className="text-gray-700 mb-4">
          If you're experiencing a mental health emergency or having thoughts of harming yourself, please call one of these emergency numbers immediately:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border border-red-200 rounded-lg p-4 bg-white">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900 ml-2">Crisis Helpline</h3>
            </div>
            <p className="text-xl font-bold text-red-600 mt-2">988</p>
            <p className="text-sm text-gray-600">Available 24/7</p>
          </div>
          
          <div className="border border-red-200 rounded-lg p-4 bg-white">
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900 ml-2">Emergency Services</h3>
            </div>
            <p className="text-xl font-bold text-red-600 mt-2">911</p>
            <p className="text-sm text-gray-600">For immediate danger</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <div className="flex items-center mb-4">
          <Heart className="h-7 w-7 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-900 ml-2">Breathing Exercise</h2>
        </div>
        <p className="text-gray-700 mb-6">
          Guided breathing can help reduce anxiety and calm your mind. Follow along with this simple 4-7-8 breathing technique.
        </p>
        
        {isBreathingActive ? (
          <div className="text-center p-8 bg-purple-50 rounded-lg">
            <div className="mb-4">
              <p className="text-lg font-semibold text-gray-900">
                {breathingStep === 'inhale' && 'Breathe in slowly through your nose'}
                {breathingStep === 'hold' && 'Hold your breath'}
                {breathingStep === 'exhale' && 'Exhale slowly through your mouth'}
              </p>
            </div>
            
            <div className={`h-40 w-40 rounded-full mx-auto flex items-center justify-center transition-all duration-1000 ${
              breathingStep === 'inhale'
                ? 'bg-blue-100 scale-100'
                : breathingStep === 'hold'
                ? 'bg-purple-100 scale-110'
                : 'bg-teal-100 scale-90'
            }`}>
              <span className="text-4xl font-bold text-gray-800">{seconds}</span>
            </div>
            
            <button
              onClick={() => setIsBreathingActive(false)}
              className="mt-8 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Stop Exercise
            </button>
          </div>
        ) : (
          <button
            onClick={startBreathingExercise}
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Start Breathing Exercise
          </button>
        )}
      </div>
      
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center mb-4">
          <Clock className="h-7 w-7 text-purple-600" />
          <h2 className="text-xl font-bold text-gray-900 ml-2">Grounding Techniques</h2>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">5-4-3-2-1 Technique</h3>
          <p className="text-gray-700 mb-4">
            This technique uses your five senses to help you focus on the present moment and redirect your mind away from distressing thoughts.
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">5</span>
              <span>Name <strong>five things</strong> you can <strong>see</strong> around you</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">4</span>
              <span>Name <strong>four things</strong> you can <strong>touch</strong> or feel</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
              <span>Name <strong>three things</strong> you can <strong>hear</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
              <span>Name <strong>two things</strong> you can <strong>smell</strong></span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
              <span>Name <strong>one thing</strong> you can <strong>taste</strong></span>
            </li>
          </ul>
        </div>
        
        <button className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          View More Techniques
        </button>
      </div>
    </div>
  );
};

export default EmergencySupport;