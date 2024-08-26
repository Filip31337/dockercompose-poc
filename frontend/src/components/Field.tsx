import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert } from '@/components/ui/alert'

interface FieldProps {
  name: string;
  label: string;
  type?: string;
}

const Field: React.FC<FieldProps> = ({ name, label, type = "text" }) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="mb-4">
      <Label htmlFor={name} className="block text-sm font-medium text-gray-700">{label}</Label>
      <Input {...register(name)} type={type} id={name} className="mt-1 block w-full" />
      {errors[name] && <Alert variant="danger" className="mt-1">{errors[name]?.message as string}</Alert>}
    </div>
  );
};

export default Field;
