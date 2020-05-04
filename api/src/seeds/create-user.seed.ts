import { Factory, Seeder } from 'typeorm-seeding';
import { User } from '../cp/user/user.entity';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(User)({ roles: [] }).seedMany(1);
  }
}
