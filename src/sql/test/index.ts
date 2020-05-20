import { connectDb } from '../connection/connection';
import { Hello } from '../entities/Hello';

const main = async () => {
  const connection = await connectDb();
  await connection.synchronize(false);
  const hello = new Hello();
  hello.a = 10;
  hello.b = 'Hello World';

  const helloRepository = connection.getRepository(Hello);
  await helloRepository.save(hello);

  return 'yes';
};

export default main;
