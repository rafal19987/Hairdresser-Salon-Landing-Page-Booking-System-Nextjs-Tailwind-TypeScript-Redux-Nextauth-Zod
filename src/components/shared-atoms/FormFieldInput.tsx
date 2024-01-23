import { cn } from '@/lib/utils';
import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import {
  FieldErrors,
  FieldValues,
  Path,
  UseFormRegister,
} from 'react-hook-form';

type TInputProps<T extends FieldValues> =
  InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    type: HTMLInputTypeAttribute;
    id: Path<T>;
    placeholder: string;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    ariaLabel: string;
  };

export const FormFieldInput = <T extends FieldValues>({
  className,
  type,
  id,
  register,
  errors,
  ariaLabel,
  ...attributes
}: TInputProps<T>) => {
  return (
    <>
      <input
        type={type}
        id={id}
        aria-label={ariaLabel}
        aria-describedby={`${id}ErrorMsg}`}
        aria-invalid={errors[id] ? 'true' : 'false'}
        {...register(id)}
        {...attributes}
        className={cn(
          'w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline',
          className,
        )}
      />
      {errors[id] && (
        <p id={`${id}ErrorMsg`} role='status' className='text-xs text-red-500'>
          {errors[id]?.message as string}
        </p>
      )}
    </>
  );
};
