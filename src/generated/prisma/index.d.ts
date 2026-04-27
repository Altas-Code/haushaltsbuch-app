
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RecurringItem
 * 
 */
export type RecurringItem = $Result.DefaultSelection<Prisma.$RecurringItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RecurringInterval: {
  monthly: 'monthly',
  quarterly: 'quarterly',
  semiannual: 'semiannual',
  yearly: 'yearly'
};

export type RecurringInterval = (typeof RecurringInterval)[keyof typeof RecurringInterval]


export const RecurringItemStatus: {
  active: 'active',
  paused: 'paused',
  ended: 'ended'
};

export type RecurringItemStatus = (typeof RecurringItemStatus)[keyof typeof RecurringItemStatus]


export const RecurringItemCategory: {
  subscription: 'subscription',
  insurance: 'insurance',
  loan: 'loan',
  housing: 'housing',
  mobility: 'mobility',
  health: 'health',
  other: 'other'
};

export type RecurringItemCategory = (typeof RecurringItemCategory)[keyof typeof RecurringItemCategory]

}

export type RecurringInterval = $Enums.RecurringInterval

export const RecurringInterval: typeof $Enums.RecurringInterval

export type RecurringItemStatus = $Enums.RecurringItemStatus

export const RecurringItemStatus: typeof $Enums.RecurringItemStatus

export type RecurringItemCategory = $Enums.RecurringItemCategory

