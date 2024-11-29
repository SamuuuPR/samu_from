import { useState } from 'react';
import { FormSection } from './FormSection';
import { FormField } from './FormField';
import { PersonalInfoSection } from './sections/PersonalInfoSection';
import { AddressSection } from './sections/AddressSection';
import { PersonalSurveySection } from './sections/PersonalSurveySection';
import { CareerSection } from './sections/CareerSection';

export function EnrollmentForm() {
  const [formData, setFormData] = useState({
    // Career Information
    career: '',
    
    // Personal Information
    firstName: '',
    secondName: '',
    lastName: '',
    secondLastName: '',
    birthDate: '',
    documentType: '',
    documentNumber: '',
    gender: '',
    civilStatus: '',
    nationality: '',
    email: '',
    phone: '',
    mobile: '',
    
    // Address Information
    country: 'Colombia',
    state: '',
    city: '',
    address: '',
    neighborhood: '',
    postalCode: '',
    
    // Personal Survey
    disability: 'none',
    otherDisability: '',
    employment: 'unemployed',
    children: '0',
    ethnicity: 'none',
    income: '',
    education: '',
    livingArrangement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form validation would go here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <CareerSection formData={formData} onChange={handleChange} />
      <PersonalInfoSection formData={formData} onChange={handleChange} />
      <AddressSection formData={formData} onChange={handleChange} />
      <PersonalSurveySection formData={formData} onChange={handleChange} />

      <div className="mt-8 flex justify-end space-x-4">
        <button
          type="button"
          className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 
                     hover:bg-gray-50 focus:outline-none focus:ring-2 
                     focus:ring-offset-2 focus:ring-primary"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2 border border-transparent rounded-md shadow-sm 
                     text-white bg-primary hover:bg-primary-dark 
                     focus:outline-none focus:ring-2 focus:ring-offset-2 
                     focus:ring-primary"
        >
          Enviar Inscripción
        </button>
      </div>
    </form>
  );
}