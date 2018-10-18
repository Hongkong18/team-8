# TEAM 8 

## DB - Mongodb
- https://www.npmjs.com/package/mongodb
## Backend - Nodejs in JS and Routing with Express
- https://www.tutorialspoint.com/nodejs/nodejs_first_application.htm
- https://scotch.io/tutorials/learn-to-use-the-new-router-in-expressjs-4
## Frontend - React in TypeScript
- https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter


# Run

## Mongodb

- Change db dir path

` mongod --dbpath /path/to/dir `


- For viewing data
Download [Studio 3T or Robo 3T](https://robomongo.org/)


## Back-End

- ` cd backend `
- ` node main.js `

## Front-End

React and TypeScript

- ` cd my-app`
- ` npm run start `

##Get python in NodeJS 
Easiest way I know of is to use "child_process" package which comes packaged with node.

Then you can do something like:

const spawn = require("child_process").spawn;
const pythonProcess = spawn('python',["path/to/script.py", arg1, arg2, ...]);

Then all you have to do is make sure that you import sys in your python script, and then you can access arg1 using sys.argv[1], arg2 using sys.argv[2], and so on.

To send data back to node just do the following in the python script:

print(dataToSendBack)
sys.stdout.flush()

And then node can listen for data using:

pythonProcess.stdout.on('data', (data) => {
    // Do something with the data returned from python script
});

