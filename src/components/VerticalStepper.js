import React from 'react';

const VerticalStepper = ({steps = []}) => {
    return (
      <div className="stepper-container spacing-medium">
        <div>
          {steps.map((step,idx) => (
            <div>
              <div>
                <div className="step-label">
                  <h2 className='primary-text'>{step.label}</h2>
                </div>
              </div>
              <div  className={idx % 2 == 0 ? 'flex-just-start' : 'flex-just-end'}>
                <div style={idx % 2 == 0 ? {borderRight: '1px solid #5ce1e6', width: '50%'} : {borderLeft: '1px solid #5ce1e6', width: '50%'}} >
                  {step.subSteps.map((sub,idx) => (
                    <p key={idx}>&nbsp;{sub.description}</p>
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