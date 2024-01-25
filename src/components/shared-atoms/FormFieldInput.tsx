import { cn } from '@/lib/utils';
import { InputHTMLAttributes } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

type TInputProps<T extends FieldValues> = Required<
  Pick<
    InputHTMLAttributes<HTMLInputElement>,
    'placeholder' | 'type' | 'aria-label'
  >
> &
  InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    errorMsg?: string;
  };

export const FormFieldInput = <T extends FieldValues>({
  className,
  id,
  register,
  errorMsg,
  ...attributes
}: TInputProps<T>) => {
  return (
    <>
      <input
        id={id}
        aria-describedby={`${id}ErrorMsg`}
        aria-invalid={errorMsg ? 'true' : 'false'}
        {...register(id)}
        {...attributes}
        className={cn(
          'w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline',
          className,
        )}
      />
      {errorMsg && (
        <p id={`${id}ErrorMsg`} role='status' className='text-xs text-red-500'>
          {errorMsg}
        </p>
      )}
    </>
  );
};
