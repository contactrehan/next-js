const contentful = require('contentful')

const client = contentful.createClient({
  space: '1rspwtrpd4kg',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'MQy6UW345LOjYOtwu08k5MGmLX9oAaaUOJSSdIjXdaE'
})
export {client}