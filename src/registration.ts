import type { IKosRegistry } from "@coca-cola/kos-ui-core";
import { Cui } from "./models/cui";
import { Dispenser } from "./models/dispenser";
export const Registry: IKosRegistry = {
  models: {
    ...Dispenser.registration,
    ...Cui.registration
  },
  preloadModels: [Dispenser.type, Cui.type],
};
