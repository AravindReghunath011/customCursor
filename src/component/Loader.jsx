import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Loader = () => {
  const loaderRef = useRef(null);

  useEffect(() => {
    const elements = loaderRef.current.querySelectorAll('.animation-element');
    const tl = gsap.timeline({ delay: 2 }); // Add a 2-second delay before starting the animations

    elements.forEach((element, index) => {
      tl.to('.main', {
        marginTop: `-=${110}`, // Move up by 110px for each element
        duration: 2,
      });
    });

    // Add the sub-pointer animations at the same time at the end of the timeline
    tl.to(['.sub-pointer1', '.sub-pointer2'], {
      y: -110,
      duration: 2,
    });

  }, []);

  return (
    <div className="loader-main" ref={loaderRef}>
      <div className="loader-container">
        <h1 style={{ height: '110px' }}>WE ARE&nbsp;</h1>
        <div style={{ overflow: 'hidden', height: '110px' }}>
          <div className="main">
            <h1 className="pointer animation-element pointer1">DESIGNERS</h1>
            <h1 className="pointer animation-element pointer2">DEVELOPERS</h1>
            <h1 className="pointer animation-element pointer5">INNOVATORS</h1>
            <h1 className="pointer animation-element pointer6">STRATEGISTS</h1>
            <h1 className="pointer animation-element pointer7">CONSULTANTS</h1>
            <div style={{ display: 'flex', backgroundColor: '#0000' }} className="pointer3">
              <h1 className="pointer">EVERYTHIN</h1>
              <div style={{ overflow: 'hidden', height: '110px' }}>
                <h1 className="pointer sub-pointer1">G</h1>
                <h1 className="pointer sub-pointer2">K</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
