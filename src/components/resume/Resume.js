/**
 * Created by marc on 9/23/17.
 */
import React from 'react';
import Skill from '../resume/Skill';

const Resume = function(props) {
  return <div>
    <p>The logged in user is: {props.username}</p>
    <Skill/>

  </div>;
};

export default Resume;
