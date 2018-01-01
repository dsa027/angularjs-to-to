angular
   .module('to-do', [])
   .controller('ToDoController', ToDoController)

  function ToDoController() {
    var vm = this
    vm.tasks = ['Walk the cat', 'Eat second breakfast', 'Watch Rocky cutscenes on youtube since too tired to workout']

    vm.createTask = () => {
      if (!this.taskName) return

      vm.tasks.push(this.taskName)
      vm.taskName = ''
    }

    vm.deleteTask = (index) => {
      vm.tasks.splice(index, 1)
    }
  }
