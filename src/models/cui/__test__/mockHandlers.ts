import { initHandlers } from "@coca-cola/kos-test-utils";

process.env.REACT_APP_ALLOW_ANONYMOUS = "true";
window.kosMockWs = true;
window.kosEnableMocks = true;

export const initMocks = () => {
  const handlers = {};

  initHandlers(handlers, true);
};
