import { FormSection } from '../FormSection';
import { FormField } from '../FormField';

const DISABILITIES = [
  'Ninguna',
  'Discapacidad motriz',
  'Discapacidad visual',
  'Discapacidad auditiva',
  'Discapacidad cognitiva',
  'Otra'
];

const EMPLOYMENT_STATUS = [
  'No estoy trabajando',
  'Sí, empleado',
  'Sí, independiente'
];

const ETHNICITY = [
  'Ninguna',
  'Indígenas',
  'Afrocolombianos',
  'Raizales',
  'Pueblo ROM o Gitano'
];

interface PersonalSurveySectionProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function PersonalSurveySection({ formData, onChange }: PersonalSurveySectionProps) {
  return (
    <FormSection title="Encuesta Personal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="¿Cuenta con alguna discapacidad?" required>
          <select
            name="disability"
            value={formData.disability}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione una opción</option>
            {DISABILITIES.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>

        {formData.disability === 'Otra' && (
          <FormField label="Especifique su discapacidad" required>
            <input
              type="text"
              name="otherDisability"
              value={formData.otherDisability}
              onChange={onChange}
              className="form-input"
              required
            />
          </FormField>
        )}

        <FormField label="¿Usted trabaja actualmente?" required>
          <select
            name="employment"
            value={formData.employment}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione una opción</option>
            {EMPLOYMENT_STATUS.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>

        <FormField label="¿Tiene hijos?" required>
          <select
            name="children"
            value={formData.children}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="0">No tengo</option>
            <option value="1">1 hijo</option>
            <option value="2">2 hijos</option>
            <option value="3">3 hijos</option>
            <option value="4">4 hijos</option>
            <option value="5+">Más de 4 hijos</option>
          </select>
        </FormField>

        <FormField label="¿Se reconoce como parte de alguna de las siguientes poblaciones?" required>
          <select
            name="ethnicity"
            value={formData.ethnicity}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione una opción</option>
            {ETHNICITY.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>
      </div>
    </FormSection>
  );
}