module.exports = function(grunt) {
	grunt.registerMultiTask('repeat', 'repeat a task several times', function(){
		var _this = this;
		var options = _this.options();
		
		// Set the tasks based on the config format
		var tasks = _this.data.tasks || options.tasks || _this.data;

		if (!tasks) {
			tasks = [];
		} else if (typeof tasks != 'object' || !tasks.length) {
			tasks = [tasks];
		}

		for (var i = 0; i < options.times; i++) {
			tasks.forEach(function (task) {
				grunt.task.run(task);
			});
		}
	});
}