import constants from './constants';

const taskActionCreators = {
  /**
   * @param  {object} task to be added
   */
  addTask(task) {
    return {
      type: constants.ADD_TASK,
      task: task
    };
  },

  /**
   * @param  {object} task to be updated
   */
  updateTask(task) {
    return {
      type: constants.UPDATE_TASK,
      task: task
    };
  }
};

export default taskActionCreators;
