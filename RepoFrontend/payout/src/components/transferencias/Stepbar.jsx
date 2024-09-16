import { Stepper, Step, Typography } from "@material-tailwind/react";
import MarkerStepper from "./MarkerStepper";

export const Stepbar = ({ currentStep, setCurrentStep, handleContinuar }) => {
  const steps = ["Destinatario", "Monto", "Revisión", "Pago"]; // Definimos los pasos

  // Calcula la posición del MarkerStepper en función del paso activo
  const markerPosition = `${(currentStep * 98.3) / (steps.length - 1)}%`; // Posición basada en el número de pasos

  return (
    <div className="flex w-full py-4 px-20 font-semibold relative">
      <Stepper
        activeStep={currentStep}
        className="flex"
        lineClassName="border-b-[3px] w-full border-gris/50"
        activeLineClassName={`border-primario transition-all duration-700 ease-in-out`}
      >
        {steps.map((step, id) => (
          <>
            <div
              className="absolute transition-all duration-700"
              style={{ left: markerPosition }}
            >
              <MarkerStepper className={'absolute -top-7 -right-1 -left-1'} />
            </div>
            <Step
              key={id}
              className={`h-3 w-3 cursor-pointer ${currentStep >= id ? '!bg-primario !text-primario' : 'bg-gris text-gris/75'}`}
              activeClassName="!bg-primario !text-primario"
              completedClassName="!bg-primario !text-primario"
              onClick={() => {
                setCurrentStep(id);
                if (id === currentStep + 1) {
                  handleContinuar();
                }
              }}
            >
              <div className="absolute -bottom-[2rem] flex w-full justify-center">
                <Typography variant='h6' 
                className={currentStep >= id ? '!text-primario' : 'text-gris'}>{step}</Typography>
              </div>
            </Step>
          </>
        ))
        }
      </Stepper >
    </div >
  );
}

export default Stepbar;