type Maybe<T> = T | null;
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};










export type AdditionalEntityFields = {
  path?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
};

export type Book = {
  _id: Scalars['ID'],
  meta: Meta,
  recipes?: Maybe<Array<Maybe<Recipe>>>,
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Ingredient = {
  name: Scalars['String'],
  quantity: Scalars['String'],
  unit: Scalars['String'],
};

export type ListedBook = {
  _id: Scalars['ID'],
  name: Scalars['String'],
  favorites: Scalars['Int'],
  views: Scalars['Int'],
};

export type Meta = {
  name: Scalars['String'],
  favorites: Scalars['Int'],
  views: Scalars['Int'],
};

export type Mutation = {
  editRecipe?: Maybe<Recipe>,
};


export type MutationEditRecipeArgs = {
  recipeFragment?: Maybe<UpdateRecipe>
};

export type Query = {
  book?: Maybe<Book>,
  user?: Maybe<User>,
};


export type QueryBookArgs = {
  bookId?: Maybe<Scalars['String']>
};


export type QueryUserArgs = {
  userId?: Maybe<Scalars['String']>
};

export type Recipe = {
  id: Scalars['String'],
  name: Scalars['String'],
  ingredients?: Maybe<Array<Maybe<Ingredient>>>,
  directions?: Maybe<Scalars['String']>,
  waitingTime?: Maybe<Scalars['Int']>,
  activeTime?: Maybe<Scalars['Int']>,
  previewImage?: Maybe<Scalars['String']>,
  recipeSource?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  categories?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type UpdateIngredient = {
  name: Scalars['String'],
  quantity?: Maybe<Scalars['String']>,
  unit?: Maybe<Scalars['String']>,
};

export type UpdateRecipe = {
  bookId: Scalars['ID'],
  id: Scalars['String'],
  name?: Maybe<Scalars['String']>,
  ingredients?: Maybe<Array<Maybe<UpdateIngredient>>>,
  directions?: Maybe<Scalars['String']>,
  waitingTime?: Maybe<Scalars['Int']>,
  activeTime?: Maybe<Scalars['Int']>,
  previewImage?: Maybe<Scalars['String']>,
  recipeSource?: Maybe<Scalars['String']>,
  method?: Maybe<Scalars['String']>,
  categories?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type User = {
  _id: Scalars['ID'],
  username: Scalars['String'],
  books?: Maybe<Array<Maybe<ListedBook>>>,
};


import { GraphQLResolveInfo } from 'graphql';

export type ArrayOrIterable<T> = Array<T> | Iterable<T>;



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface ISubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | ISubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type CacheControlDirectiveResolver<Result, Parent, Context = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type UnionDirectiveResolver<Result, Parent, Context = any, Args = {   discriminatorField?: Maybe<Maybe<Scalars['String']>>,
  additionalFields?: Maybe<Maybe<ArrayOrIterable<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type AbstractEntityDirectiveResolver<Result, Parent, Context = any, Args = {   discriminatorField?: Maybe<Scalars['String']>,
  additionalFields?: Maybe<Maybe<ArrayOrIterable<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type EntityDirectiveResolver<Result, Parent, Context = any, Args = {   embedded?: Maybe<Maybe<Scalars['Boolean']>>,
  additionalFields?: Maybe<Maybe<ArrayOrIterable<Maybe<AdditionalEntityFields>>>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type ColumnDirectiveResolver<Result, Parent, Context = any, Args = {   overrideType?: Maybe<Maybe<Scalars['String']>> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IdDirectiveResolver<Result, Parent, Context = any, Args = {  }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type LinkDirectiveResolver<Result, Parent, Context = any, Args = {  }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type EmbeddedDirectiveResolver<Result, Parent, Context = any, Args = {  }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type MapDirectiveResolver<Result, Parent, Context = any, Args = {   path?: Maybe<Scalars['String']> }> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type BookResolvers<Context = any, ParentType = Book> = {
  _id?: Resolver<Scalars['ID'], ParentType, Context>,
  meta?: Resolver<Meta, ParentType, Context>,
  recipes?: Resolver<Maybe<ArrayOrIterable<Maybe<Recipe>>>, ParentType, Context>,
};

export type IngredientResolvers<Context = any, ParentType = Ingredient> = {
  name?: Resolver<Scalars['String'], ParentType, Context>,
  quantity?: Resolver<Scalars['String'], ParentType, Context>,
  unit?: Resolver<Scalars['String'], ParentType, Context>,
};

export type ListedBookResolvers<Context = any, ParentType = ListedBook> = {
  _id?: Resolver<Scalars['ID'], ParentType, Context>,
  name?: Resolver<Scalars['String'], ParentType, Context>,
  favorites?: Resolver<Scalars['Int'], ParentType, Context>,
  views?: Resolver<Scalars['Int'], ParentType, Context>,
};

export type MetaResolvers<Context = any, ParentType = Meta> = {
  name?: Resolver<Scalars['String'], ParentType, Context>,
  favorites?: Resolver<Scalars['Int'], ParentType, Context>,
  views?: Resolver<Scalars['Int'], ParentType, Context>,
};

export type MutationResolvers<Context = any, ParentType = Mutation> = {
  editRecipe?: Resolver<Maybe<Recipe>, ParentType, Context, MutationEditRecipeArgs>,
};

export type QueryResolvers<Context = any, ParentType = Query> = {
  book?: Resolver<Maybe<Book>, ParentType, Context, QueryBookArgs>,
  user?: Resolver<Maybe<User>, ParentType, Context, QueryUserArgs>,
};

export type RecipeResolvers<Context = any, ParentType = Recipe> = {
  id?: Resolver<Scalars['String'], ParentType, Context>,
  name?: Resolver<Scalars['String'], ParentType, Context>,
  ingredients?: Resolver<Maybe<ArrayOrIterable<Maybe<Ingredient>>>, ParentType, Context>,
  directions?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  waitingTime?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  activeTime?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>,
  previewImage?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  recipeSource?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  method?: Resolver<Maybe<Scalars['String']>, ParentType, Context>,
  categories?: Resolver<Maybe<ArrayOrIterable<Maybe<Scalars['String']>>>, ParentType, Context>,
};

export type UserResolvers<Context = any, ParentType = User> = {
  _id?: Resolver<Scalars['ID'], ParentType, Context>,
  username?: Resolver<Scalars['String'], ParentType, Context>,
  books?: Resolver<Maybe<ArrayOrIterable<Maybe<ListedBook>>>, ParentType, Context>,
};

export type IResolvers<Context = any> = {
  Book?: BookResolvers<Context>,
  Ingredient?: IngredientResolvers<Context>,
  ListedBook?: ListedBookResolvers<Context>,
  Meta?: MetaResolvers<Context>,
  Mutation?: MutationResolvers<Context>,
  Query?: QueryResolvers<Context>,
  Recipe?: RecipeResolvers<Context>,
  User?: UserResolvers<Context>,
};

export type IDirectiveResolvers<Context = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, Context>,
  union?: UnionDirectiveResolver<any, any, Context>,
  abstractEntity?: AbstractEntityDirectiveResolver<any, any, Context>,
  entity?: EntityDirectiveResolver<any, any, Context>,
  column?: ColumnDirectiveResolver<any, any, Context>,
  id?: IdDirectiveResolver<any, any, Context>,
  link?: LinkDirectiveResolver<any, any, Context>,
  embedded?: EmbeddedDirectiveResolver<any, any, Context>,
  map?: MapDirectiveResolver<any, any, Context>,
};

import { ObjectID } from 'mongodb';