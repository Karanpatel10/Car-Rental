import React from 'react';
import styled from 'styled-components';


const Loading= ()=>{
  
return(
    <StyledWrapper>
      <div className='flex items-center justify-center h-screen'>
        <div className="loader">
          <div className="dot" />
        </div>
        <div className="loader">
          <div className="dot" />
        </div>
        <div className="loader">
          <div className="dot" />
        </div>
        <div className="loader">
          <div className="dot" />
        </div>
        <div className="loader">
          <div className="dot" />
        </div>
        <div className="loader">
          <div className="dot" />
        </div>
      </div>
      
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loader {
    height: 1px;
    width: 1px;
    position: absolute;
    animation: rotate0234 3.5s linear infinite;
  }

  .loader .dot {
    top: 50px;
    height: 10px;
    width: 10px;
    background: #0a4cc7;
    border-radius: 50%;
    position: relative;
  }

  .text {
    position: relative;
    top: 7rem;
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    font-weight: 500;
    color: #0a4cc7;
  }

  @keyframes rotate0234 {
    30% {
      transform: rotate(220deg);
    }

    40% {
      transform: rotate(450deg);
      opacity: 1;
    }

    75% {
      transform: rotate(720deg);
      opacity: 1;
    }

    76% {
      opacity: 0;
    }

    100% {
      opacity: 0;
      transform: rotate(0deg);
    }
  }

  .loader:nth-child(1) {
    animation-delay: 0.15s;
  }

  .loader:nth-child(2) {
    animation-delay: 0.3s;
  }

  .loader:nth-child(3) {
    animation-delay: 0.45s;
  }

  .loader:nth-child(4) {
    animation-delay: 0.6s;
  }

  .loader:nth-child(5) {
    animation-delay: 0.75s;
  }

  .loader:nth-child(6) {
    animation-delay: 0.9s;
  }`;



export default  Loading