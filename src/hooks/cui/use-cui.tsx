import { useKosModel } from "@coca-cola/kos-ui-components";
import { Cui, CuiModel } from "../../models/cui";

export const useCuiModel = () => {
  const modelId = Cui.type;
  const result = useKosModel<CuiModel>({
    modelId,
    modelType: Cui.type,
  });

  return result;
};
