import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { join } from 'path';
import { loadEnvConfig } from 'next/dist/lib/load-env-config';

loadEnvConfig(join(__dirname, './../'));

Enzyme.configure({ adapter: new Adapter() });
