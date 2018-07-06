var app = angular.module("todoApp",[]);

app.controller("todoCtrl",function($scope){
  
  $scope.newTask = '';
  
  $scope.taskList = [{
    task: "New Task",
    status: false,
  }];
  
  $scope.completedTaskList = [{
    task: "Old Task",
    status: true,
  }]; 
  
  $scope.addTask = function(){
    if($scope.newTask === "" || $scope.newTask === undefined){
      return false;
    }
      $scope.taskList.push({task: $scope.newTask , status: false});
      $scope.newTask = '';
  };
  
//   Change Status of the tasks
  $scope.changeStatus = function(obj){
    obj.status = !obj.status;
  };
  
  $scope.taskDone = function(index){
    $scope.changeStatus($scope.taskList[index]);
    $scope.completedTaskList.push($scope.taskList[index]);
    $scope.taskList.splice(index,1); 
  };
  
  $scope.redoTask = function(index){
    $scope.changeStatus($scope.completedTaskList[index]);
    $scope.taskList.push($scope.completedTaskList[index]);
    $scope.completedTaskList.splice(index,1);
  };
});
