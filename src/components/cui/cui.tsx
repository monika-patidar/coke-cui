import { kosComponent, LoadingMessage } from "@coca-cola/kos-ui-components";
import React, { PropsWithChildren,useEffect,useState } from "react";
import { Button, Grid,Box} from '@mui/material'
import { useCuiModel } from "../../hooks/cui";
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
  handleClick: (e:any,i:string) => void;
}

const CustomGrid=(props:any)=>{
  return(
  <Grid item>
       <Box className={props.className}>
          {props.products?.map((item:any, index:number) => {
              return (
              <>
                {item.icon ? 
                  <Button 
                    key={item.id} 
                    id={props.id} 
                    onClick={(e)=>props.handleClick(e,item.id)}>
                      <img src={`http://localhost:8081/system/brandset${item.icon}`} alt="my" width={"110px"} />
                  </Button>
                  :
                  <Button 
                      key={item.id} 
                      id={props.id} 
                      onClick={(e)=>props.handleClick(e,item.id)}
                  >
                      {item?.name}
                  </Button>
                }
              </>
              )
          })}
       </Box>
  </Grid>
)
}  

export const CuiView: React.FunctionComponent<PropsWithChildren<AppProps>> =
  kosComponent(function CuiView() {
    const { status, KosModelLoader } = useCuiModel();
    const [products,setProducts]=useState([])
    const [selectedCart, setSelectedCart]=useState({})
    const [brands,setBrands]=useState([])
    const [allbeverages,setAllBeverages]=useState([])
    const [beverages,setBeverages]=useState([])
    const [showChild,setShowChild]=useState(false)
    const [screen,setScreen]=useState('')

    useEffect(()=>{
        if(status.model?.data){
            setProducts(status?.model?.data)
            setBrands(status.model.data['brands'])
            setAllBeverages(status.model.data['beverages'])
        }
    },[status])

    const selectCartridge=(e:any,i:string)=>{
        let setBverages:any=[]
        let setBrands:any=brands.find((data:{id:string})=>
            data.id===i)
        setBrands?.beverages?.forEach((element: string) => {
            allbeverages.find((data:{id:string,name:string,icon:string})=>{
                return data.id === element && setBverages.push(data)
            })
        });
        if(setBrands) setSelectedCart(setBrands)
        if(setBverages) setBeverages(setBverages)
        if(setBverages.length) setShowChild(true)
        setScreen(e.target.id)
    }
    
    
    return (
      <KosModelLoader {...status} loading={<LoadingMessage></LoadingMessage>}>
        <Box className="cartridge-wrapper">
        <Grid container maxWidth="lg" className="custom-container">
        {products &&
        <>
        {console.log(111,products)}
            <Grid item xs={6}>
            <CustomGrid 
                id='screen1'
                className="cartridge-box"
                products={showChild && screen === 'screen1' && beverages?.length ? beverages : brands}
                variant="contained"
                handleClick={(e: any, ind: string) => selectCartridge(e, ind)}            
                />
            </Grid>
            
            <Grid item xs={6}>
            <CustomGrid 
                id='screen2'
                className="cartridge-box"
                products={showChild && screen === 'screen2' && beverages?.length ? beverages :brands}
                variant="contained"
                handleClick={(e: any, ind: string) => selectCartridge(e, ind)}/>
            </Grid>
        </>
        }
        </Grid>
        </Box>
       </KosModelLoader>
    );
  });
