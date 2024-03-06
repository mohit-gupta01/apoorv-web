import React, { Fragment } from 'react'
import NonTechnical from '../components/Team/NonTechnical';
import Technical from '../components/Team/Technical';

const Team = () => {
  return (
    <Fragment>
      <NonTechnical />
      <Technical />
    </Fragment>
  );
}

export default Team;