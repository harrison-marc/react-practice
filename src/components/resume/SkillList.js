/**
 * Created by marc on 9/25/17.
 */
import React from 'react';
import PropTypes from 'prop-types';


function SkillList(props) {
    const skills = props.skills;
    const type = props.type;


    const listItems = skills.filter(skill => skill.category === type).map((skill) =>
      <li key={skill.name}>{skill.name}</li>
    );
    return (
        <div>
            {listItems}
        </div>
    );
}

SkillList.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  skills: PropTypes.object
};
export default SkillList;
