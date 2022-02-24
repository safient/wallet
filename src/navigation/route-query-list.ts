import { RouteName } from './route-name';

/**
 * Defining all the route query strings
 * Key will be the route name and Value will be an object with the query strings
 * To use the query strings use useQuery hook
 * Query strings are by default string value so If the datatype is other than string
 * typecast the value using the typecase function in the useQuery() hooks file
 */
export interface RouteQueryList {
  [RouteName.home]: undefined;
  [RouteName.login]: undefined;
  [RouteName.register]: undefined;
  [RouteName.account]: undefined;
  [RouteName.notFound]: undefined;
  [RouteName.welcome]: undefined;
  [RouteName.createWallet]: undefined;
  [RouteName.walletOverview]: undefined;
  [RouteName.walletClaim]: undefined;
  [RouteName.walletSettings]: undefined;
}
