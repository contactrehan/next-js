import { createClient } from 'contentful'

 export const client = createClient({
  space: '1rspwtrpd4kg',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'MQy6UW345LOjYOtwu08k5MGmLX9oAaaUOJSSdIjXdaE'
})

