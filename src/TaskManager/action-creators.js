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
  },

  /**
   * @param  {int} taskId to be deleted
   */
  deleteTask(taskId) {
    return {
      type: constants.DELETE_TASK,
      taskId: taskId
    };
  }
};

export default taskActionCreators;
