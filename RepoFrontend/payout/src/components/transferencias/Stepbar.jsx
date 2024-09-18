import { Stepper, Step, Typography } from "@material-tailwind/react";
import MarkerStepper from "./MarkerStepper";

export const Stepbar = ({ currentStep, setCurrentStep, handleContinuar }) => {
  const steps = ["Destinatario", "Cuenta", "Monto", "Revisión", "Pago"]; // Definimos los pasos

  // Calcula la posición del MarkerStepper en función del paso activo
  const markerPosition = `${(currentStep / (steps.length - .93)) * 100}%`;
  const markerPositionMobile = `${(currentStep / (steps.length - .88)) * 100}%`;


  return (
    <div className="flex justify-between py-8 font-semibold w-[80vw] mx-[5vw] md:w-full md:mx-10">
      <Stepper
        activeStep={currentStep}
        className="flex w-[400px] md:w-full"
        lineClassName="border-b-[3px] w-full border-white/75 md:border-gris/25"
        activeLineClassName={`border-primario md:border-primario transition-all duration-700 ease-in-out`}
      >
        {steps.map((step, id) => (
          <>
            <div
              className="hidden md:block absolute transition-all duration-700 ease-in-out"
              style={{ left: markerPosition, top: '50%', 'z-index': '1' }}
            >
              <MarkerStepper className={'absolute -top-7 -right-1 -left-1'} />
            </div>
            <div
              className="md:hidden absolute transition-all duration-700"
              style={{ left: markerPositionMobile, top: '50%', 'z-index': '1' }}
            >
              <MarkerStepper className={'absolute -top-7 -right-1 -left-1'} />
            </div>
            <Step
              key={id}
              className={`h-3 w-3 ${currentStep >= id ? '!bg-primario !text-white' : '!bg-white !text-white'} 
              ${currentStep >= id ? 'md:!bg-primario !text-white' : 'md:!bg-gris/75 !text-white'} transition-all duration-1000 ease-in-out`}
              style={{ fontSize: '14px' }}
              activeClassName="!bg-primario"
              completedClassName="!bg-primario"
              onClick={(e) => {
                if (e.target.classList.contains('handle-step')) {
                  setCurrentStep(id);
                  if (id === currentStep + 1) {
                    handleContinuar();
                  };
                }
              }}
            >
              <div className="absolute -bottom-[2rem] flex w-full justify-center">

                <Typography variant='h6'
                  className={`text-white md:text-primario whitespace-nowrap text-md mb-2`}>{step}</Typography>
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