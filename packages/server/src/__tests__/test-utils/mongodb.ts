import { MongoClient, Db } from 'mongodb';

export const startDbConnection = async (): Promise<MongoClient> => {
  const dbUri = process.env.MONGO_URL;
  if (!dbUri) throw new Error('Cannot find env var DATABASE_URI');
  return MongoClient.connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export const getTestDb = async (connection: MongoClient): Promise<Db> => {
  return connection.db('jest');
};

export const closeDbConnection = async (connection: MongoClient): Promise<void> => {
  return connection.close();
};
