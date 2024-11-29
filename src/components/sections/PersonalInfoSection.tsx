import { FormSection } from '../FormSection';
import { FormField } from '../FormField';

const DOCUMENT_TYPES = ['Cédula de Ciudadanía', 'Tarjeta de Identidad', 'Pasaporte', 'Cédula de Extranjería'];
const CIVIL_STATUS = ['Soltero/a', 'Casado/a', 'Divorciado/a', 'Viudo/a', 'Unión Libre'];
const GENDER = ['Masculino', 'Femenino', 'Otro', 'Prefiero no decir'];

interface PersonalInfoSectionProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function PersonalInfoSection({ formData, onChange }: PersonalInfoSectionProps) {
  return (
    <FormSection title="Información Personal">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="Primer Nombre" required>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Juan"
          />
        </FormField>

        <FormField label="Segundo Nombre">
          <input
            type="text"
            name="secondName"
            value={formData.secondName}
            onChange={onChange}
            className="form-input"
            placeholder="Carlos"
          />
        </FormField>

        <FormField label="Primer Apellido" required>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Pérez"
          />
        </FormField>

        <FormField label="Segundo Apellido">
          <input
            type="text"
            name="secondLastName"
            value={formData.secondLastName}
            onChange={onChange}
            className="form-input"
            placeholder="González"
          />
        </FormField>

        <FormField label="Fecha de Nacimiento" required helpText="DD/MM/AAAA">
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={onChange}
            className="form-input"
            required
          />
        </FormField>

        <FormField label="Tipo de Documento" required>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione tipo de documento</option>
            {DOCUMENT_TYPES.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Número de Documento" required>
          <input
            type="text"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={onChange}
            className="form-input"
            required
            placeholder="1234567890"
          />
        </FormField>

        <FormField label="Género" required>
          <select
            name="gender"
            value={formData.gender}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione género</option>
            {GENDER.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Estado Civil" required>
          <select
            name="civilStatus"
            value={formData.civilStatus}
            onChange={onChange}
            className="form-select"
            required
          >
            <option value="">Seleccione estado civil</option>
            {CIVIL_STATUS.map(status => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </FormField>

        <FormField label="Correo Electrónico" required helpText="ejemplo@correo.com">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="form-input"
            required
            placeholder="ejemplo@correo.com"
          />
        </FormField>

        <FormField label="Teléfono Fijo">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={onChange}
            className="form-input"
            placeholder="6011234567"
          />
        </FormField>

        <FormField label="Teléfono Celular" required helpText="10 dígitos">
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={onChange}
            className="form-input"
            required
            pattern="[0-9]{10}"
            placeholder="3001234567"
          />
        </FormField>
      </div>
    </FormSection>
  );
}