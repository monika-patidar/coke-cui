import { KosCore, whenReady } from "@coca-cola/kos-ui-core";
import { clearHandlers } from "@coca-cola/kos-test-utils";
import { initMocks } from "./mockHandlers";
import { default as CuiModel } from "../cui-model";

describe("Cui", () => {
  let cuiInfo;

  afterEach(() => {
    clearHandlers();
  });

  beforeEach(async () => {
    initMocks();
    const registry = {
      models: {
        ...CuiModel.registration,
      },
      preloadModels: [],
    };

    const core = KosCore.create(registry, true);

    await core.whenReady();
    cuiInfo = CuiModel.factory(CuiModel.type)({});
    await whenReady(cuiInfo);
  });
  it("should be defined", () => {
    expect(CuiModel).toBeDefined();
  });

  it("should be able to instantiate with a factory", () => {
    expect(cuiInfo).toBeDefined();
  });

  it("should instantiate with an ID property", () => {
    expect(cuiInfo.id).toBe(CuiModel.type);
  });
});
