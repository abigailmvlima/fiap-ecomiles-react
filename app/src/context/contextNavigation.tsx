import { TAppState } from "@app/store";
import { THistory } from "@domain/types/THistory";
import { TNavigateRoute, TNavigation } from "@domain/types/TNavigation";
import show, { ERoute } from "@show/index";
import { pushHistory } from "@stores/store.history";
import React, { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

export const ContextNavigation = createContext({} as any);

export default ({ children }: any) => {
  const dispatch = useDispatch();

  const stateHitory: THistory = useSelector(
    (state: TAppState) => state.history
  );

  const goRoute = (newRoute: ERoute, data?: any) => {
    dispatch(pushHistory({ route: newRoute, data }));
  };

  const route: TNavigateRoute = {
    home: (data: any) => goRoute(show.route.home, data),
    menu: (data: any) => goRoute(show.route.menu, data),
    login: (data: any) => goRoute(show.route.login, data),
    reward: (data: any) => goRoute(show.route.reward, data),
    chat: (data: any) => goRoute(show.route.chat, data),
    challenge: (data: any) => goRoute(show.route.challenge, data),
    challengeDetail: (data: any) => goRoute(show.route.challengeDetail, data),
    challengeRegister: (data: any) =>
      goRoute(show.route.challengeRegister, data),
    register: (data: any) => goRoute(show.route.register, data),
    userEdit: (data: any) => goRoute(show.route.userEdit, data),
  };

  const navigation: TNavigation = {
    history: stateHitory,
    route,
    goRoute,
    goBack: () => {
      dispatch(
        pushHistory({ route: stateHitory?.routeOld || show.route.home })
      );
    },
  };

  return (
    <ContextNavigation.Provider value={navigation}>
      {children}
    </ContextNavigation.Provider>
  );
};