export const RecurringItemCategory: typeof $Enums.RecurringItemCategory

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more RecurringItems
 * const recurringItems = await prisma.recurringItem.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more RecurringItems
   * const recurringItems = await prisma.recurringItem.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.recurringItem`: Exposes CRUD operations for the **RecurringItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RecurringItems
    * const recurringItems = await prisma.recurringItem.findMany()
    * ```
    */
  get recurringItem(): Prisma.RecurringItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RecurringItem: 'RecurringItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "recurringItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RecurringItem: {
        payload: Prisma.$RecurringItemPayload<ExtArgs>
        fields: Prisma.RecurringItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecurringItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecurringItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          findFirst: {
            args: Prisma.RecurringItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecurringItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          findMany: {
            args: Prisma.RecurringItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>[]
          }
          create: {
            args: Prisma.RecurringItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          createMany: {
            args: Prisma.RecurringItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecurringItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>[]
          }
          delete: {
            args: Prisma.RecurringItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          update: {
            args: Prisma.RecurringItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          deleteMany: {
            args: Prisma.RecurringItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecurringItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecurringItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>[]
          }
          upsert: {
            args: Prisma.RecurringItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecurringItemPayload>
          }
          aggregate: {
            args: Prisma.RecurringItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecurringItem>
          }
          groupBy: {
            args: Prisma.RecurringItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecurringItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecurringItemCountArgs<ExtArgs>
            result: $Utils.Optional<RecurringItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    recurringItem?: RecurringItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model RecurringItem
   */

  export type AggregateRecurringItem = {
    _count: RecurringItemCountAggregateOutputType | null
    _avg: RecurringItemAvgAggregateOutputType | null
    _sum: RecurringItemSumAggregateOutputType | null
    _min: RecurringItemMinAggregateOutputType | null
    _max: RecurringItemMaxAggregateOutputType | null
  }

  export type RecurringItemAvgAggregateOutputType = {
    amountCents: number | null
  }

  export type RecurringItemSumAggregateOutputType = {
    amountCents: number | null
  }

  export type RecurringItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    amountCents: number | null
    currency: string | null
    interval: $Enums.RecurringInterval | null
    nextDueDate: Date | null
    category: $Enums.RecurringItemCategory | null
    notes: string | null
    startDate: Date | null
    endDate: Date | null
    cancelByDate: Date | null
    status: $Enums.RecurringItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    amountCents: number | null
    currency: string | null
    interval: $Enums.RecurringInterval | null
    nextDueDate: Date | null
    category: $Enums.RecurringItemCategory | null
    notes: string | null
    startDate: Date | null
    endDate: Date | null
    cancelByDate: Date | null
    status: $Enums.RecurringItemStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RecurringItemCountAggregateOutputType = {
    id: number
    name: number
    amountCents: number
    currency: number
    interval: number
    nextDueDate: number
    category: number
    notes: number
    startDate: number
    endDate: number
    cancelByDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RecurringItemAvgAggregateInputType = {
    amountCents?: true
  }

  export type RecurringItemSumAggregateInputType = {
    amountCents?: true
  }

  export type RecurringItemMinAggregateInputType = {
    id?: true
    name?: true
    amountCents?: true
    currency?: true
    interval?: true
    nextDueDate?: true
    category?: true
    notes?: true
    startDate?: true
    endDate?: true
    cancelByDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringItemMaxAggregateInputType = {
    id?: true
    name?: true
    amountCents?: true
    currency?: true
    interval?: true
    nextDueDate?: true
    category?: true
    notes?: true
    startDate?: true
    endDate?: true
    cancelByDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RecurringItemCountAggregateInputType = {
    id?: true
    name?: true
    amountCents?: true
    currency?: true
    interval?: true
    nextDueDate?: true
    category?: true
    notes?: true
    startDate?: true
    endDate?: true
    cancelByDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RecurringItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringItem to aggregate.
     */
    where?: RecurringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringItems to fetch.
     */
    orderBy?: RecurringItemOrderByWithRelationInput | RecurringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecurringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RecurringItems
    **/
    _count?: true | RecurringItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecurringItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecurringItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecurringItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecurringItemMaxAggregateInputType
  }

  export type GetRecurringItemAggregateType<T extends RecurringItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRecurringItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecurringItem[P]>
      : GetScalarType<T[P], AggregateRecurringItem[P]>
  }




  export type RecurringItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecurringItemWhereInput
    orderBy?: RecurringItemOrderByWithAggregationInput | RecurringItemOrderByWithAggregationInput[]
    by: RecurringItemScalarFieldEnum[] | RecurringItemScalarFieldEnum
    having?: RecurringItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecurringItemCountAggregateInputType | true
    _avg?: RecurringItemAvgAggregateInputType
    _sum?: RecurringItemSumAggregateInputType
    _min?: RecurringItemMinAggregateInputType
    _max?: RecurringItemMaxAggregateInputType
  }

  export type RecurringItemGroupByOutputType = {
    id: string
    name: string
    amountCents: number
    currency: string
    interval: $Enums.RecurringInterval
    nextDueDate: Date
    category: $Enums.RecurringItemCategory | null
    notes: string | null
    startDate: Date | null
    endDate: Date | null
    cancelByDate: Date | null
    status: $Enums.RecurringItemStatus
    createdAt: Date
    updatedAt: Date
    _count: RecurringItemCountAggregateOutputType | null
    _avg: RecurringItemAvgAggregateOutputType | null
    _sum: RecurringItemSumAggregateOutputType | null
    _min: RecurringItemMinAggregateOutputType | null
    _max: RecurringItemMaxAggregateOutputType | null
  }

  type GetRecurringItemGroupByPayload<T extends RecurringItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecurringItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecurringItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecurringItemGroupByOutputType[P]>
            : GetScalarType<T[P], RecurringItemGroupByOutputType[P]>
        }
      >
    >


  export type RecurringItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amountCents?: boolean
    currency?: boolean
    interval?: boolean
    nextDueDate?: boolean
    category?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    cancelByDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recurringItem"]>

  export type RecurringItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amountCents?: boolean
    currency?: boolean
    interval?: boolean
    nextDueDate?: boolean
    category?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    cancelByDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recurringItem"]>

  export type RecurringItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    amountCents?: boolean
    currency?: boolean
    interval?: boolean
    nextDueDate?: boolean
    category?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    cancelByDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["recurringItem"]>

  export type RecurringItemSelectScalar = {
    id?: boolean
    name?: boolean
    amountCents?: boolean
    currency?: boolean
    interval?: boolean
    nextDueDate?: boolean
    category?: boolean
    notes?: boolean
    startDate?: boolean
    endDate?: boolean
    cancelByDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RecurringItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "amountCents" | "currency" | "interval" | "nextDueDate" | "category" | "notes" | "startDate" | "endDate" | "cancelByDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["recurringItem"]>

  export type $RecurringItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RecurringItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      amountCents: number
      currency: string
      interval: $Enums.RecurringInterval
      nextDueDate: Date
      category: $Enums.RecurringItemCategory | null
      notes: string | null
      startDate: Date | null
      endDate: Date | null
      cancelByDate: Date | null
      status: $Enums.RecurringItemStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["recurringItem"]>
    composites: {}
  }

  type RecurringItemGetPayload<S extends boolean | null | undefined | RecurringItemDefaultArgs> = $Result.GetResult<Prisma.$RecurringItemPayload, S>

  type RecurringItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecurringItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecurringItemCountAggregateInputType | true
    }

  export interface RecurringItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RecurringItem'], meta: { name: 'RecurringItem' } }
    /**
     * Find zero or one RecurringItem that matches the filter.
     * @param {RecurringItemFindUniqueArgs} args - Arguments to find a RecurringItem
     * @example
     * // Get one RecurringItem
     * const recurringItem = await prisma.recurringItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecurringItemFindUniqueArgs>(args: SelectSubset<T, RecurringItemFindUniqueArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RecurringItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecurringItemFindUniqueOrThrowArgs} args - Arguments to find a RecurringItem
     * @example
     * // Get one RecurringItem
     * const recurringItem = await prisma.recurringItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecurringItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RecurringItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemFindFirstArgs} args - Arguments to find a RecurringItem
     * @example
     * // Get one RecurringItem
     * const recurringItem = await prisma.recurringItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecurringItemFindFirstArgs>(args?: SelectSubset<T, RecurringItemFindFirstArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RecurringItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemFindFirstOrThrowArgs} args - Arguments to find a RecurringItem
     * @example
     * // Get one RecurringItem
     * const recurringItem = await prisma.recurringItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecurringItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RecurringItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RecurringItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RecurringItems
     * const recurringItems = await prisma.recurringItem.findMany()
     * 
     * // Get first 10 RecurringItems
     * const recurringItems = await prisma.recurringItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recurringItemWithIdOnly = await prisma.recurringItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecurringItemFindManyArgs>(args?: SelectSubset<T, RecurringItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RecurringItem.
     * @param {RecurringItemCreateArgs} args - Arguments to create a RecurringItem.
     * @example
     * // Create one RecurringItem
     * const RecurringItem = await prisma.recurringItem.create({
     *   data: {
     *     // ... data to create a RecurringItem
     *   }
     * })
     * 
     */
    create<T extends RecurringItemCreateArgs>(args: SelectSubset<T, RecurringItemCreateArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RecurringItems.
     * @param {RecurringItemCreateManyArgs} args - Arguments to create many RecurringItems.
     * @example
     * // Create many RecurringItems
     * const recurringItem = await prisma.recurringItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecurringItemCreateManyArgs>(args?: SelectSubset<T, RecurringItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RecurringItems and returns the data saved in the database.
     * @param {RecurringItemCreateManyAndReturnArgs} args - Arguments to create many RecurringItems.
     * @example
     * // Create many RecurringItems
     * const recurringItem = await prisma.recurringItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RecurringItems and only return the `id`
     * const recurringItemWithIdOnly = await prisma.recurringItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecurringItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RecurringItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RecurringItem.
     * @param {RecurringItemDeleteArgs} args - Arguments to delete one RecurringItem.
     * @example
     * // Delete one RecurringItem
     * const RecurringItem = await prisma.recurringItem.delete({
     *   where: {
     *     // ... filter to delete one RecurringItem
     *   }
     * })
     * 
     */
    delete<T extends RecurringItemDeleteArgs>(args: SelectSubset<T, RecurringItemDeleteArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RecurringItem.
     * @param {RecurringItemUpdateArgs} args - Arguments to update one RecurringItem.
     * @example
     * // Update one RecurringItem
     * const recurringItem = await prisma.recurringItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecurringItemUpdateArgs>(args: SelectSubset<T, RecurringItemUpdateArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RecurringItems.
     * @param {RecurringItemDeleteManyArgs} args - Arguments to filter RecurringItems to delete.
     * @example
     * // Delete a few RecurringItems
     * const { count } = await prisma.recurringItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecurringItemDeleteManyArgs>(args?: SelectSubset<T, RecurringItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RecurringItems
     * const recurringItem = await prisma.recurringItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecurringItemUpdateManyArgs>(args: SelectSubset<T, RecurringItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RecurringItems and returns the data updated in the database.
     * @param {RecurringItemUpdateManyAndReturnArgs} args - Arguments to update many RecurringItems.
     * @example
     * // Update many RecurringItems
     * const recurringItem = await prisma.recurringItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RecurringItems and only return the `id`
     * const recurringItemWithIdOnly = await prisma.recurringItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecurringItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RecurringItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RecurringItem.
     * @param {RecurringItemUpsertArgs} args - Arguments to update or create a RecurringItem.
     * @example
     * // Update or create a RecurringItem
     * const recurringItem = await prisma.recurringItem.upsert({
     *   create: {
     *     // ... data to create a RecurringItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RecurringItem we want to update
     *   }
     * })
     */
    upsert<T extends RecurringItemUpsertArgs>(args: SelectSubset<T, RecurringItemUpsertArgs<ExtArgs>>): Prisma__RecurringItemClient<$Result.GetResult<Prisma.$RecurringItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RecurringItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemCountArgs} args - Arguments to filter RecurringItems to count.
     * @example
     * // Count the number of RecurringItems
     * const count = await prisma.recurringItem.count({
     *   where: {
     *     // ... the filter for the RecurringItems we want to count
     *   }
     * })
    **/
    count<T extends RecurringItemCountArgs>(
      args?: Subset<T, RecurringItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecurringItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RecurringItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecurringItemAggregateArgs>(args: Subset<T, RecurringItemAggregateArgs>): Prisma.PrismaPromise<GetRecurringItemAggregateType<T>>

    /**
     * Group by RecurringItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecurringItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecurringItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecurringItemGroupByArgs['orderBy'] }
        : { orderBy?: RecurringItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecurringItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecurringItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RecurringItem model
   */
  readonly fields: RecurringItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RecurringItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecurringItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RecurringItem model
   */
  interface RecurringItemFieldRefs {
    readonly id: FieldRef<"RecurringItem", 'String'>
    readonly name: FieldRef<"RecurringItem", 'String'>
    readonly amountCents: FieldRef<"RecurringItem", 'Int'>
    readonly currency: FieldRef<"RecurringItem", 'String'>
    readonly interval: FieldRef<"RecurringItem", 'RecurringInterval'>
    readonly nextDueDate: FieldRef<"RecurringItem", 'DateTime'>
    readonly category: FieldRef<"RecurringItem", 'RecurringItemCategory'>
    readonly notes: FieldRef<"RecurringItem", 'String'>
    readonly startDate: FieldRef<"RecurringItem", 'DateTime'>
    readonly endDate: FieldRef<"RecurringItem", 'DateTime'>
    readonly cancelByDate: FieldRef<"RecurringItem", 'DateTime'>
    readonly status: FieldRef<"RecurringItem", 'RecurringItemStatus'>
    readonly createdAt: FieldRef<"RecurringItem", 'DateTime'>
    readonly updatedAt: FieldRef<"RecurringItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RecurringItem findUnique
   */
  export type RecurringItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter, which RecurringItem to fetch.
     */
    where: RecurringItemWhereUniqueInput
  }

  /**
   * RecurringItem findUniqueOrThrow
   */
  export type RecurringItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter, which RecurringItem to fetch.
     */
    where: RecurringItemWhereUniqueInput
  }

  /**
   * RecurringItem findFirst
   */
  export type RecurringItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter, which RecurringItem to fetch.
     */
    where?: RecurringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringItems to fetch.
     */
    orderBy?: RecurringItemOrderByWithRelationInput | RecurringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringItems.
     */
    cursor?: RecurringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringItems.
     */
    distinct?: RecurringItemScalarFieldEnum | RecurringItemScalarFieldEnum[]
  }

  /**
   * RecurringItem findFirstOrThrow
   */
  export type RecurringItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter, which RecurringItem to fetch.
     */
    where?: RecurringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringItems to fetch.
     */
    orderBy?: RecurringItemOrderByWithRelationInput | RecurringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RecurringItems.
     */
    cursor?: RecurringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RecurringItems.
     */
    distinct?: RecurringItemScalarFieldEnum | RecurringItemScalarFieldEnum[]
  }

  /**
   * RecurringItem findMany
   */
  export type RecurringItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter, which RecurringItems to fetch.
     */
    where?: RecurringItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RecurringItems to fetch.
     */
    orderBy?: RecurringItemOrderByWithRelationInput | RecurringItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RecurringItems.
     */
    cursor?: RecurringItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RecurringItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RecurringItems.
     */
    skip?: number
    distinct?: RecurringItemScalarFieldEnum | RecurringItemScalarFieldEnum[]
  }

  /**
   * RecurringItem create
   */
  export type RecurringItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * The data needed to create a RecurringItem.
     */
    data: XOR<RecurringItemCreateInput, RecurringItemUncheckedCreateInput>
  }

  /**
   * RecurringItem createMany
   */
  export type RecurringItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RecurringItems.
     */
    data: RecurringItemCreateManyInput | RecurringItemCreateManyInput[]
  }

  /**
   * RecurringItem createManyAndReturn
   */
  export type RecurringItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * The data used to create many RecurringItems.
     */
    data: RecurringItemCreateManyInput | RecurringItemCreateManyInput[]
  }

  /**
   * RecurringItem update
   */
  export type RecurringItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * The data needed to update a RecurringItem.
     */
    data: XOR<RecurringItemUpdateInput, RecurringItemUncheckedUpdateInput>
    /**
     * Choose, which RecurringItem to update.
     */
    where: RecurringItemWhereUniqueInput
  }

  /**
   * RecurringItem updateMany
   */
  export type RecurringItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RecurringItems.
     */
    data: XOR<RecurringItemUpdateManyMutationInput, RecurringItemUncheckedUpdateManyInput>
    /**
     * Filter which RecurringItems to update
     */
    where?: RecurringItemWhereInput
    /**
     * Limit how many RecurringItems to update.
     */
    limit?: number
  }

  /**
   * RecurringItem updateManyAndReturn
   */
  export type RecurringItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * The data used to update RecurringItems.
     */
    data: XOR<RecurringItemUpdateManyMutationInput, RecurringItemUncheckedUpdateManyInput>
    /**
     * Filter which RecurringItems to update
     */
    where?: RecurringItemWhereInput
    /**
     * Limit how many RecurringItems to update.
     */
    limit?: number
  }

  /**
   * RecurringItem upsert
   */
  export type RecurringItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * The filter to search for the RecurringItem to update in case it exists.
     */
    where: RecurringItemWhereUniqueInput
    /**
     * In case the RecurringItem found by the `where` argument doesn't exist, create a new RecurringItem with this data.
     */
    create: XOR<RecurringItemCreateInput, RecurringItemUncheckedCreateInput>
    /**
     * In case the RecurringItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecurringItemUpdateInput, RecurringItemUncheckedUpdateInput>
  }

  /**
   * RecurringItem delete
   */
  export type RecurringItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
    /**
     * Filter which RecurringItem to delete.
     */
    where: RecurringItemWhereUniqueInput
  }

  /**
   * RecurringItem deleteMany
   */
  export type RecurringItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RecurringItems to delete
     */
    where?: RecurringItemWhereInput
    /**
     * Limit how many RecurringItems to delete.
     */
    limit?: number
  }

  /**
   * RecurringItem without action
   */
  export type RecurringItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecurringItem
     */
    select?: RecurringItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RecurringItem
     */
    omit?: RecurringItemOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RecurringItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    amountCents: 'amountCents',
    currency: 'currency',
    interval: 'interval',
    nextDueDate: 'nextDueDate',
    category: 'category',
    notes: 'notes',
    startDate: 'startDate',
    endDate: 'endDate',
    cancelByDate: 'cancelByDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RecurringItemScalarFieldEnum = (typeof RecurringItemScalarFieldEnum)[keyof typeof RecurringItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'RecurringInterval'
   */
  export type EnumRecurringIntervalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringInterval'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'RecurringItemCategory'
   */
  export type EnumRecurringItemCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringItemCategory'>
    


  /**
   * Reference to a field of type 'RecurringItemStatus'
   */
  export type EnumRecurringItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecurringItemStatus'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RecurringItemWhereInput = {
    AND?: RecurringItemWhereInput | RecurringItemWhereInput[]
    OR?: RecurringItemWhereInput[]
    NOT?: RecurringItemWhereInput | RecurringItemWhereInput[]
    id?: StringFilter<"RecurringItem"> | string
    name?: StringFilter<"RecurringItem"> | string
    amountCents?: IntFilter<"RecurringItem"> | number
    currency?: StringFilter<"RecurringItem"> | string
    interval?: EnumRecurringIntervalFilter<"RecurringItem"> | $Enums.RecurringInterval
    nextDueDate?: DateTimeFilter<"RecurringItem"> | Date | string
    category?: EnumRecurringItemCategoryNullableFilter<"RecurringItem"> | $Enums.RecurringItemCategory | null
    notes?: StringNullableFilter<"RecurringItem"> | string | null
    startDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    cancelByDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    status?: EnumRecurringItemStatusFilter<"RecurringItem"> | $Enums.RecurringItemStatus
    createdAt?: DateTimeFilter<"RecurringItem"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringItem"> | Date | string
  }

  export type RecurringItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    nextDueDate?: SortOrder
    category?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    cancelByDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecurringItemWhereInput | RecurringItemWhereInput[]
    OR?: RecurringItemWhereInput[]
    NOT?: RecurringItemWhereInput | RecurringItemWhereInput[]
    name?: StringFilter<"RecurringItem"> | string
    amountCents?: IntFilter<"RecurringItem"> | number
    currency?: StringFilter<"RecurringItem"> | string
    interval?: EnumRecurringIntervalFilter<"RecurringItem"> | $Enums.RecurringInterval
    nextDueDate?: DateTimeFilter<"RecurringItem"> | Date | string
    category?: EnumRecurringItemCategoryNullableFilter<"RecurringItem"> | $Enums.RecurringItemCategory | null
    notes?: StringNullableFilter<"RecurringItem"> | string | null
    startDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    endDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    cancelByDate?: DateTimeNullableFilter<"RecurringItem"> | Date | string | null
    status?: EnumRecurringItemStatusFilter<"RecurringItem"> | $Enums.RecurringItemStatus
    createdAt?: DateTimeFilter<"RecurringItem"> | Date | string
    updatedAt?: DateTimeFilter<"RecurringItem"> | Date | string
  }, "id">

  export type RecurringItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    nextDueDate?: SortOrder
    category?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    cancelByDate?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RecurringItemCountOrderByAggregateInput
    _avg?: RecurringItemAvgOrderByAggregateInput
    _max?: RecurringItemMaxOrderByAggregateInput
    _min?: RecurringItemMinOrderByAggregateInput
    _sum?: RecurringItemSumOrderByAggregateInput
  }

  export type RecurringItemScalarWhereWithAggregatesInput = {
    AND?: RecurringItemScalarWhereWithAggregatesInput | RecurringItemScalarWhereWithAggregatesInput[]
    OR?: RecurringItemScalarWhereWithAggregatesInput[]
    NOT?: RecurringItemScalarWhereWithAggregatesInput | RecurringItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RecurringItem"> | string
    name?: StringWithAggregatesFilter<"RecurringItem"> | string
    amountCents?: IntWithAggregatesFilter<"RecurringItem"> | number
    currency?: StringWithAggregatesFilter<"RecurringItem"> | string
    interval?: EnumRecurringIntervalWithAggregatesFilter<"RecurringItem"> | $Enums.RecurringInterval
    nextDueDate?: DateTimeWithAggregatesFilter<"RecurringItem"> | Date | string
    category?: EnumRecurringItemCategoryNullableWithAggregatesFilter<"RecurringItem"> | $Enums.RecurringItemCategory | null
    notes?: StringNullableWithAggregatesFilter<"RecurringItem"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"RecurringItem"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"RecurringItem"> | Date | string | null
    cancelByDate?: DateTimeNullableWithAggregatesFilter<"RecurringItem"> | Date | string | null
    status?: EnumRecurringItemStatusWithAggregatesFilter<"RecurringItem"> | $Enums.RecurringItemStatus
    createdAt?: DateTimeWithAggregatesFilter<"RecurringItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RecurringItem"> | Date | string
  }

  export type RecurringItemCreateInput = {
    id?: string
    name: string
    amountCents: number
    currency?: string
    interval: $Enums.RecurringInterval
    nextDueDate: Date | string
    category?: $Enums.RecurringItemCategory | null
    notes?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    cancelByDate?: Date | string | null
    status?: $Enums.RecurringItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringItemUncheckedCreateInput = {
    id?: string
    name: string
    amountCents: number
    currency?: string
    interval: $Enums.RecurringInterval
    nextDueDate: Date | string
    category?: $Enums.RecurringItemCategory | null
    notes?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    cancelByDate?: Date | string | null
    status?: $Enums.RecurringItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: EnumRecurringIntervalFieldUpdateOperationsInput | $Enums.RecurringInterval
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableEnumRecurringItemCategoryFieldUpdateOperationsInput | $Enums.RecurringItemCategory | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelByDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecurringItemStatusFieldUpdateOperationsInput | $Enums.RecurringItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: EnumRecurringIntervalFieldUpdateOperationsInput | $Enums.RecurringInterval
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableEnumRecurringItemCategoryFieldUpdateOperationsInput | $Enums.RecurringItemCategory | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelByDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecurringItemStatusFieldUpdateOperationsInput | $Enums.RecurringItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringItemCreateManyInput = {
    id?: string
    name: string
    amountCents: number
    currency?: string
    interval: $Enums.RecurringInterval
    nextDueDate: Date | string
    category?: $Enums.RecurringItemCategory | null
    notes?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    cancelByDate?: Date | string | null
    status?: $Enums.RecurringItemStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecurringItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: EnumRecurringIntervalFieldUpdateOperationsInput | $Enums.RecurringInterval
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableEnumRecurringItemCategoryFieldUpdateOperationsInput | $Enums.RecurringItemCategory | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelByDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecurringItemStatusFieldUpdateOperationsInput | $Enums.RecurringItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecurringItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    amountCents?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    interval?: EnumRecurringIntervalFieldUpdateOperationsInput | $Enums.RecurringInterval
    nextDueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: NullableEnumRecurringItemCategoryFieldUpdateOperationsInput | $Enums.RecurringItemCategory | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelByDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumRecurringItemStatusFieldUpdateOperationsInput | $Enums.RecurringItemStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumRecurringIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringInterval | EnumRecurringIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringInterval[]
    notIn?: $Enums.RecurringInterval[]
    not?: NestedEnumRecurringIntervalFilter<$PrismaModel> | $Enums.RecurringInterval
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumRecurringItemCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemCategory | EnumRecurringItemCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurringItemCategory[] | null
    notIn?: $Enums.RecurringItemCategory[] | null
    not?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel> | $Enums.RecurringItemCategory | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRecurringItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemStatus | EnumRecurringItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringItemStatus[]
    notIn?: $Enums.RecurringItemStatus[]
    not?: NestedEnumRecurringItemStatusFilter<$PrismaModel> | $Enums.RecurringItemStatus
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RecurringItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    nextDueDate?: SortOrder
    category?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cancelByDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringItemAvgOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type RecurringItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    nextDueDate?: SortOrder
    category?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cancelByDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    amountCents?: SortOrder
    currency?: SortOrder
    interval?: SortOrder
    nextDueDate?: SortOrder
    category?: SortOrder
    notes?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    cancelByDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecurringItemSumOrderByAggregateInput = {
    amountCents?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumRecurringIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringInterval | EnumRecurringIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringInterval[]
    notIn?: $Enums.RecurringInterval[]
    not?: NestedEnumRecurringIntervalWithAggregatesFilter<$PrismaModel> | $Enums.RecurringInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringIntervalFilter<$PrismaModel>
    _max?: NestedEnumRecurringIntervalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumRecurringItemCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemCategory | EnumRecurringItemCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurringItemCategory[] | null
    notIn?: $Enums.RecurringItemCategory[] | null
    not?: NestedEnumRecurringItemCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurringItemCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRecurringItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemStatus | EnumRecurringItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringItemStatus[]
    notIn?: $Enums.RecurringItemStatus[]
    not?: NestedEnumRecurringItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecurringItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringItemStatusFilter<$PrismaModel>
    _max?: NestedEnumRecurringItemStatusFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumRecurringIntervalFieldUpdateOperationsInput = {
    set?: $Enums.RecurringInterval
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableEnumRecurringItemCategoryFieldUpdateOperationsInput = {
    set?: $Enums.RecurringItemCategory | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRecurringItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecurringItemStatus
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRecurringIntervalFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringInterval | EnumRecurringIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringInterval[]
    notIn?: $Enums.RecurringInterval[]
    not?: NestedEnumRecurringIntervalFilter<$PrismaModel> | $Enums.RecurringInterval
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemCategory | EnumRecurringItemCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurringItemCategory[] | null
    notIn?: $Enums.RecurringItemCategory[] | null
    not?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel> | $Enums.RecurringItemCategory | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRecurringItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemStatus | EnumRecurringItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringItemStatus[]
    notIn?: $Enums.RecurringItemStatus[]
    not?: NestedEnumRecurringItemStatusFilter<$PrismaModel> | $Enums.RecurringItemStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumRecurringIntervalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringInterval | EnumRecurringIntervalFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringInterval[]
    notIn?: $Enums.RecurringInterval[]
    not?: NestedEnumRecurringIntervalWithAggregatesFilter<$PrismaModel> | $Enums.RecurringInterval
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringIntervalFilter<$PrismaModel>
    _max?: NestedEnumRecurringIntervalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumRecurringItemCategoryNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemCategory | EnumRecurringItemCategoryFieldRefInput<$PrismaModel> | null
    in?: $Enums.RecurringItemCategory[] | null
    notIn?: $Enums.RecurringItemCategory[] | null
    not?: NestedEnumRecurringItemCategoryNullableWithAggregatesFilter<$PrismaModel> | $Enums.RecurringItemCategory | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel>
    _max?: NestedEnumRecurringItemCategoryNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRecurringItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecurringItemStatus | EnumRecurringItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RecurringItemStatus[]
    notIn?: $Enums.RecurringItemStatus[]
    not?: NestedEnumRecurringItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecurringItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecurringItemStatusFilter<$PrismaModel>
    _max?: NestedEnumRecurringItemStatusFilter<$PrismaModel>
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}