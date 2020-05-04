import * as Faker from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../cp/user/user.entity';

define(User, (faker: typeof Faker) => {
  const gender = faker.random.number(1);
  const email = faker.internet.email();
  const firstName = faker.name.firstName(gender);
  const lastName = faker.name.lastName(gender);

  const user = new User();
  user.email = email;
  user.firstName = firstName;
  user.lastName = lastName;
  // user.password = faker.random.word()
  user.password = 'password';
  return user;
});
