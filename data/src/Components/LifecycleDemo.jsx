import React, { useEffect, useState } from 'react';

function LifecycleDemo() {
    const [random, setRandom] = useState(Math.random());
    const reRender = () => setRandom(Math.random());
    const [mounted, setMounted] = useState(true);
    const toggle = () => setMounted(!mounted);



  useEffect(() => {
  
    console.log('render!');

   
    return () => console.log('unmounting...');
  })

  return (
    <>
      <button onClick={reRender}>Re-render</button>
      <button onClick={toggle}>Show/Hide LifecycleDemo</button>
      {mounted && <LifecycleDemo/>}
    </>
  );
}

export default LifecycleDemo
