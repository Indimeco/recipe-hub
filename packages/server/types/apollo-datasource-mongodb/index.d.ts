declare module 'apollo-datasource-mongodb' {
  export class MongoDataSource {
    constructor(collection?: any) {
      return collection;
    }

    new(collection: any): any;

    findOneById(id: string): any;

    initialize?(config: DataSourceConfig<TContext>): void;
  }
}
