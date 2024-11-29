import { FormSection } from '../FormSection';
import { FormField } from '../FormField';

interface AddressSectionProps {
  formData: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export function AddressSection({ formData, onChange }: AddressSectionProps) {
  return (
    <FormSection title="Dirección Residencial">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField label="País" required>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Colombia"
          />
        </FormField>

        <FormField label="Departamento" required>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Cundinamarca"
          />
        </FormField>

        <FormField label="Ciudad" required>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Bogotá"
          />
        </FormField>

        <FormField label="Barrio" required>
          <input
            type="text"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Chapinero"
          />
        </FormField>

        <FormField label="Dirección" required helpText="Ejemplo: Calle 100 #15-20">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={onChange}
            className="form-input"
            required
            placeholder="Calle 100 #15-20"
          />
        </FormField>

        <FormField label="Código Postal">
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={onChange}
            className="form-input"
            placeholder="110111"
          />
        </FormField>
      </div>
    </FormSection>
  );
}