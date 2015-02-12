module.exports = function(grunt) {
	grunt.registerMultiTask('repeat', 'repeat a task several times', function(){
		var _this = this;
		var options = _this.options();

		for (var i = 0; i < options.times; i++) {
			grunt.task.run(options.task);
		}
	});
}