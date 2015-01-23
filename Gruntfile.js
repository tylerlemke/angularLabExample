module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Use nodemon to run server in debug mode with an initial breakpoint
        nodemon: {
            dev: {
                script: 'app.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');

    grunt.registerTask('serve', function(){
        return grunt.task.run(['nodemon']);
    });
};