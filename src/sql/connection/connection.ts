import {
  getConnection,
  Connection,
  getConnectionManager,
  EntitySchema,
} from 'typeorm/browser';
import { Hello } from '../entities/Hello';

const isProd = process.env.ENV === 'production';
const defaultConnectionName = 'sqlJsDb';
export const defaultEntities = [Hello];

// either copy the file sql-wasm.wasm from sql.js/dist
// or define locateFile function to retrieve it from a cdn
const locateFile = (filename: string) => {
  const url = `https://cdnjs.cloudflare.com/ajax/libs/sql.js/${process.env.SQL_JS_VERSION}/dist/${filename}`;
  return url;
};

interface DbNameOption {
  name?: string;
}

interface DbConnectionOption extends DbNameOption {
  entities?: (Function | string | EntitySchema<any>)[];
}

interface DbLoadingOption extends DbConnectionOption {
  database: Uint8Array;
}

export const connectDb = async ({
  name = defaultConnectionName,
  entities = defaultEntities,
}: DbConnectionOption) => {
  let connection: Connection;
  try {
    connection = getConnection(name);
  } catch (error) {
    connection = getConnectionManager().create({
      type: 'sqljs',
      sqlJsConfig: { locateFile },
      name,
      location: name,
      autoSave: true,
      entities,
      useLocalForage: true,
      logging: !isProd && ['query', 'schema'],
    });
  }
  if (!connection.isConnected) {
    await connection.connect();
  }
  return connection;
};

export const closeDb = ({ name = defaultConnectionName }: DbNameOption) => {
  const connection = getConnection(name);
  return connection.close();
};

export const removeDb = async ({
  name = defaultConnectionName,
}: DbNameOption) => {
  await closeDb({ name });
  return window.localforage?.removeItem(name);
};

export const loadDbFromFile = async ({
  name = defaultConnectionName,
  entities = defaultEntities,
  database,
}: DbLoadingOption) => {
  const connection = await connectDb({ name, entities });
  await connection.sqljsManager.loadDatabase(database);
  return connection;
};

export const createDbUrl = async ({
  name = defaultConnectionName,
}: DbNameOption) => {
  const connection = getConnection(name);
  const arrayBuffer = connection.sqljsManager.exportDatabase();
  const blob = new Blob([arrayBuffer], {
    type: 'application/octet-stream',
  });
  const dbUrl = URL.createObjectURL(blob);

  return dbUrl;
};
