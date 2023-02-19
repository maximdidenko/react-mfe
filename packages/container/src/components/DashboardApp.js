import React, { useRef, useEffect } from 'react';
import { mount as mountDashboard } from 'dashboard/DashboardApp';
import { useHistory } from 'react-router-dom';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mountDashboard(ref.current);
  }, []);

  return <div ref={ref} />;
};
