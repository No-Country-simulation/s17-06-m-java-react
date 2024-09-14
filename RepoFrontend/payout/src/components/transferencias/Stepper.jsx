import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Stepper = ({ currentStep }) => { 
  const location = useLocation();

  const steps = [
    { id: 1, label: 'Destinatario', path: '/transferencia/destinatario' },
    { id: 2, label: 'Datos Bancarios', path: '/transferencia/datos-bancarios' },
    { id: 3, label: 'Monto', path: '/transferencia/monto' },
    { id: 4, label: 'Revisión', path: '/transferencia/revision' },
  ];

  const isActive = (stepId) => {
    if (currentStep === stepId) {
      return true;
    }
    if (currentStep > stepId && location.pathname.includes(steps[stepId - 1].path)) {
      return true;
    }
    return false;
  };

  return (
    <div className="stepper flex justify-center items-center mb-4">
      <ul className="steps flex list-none p-0 m-0 gap-4">
        {steps.map((step) => (
          <li
            key={step.id}
            className={`step px-4 py-2 border-b-2 
              ${isActive(step.id) ? 'border-primario text-primario' : 'border-gray-300 text-gray-500'}
            `}
          >
            <NavLink to={step.path}>
              {step.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stepper;