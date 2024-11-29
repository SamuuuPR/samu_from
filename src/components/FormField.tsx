interface FormFieldProps {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  helpText?: string;
}

export function FormField({ label, required, children, helpText }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-1">
      <label className="flex items-center text-sm font-medium text-gray-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
      {helpText && (
        <p className="text-sm text-gray-500">{helpText}</p>
      )}
    </div>
  );
}