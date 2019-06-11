import React from 'react';
import PropTypes from 'prop-types';
import SubTask from '../SubTask/SubTask.jsx'
class Task extends React.Component {
    renderSubTasks = (subTasks) =>
        subTasks.map(subTask =>
            <SubTask
                title={subTask.title}
                description={subTask.description}
                key={Date.now()+Math.random()}
                 />)


    render() {
        return (
            <div className="task">
                <h2 className="title">
                    {this.props.title}
                </h2>
                {this.renderSubTasks(this.props.subTasks)}
            </div>
        );
    }
}

Task.propTypes = {
    title: PropTypes.string,
    subTasks: PropTypes.array
};
export default Task;