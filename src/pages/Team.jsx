import React, { Fragment, useEffect } from 'react'
import NonTechnical from '../components/Team/NonTechnical';

const Team = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <NonTechnical />
    </Fragment>
  );
}

export default Team;