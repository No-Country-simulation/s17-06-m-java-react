import { ErrorMessage, useField } from 'formik';
import { useState } from 'react';

const PasswordField = ({ label, ...props }) => {
  const [field] = useField(props);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <input
        {...field}
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="custom-field w-full"
      />
      <button
        type="button"
        onClick={togglePasswordVisibility}
        className="text-gray-500 absolute top-0 right-0 flex items-center px-3 py-3"
      >
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M3.53 2.47a.75.75 0 00-1.06 1.06l18 18a.75.75 0 101.06-1.06l-18-18z" />
            <path
              fillRule="evenodd"
              d="M12.454 16.697a.75.75 0 00-.708 1.07c.8 1.603.41 3.623-.992 4.933a3.75 3.75 0 01-4.928-.992.75.75 0 00-1.071.707c.4 1.4.95 2.639 1.663 3.685a5.25 5.25 0 007.586.72 5.25 5.25 0 00.721-7.586 9.049 9.049 0 011.664-3.684.75.75 0 00-1.071-.707z"
              clipRule="evenodd"
            />
            <path d="M12 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
            <path
              fillRule="evenodd"
              d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </button>
      <ErrorMessage name={field.name} component="p" className="custom-error-message" />
    </div>
  );
};

export default PasswordField;