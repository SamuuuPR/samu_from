import { FormSection } from '../FormSection';
import { FormField } from '../FormField';

const CAREERS = [
  'ADMINISTRACIÓN DE EMPRESAS',
  'BACTERIOLOGÍA',
  'CONTADURÍA PÚBLICA',
  'DERECHO',
  'ENFERMERÍA',
  'INGENIERÍA DE SISTEMAS',
  'INSTRUMENTACIÓN QUIRÚRGICA | CARTAGENA',
  'LICENCIATURA EN EDUCACIÓN INFANTIL',
  'MEDICINA',
  'ODONTOLOGÍA',
  'TECNOLOGÍA EN ATENCIÓN PREHOSPITALARIA',
  'TECNOLOGÍA EN ESTÉTICA Y COSMETOLOGÍA',
  'TECNOLOGÍA EN MECÁNICA DENTAL',
  'TRABAJO SOCIAL'
];

interface CareerSectionProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function CareerSection({ formData, onChange }: CareerSectionProps) {
  return (
    <FormSection title="Selección de Carrera">
      <FormField 
        label="Carrera" 
        required 
        helpText="Seleccione la carrera en la que desea inscribirse"
      >
        <select
          name="career"
          value={formData.career}
          onChange={onChange}
          className="form-select"
          required
        >
          <option value="">Seleccione una carrera</option>
          {CAREERS.map(career => (
            <option key={career} value={career}>{career}</option>
          ))}
        </select>
      </FormField>
    </FormSection>
  );
}