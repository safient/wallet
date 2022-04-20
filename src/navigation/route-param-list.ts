import { RouteName } from './route-name';

/**
 * Defining all the route params
 * key will be the route name and value will be an object with the params
 * To use the param use useParam hook
 */
export interface RouteParamsList {
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
  [RouteName.notifications]: undefined;
  [RouteName.globalNotifivations]: undefined;
}
