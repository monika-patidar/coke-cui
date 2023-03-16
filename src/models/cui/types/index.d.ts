import { IKosDataModel } from "@coca-cola/kos-ui-core";

export interface CuiOptions {}

export interface CuiModel extends CuiOptions, IKosDataModel {
  id: string;
  name: string;
  data:{}[]
}
