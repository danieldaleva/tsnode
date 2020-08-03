import { User } from '@models/User'

it('it should be ok', () => {
  const user = new User()
  user.name = 'Daniel'

  expect(user.name).toEqual('Daniel')
})
