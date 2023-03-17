import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren,useEffect,useState } from "react";
import { Grid,Box} from '@mui/material'
import { useCuiModel } from "../../hooks/cui";
import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import './cui.scss'

interface Props {
}

export const CuiView: React.FunctionComponent<PropsWithChildren<Props>> =
  kosComponent(function CuiView() {
    const { status, KosModelLoader }:any = useCuiModel();
    const [products,setProducts]=useState<[]>()
    const [brands,setBrands]=useState<{}[]>([])
    const [allbeverages,setAllBeverages]=useState<{}[]>([])

    useEffect(()=>{
        if(status?.model?.data){
            setProducts(status?.model?.data)
            setBrands(status.model.data['brands'])
            setAllBeverages(status.model.data['beverages'])
        }
    },[status])
    
    return (
      <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
        <Box className="cartridge-wrapper">
        <Grid container maxWidth="lg" className="custom-container">
        {products &&
        <>
            <Grid item xs={6}>
            <LeftScreen brands={brands} beverages={allbeverages}/>
            </Grid>
            
            <Grid item xs={6}>
            <RightScreen brands={brands} beverages={allbeverages}/>
            </Grid>
        </>
        }
        </Grid>
        </Box>
       </KosModelLoader>
    );
  });
