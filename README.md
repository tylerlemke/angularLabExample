# nodeLabExample
Playing with node and express a bit. This setup might be used to teach students about nodejs and routing.


#Setup:
Install dependencies with npm and bower by running:
```
npm install && bower install
```
> npm is generally used to manage server and development dependencies, whereas bower is generally used to manage client side dependencies

#Running Your Project:
To serve your project, run:
```
grunt serve
``` 
> Grunt is a task runner that helps automate all that stuff you had to type during the last lab. Right now, ``grunt serve`` is set up to run nodemon, which will automatically
restart your node server whenever it detects changes to your project.

Served projects should be available on localhost:9000 by default.

>If you get an error something along the lines of ``bash: grunt: command not found`` you probably don't have grunt installed correctly. Please let a professor or DM know about this. 

#Testing Your Project

The ``karma.conf.js`` file should already exist if you cloned the repo correctly.
To run your tests, run:
```
grunt test
```
> If this doesn't work, please let a professor or DM know about it.

##Resoures
#####Getting started with grunt:
http://gruntjs.com/getting-started

#####Tutorial for testing with jasmine
http://jasmine.github.io/2.0/introduction.html

#####Handling POST requests in Express:
http://codeforgeek.com/2014/09/handle-get-post-request-express-4/

#####Security concerns for handling POST requests in Express:
https://groups.google.com/forum/#!topic/express-js/iP2VyhkypHo

