import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [isCounting, setIsCounting] = useState(true); // Automatically start counting

  // useEffect to start or stop the counter based on isCounting
  useEffect(() => {
    let intervalId;

    if (isCounting) {
      intervalId = setInterval(() => {
        setCounter(prevCount => prevCount + 1); // Increment counter
      }, 1000); // 1 second interval
    }

    // Cleanup the interval when isCounting becomes false or component unmounts
    return () => clearInterval(intervalId);
  }, [isCounting]); // Re-run the effect when isCounting changes

  const handleReset = () => {
    setCounter(0);
    setIsCounting(false); // Optional: Stops the counter after resetting
  };

  return (
    <div>
      <div className="container text-center mt-5">
        <h1 style={{
            color:"red",
            fontWeight:"bolder"
        }}>Automatic Counter</h1>
        <div className="mt-5">
            <h1 className='fw-bolder'>{counter}</h1>
        </div>
        <MDBBtn className='me-1' color='danger' onClick={() => setIsCounting(false)}>
          Stop
        </MDBBtn>
        <MDBBtn className='me-1' color='warning' onClick={handleReset}>
          Reset
        </MDBBtn>
      </div>
    </div>
  )
};

export default Counter;
