import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren,useEffect,useState } from "react";
import { Grid,Box} from '@mui/material'
import { useCuiModel } from "../../hooks/cui";
import LeftScreen from "./LeftScreen";
import RightScreen from "./RightScreen";
import './cui.scss'

interface Props {
}

interface AppProps{
  className:string,
  id:string,
  products:{
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
  brandType:{
    id:string,
    name:string,
    beverages:[]
  }[],
  beveragesType:{
    id:string,
    name:string,
    icon:string
  }[];
  variant: "text" | "outlined" | "contained",
  selectBrand: (e:any,i:string) => void;
  selectBeverages:(id:string)=>void;
}

export const CuiView: React.FunctionComponent<PropsWithChildren<AppProps>> =
  kosComponent(function CuiView() {
    const { status, KosModelLoader } = useCuiModel();
    const [products,setProducts]=useState([])
    const [brands,setBrands]=useState([])
    const [allbeverages,setAllBeverages]=useState([])

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
