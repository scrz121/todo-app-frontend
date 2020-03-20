import { Button, Grid, withStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { bindActionCreators, compose } from 'redux';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/task';
import SearchBox from '../../components/SearchBox/index';
import TaskItem from '../../components/TaskItem/index';
import TaskList from '../../components/TaskList/index';
import { STATUSES } from '../../contants/index';
import TaskForm from '../TaskForm/index';
import styles from './styles';

class Taskboard extends Component {


  componentDidMount(){
    const {taskActions} = this.props;
    const {fetchListTask} = taskActions;
    fetchListTask();
  }

  loadData = ()=>{
    const {taskActions} = this.props;
    const {fetchListTask} = taskActions;
    fetchListTask();
  }

  handleOpenForm = ()=>{
    const {modalActions} = this.props;
    const {showModal,changeModalContent,changeModalTitle} = modalActions;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
  }
  showToast = ()=>{
    toast.success('thành công');
  }
  handleFilter = (event)=>{
    const {value} = event.target;
    const {taskActions} = this.props;
    const {filterTask} = taskActions;
    filterTask(value);
  }
  render() {
    let { classes } = this.props;
    return (
      <div className={classes.taskboard}>
        <Button onClick={this.handleOpenForm} variant="contained" color="primary" className={classes.button} >
          <AddIcon />
          Thêm mới công việc
        </Button>
        <Button onClick={this.loadData} variant="contained" color="primary" className={classes.button} >
          Load Data
        </Button>
        {this.renderTextSearch()}
        {this.renderTaskList()}
      </div>
    );
  }
  renderTextSearch = ()=>{
    let xhtml = null;
    xhtml = (
      <SearchBox handleChange={this.handleFilter} />
    );
    return xhtml
  }
  renderTaskList = () => {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {
          STATUSES.map((status, index) => {
            return (
              <TaskList key={index} status={status}>
                {this.renderTaskItem(status)}
              </TaskList>
            );
          })
        }
      </Grid>
    );
    return xhtml;
  }
  renderTaskItem = (status)=>{
    let xhtml = null;
    let {listTask} = this.props;
    let taskFilter = listTask.filter(task => task.status === status.value);
    xhtml = taskFilter.map((task,index)=>{
      return <TaskItem task={task} key={index}/>
    });
    return xhtml;
  }
}

const mapStateToProps = (state)=>{
  return {
    listTask : state.tasks.listTask
  }
}
const mapDispatchToProps = (dispatch,props)=>{
  return {
    taskActions : bindActionCreators(taskActions,dispatch),
    modalActions : bindActionCreators(modalActions,dispatch)
  }
}

const withConnect = connect(mapStateToProps,mapDispatchToProps);

// export default withStyles(styles)(connect(mapStateToProps,mapDispatchToProps)(Taskboard));

export default compose(
  withStyles(styles),
  withConnect
)(Taskboard);
