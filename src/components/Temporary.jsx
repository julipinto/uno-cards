import React, { useEffect, useState } from 'react';

const Temporary = ({ children, time }) => {
  // the alert is displayed by default
  const [alert, setAlert] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for ${time} seconds
    setTimeout(() => {
      setAlert(false);
    }, time);
  }, []);

  return <>{alert ? children : null}</>;
};

export default Temporary;
