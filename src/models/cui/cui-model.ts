import { kosModel, KosLog, Kos,kosAction } from "@coca-cola/kos-ui-core";
import { getCuis } from "./services";
import { CuiModel, CuiOptions } from "./types";

const MODEL_TYPE = "cui-model";

const log = KosLog.getLogger("cui-model");

@kosModel<CuiModel, CuiOptions>(MODEL_TYPE)
class CuiModelImpl implements CuiModel {
  id: string;
  name:string;
  data:{
    brands:{
      id:string,
      name:string,
      beverages:[]
    }[];
    beverages:{
      id:string,
      name:string,
      icon:string
    }[];
  }[]
  constructor(modelId: string, options: CuiOptions) {
    this.id = modelId;
    this.name = "";
    this.data=[]
    log.info(`cui options: ${options}`);
    if (options) {
      
      // Assign options properties here.
    }
  }

  // -------------------LIFECYCLE----------------------------

  async init(): Promise<void> {
    log.debug("initializing cui");
  }

  async load(): Promise<void> {
    log.debug("loading dispenser");
    try {
      const response = await getCuis();
      kosAction(() => {
        this.data = response || []
      });
    } catch (e) {
      log.error(e);
      throw e;
    }
    log.debug("loading cui");
  }

  async ready(): Promise<void> {
    log.debug("initializing cui");
  }

  async unload(): Promise<void> {
    log.debug("initializing cui");
  }

  async activate(): Promise<void> {
    log.debug("initializing cui");
  }

  async deactivate(): Promise<void> {
    log.debug("initializing cui");
  }
} 

const Registration = {
  registration: {
    [MODEL_TYPE]: {
      class: CuiModelImpl,
      singleton: true,
    },
  },
  type: MODEL_TYPE,
  factory: Kos.Factory.create<CuiModel, CuiOptions>(MODEL_TYPE),
};
export default Registration;
