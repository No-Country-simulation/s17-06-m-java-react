import { ErrorMessage, useField } from 'formik';

const InputField = ({ ...props }) => {
    const [field] = useField(props);

    return (
        <div className='relative'>
            <input
                {...field}
                {...props}
                className="custom-field w-full"
            />
            <ErrorMessage name={field.name} component="p" className="custom-error-message" />
        </div>
    );
};

export default InputField;