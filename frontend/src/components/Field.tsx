import React from 'react';
import { useFormContext } from 'react-hook-form';

interface FieldProps {
  name: string;
  label: string;
  type?: string;
}

const Field: React.FC<FieldProps> = ({ name, label, type = "text" }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div>
      <label>{label}</label>
      <input {...register(name)} type={type} />
      {errors[name] && <span>{(errors[name]?.message as string)}</span>}
    </div>
  );
};

export default Field;
