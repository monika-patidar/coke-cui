import { ServiceFactory, resolveServiceUrl } from "@coca-cola/kos-ui-core";
const { URL } = resolveServiceUrl("CUI_SERVICE");
const { getAll } = ServiceFactory.build({
  // destinationAddress: "/system/brandset/uiSchema.json",
  basePath:`${URL}/system/brandset/uiSchema.json`
  // `${URL}/api/cui`,
});

interface CuiResponse {
  id: string;
  name:string;
  data:{
    brands:{
        id:string,
        name:string,
        beverages:[]
      }[],
      beverages:{
        id:string,
        name:string,
        icon:string
      }[];
  }[];
}
/**
 * @category Service
 * Retrieves the initial cui data.
 */
export const getCuis = async () => {
  const response = await getAll<CuiResponse>({});
  return response;
};
