import * as bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt();
  return bcrypt.hash(password, salt);
}
