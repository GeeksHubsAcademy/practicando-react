import React from 'react';
import PropTypes from 'prop-types';
import './SubTask.css'
const SubTask=props=> {
    return (
        <div className="subtask">
                    <h4>{props.title}</h4>
                    <p> {props.description}</p>
        </div>
    );
}

SubTask.propTypes = {
  title: PropTypes.string,
  description:PropTypes.string
};
export default SubTask;