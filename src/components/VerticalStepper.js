import React from 'react';

const VerticalStepper = ({steps = []}) => {
    return (
      <div className="stepper-container spacing-medium">
        <div>
          {steps.map((step,index) => (
            <div>
              <div>
                <div className="step-label">
                  {/* <h2 className='secondary-text'>{step.label}</h2> */}
                </div>
              </div>
              <div  className={index % 2 == 0 ? 'flex-just-start' : 'flex-just-end'}>
                <div style={{width: '50%'}} >
                  {step.subSteps.map((sub,idx) => (
                    <p className={index % 2 == 0 ? 'road-padding-right' : 'road-padding-left'} key={idx}><b>&nbsp;{sub.description}</b></p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default VerticalStepper;