import { User } from '../models/User';

export default {
  render(user: User): Omit<User, 'password'> {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      created_at: user.created_at,
      updated_at: user.updated_at,
    };
  },

  renderMany(users: User[]): Array<Omit<User, 'password'>> {
    return users.map(user => this.render(user));
  },
};
