const inquirer = require('inquirer')

var questions = [{
  type: 'input',
  name: 'usernameCheck',
  message: "Hi there, what's your username?",
}]

inquirer.prompt(questions).then(answers => {
  console.log(`Thank you, ${answers['usernameCheck']}, your message has been received.`)
})
