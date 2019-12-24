declare module 'apollo-datasource-mongodb' {
  export class MongoDataSource {
    constructor(collection?: any) {
      return collection;
    }

    new(collection: any): any;

    findOneById(id: string): any;

    collection: any;

    initialize?(config: DataSourceConfig<TContext>): void;
  }
}
