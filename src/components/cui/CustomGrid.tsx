import React from "react";
import { Button, Grid,Box} from '@mui/material'
import './cui.scss'
const CustomGrid=(props:any)=>{debugger
    return(
    <Grid item>
         <Box className={props.className}>
            {props.products?.map((item:any, index:number) => {
                return (
                <>
                  {props.showChild ? 
                    <Button 
                      className={props.pourDrink===item.id ? "selectedClass" : ""}
                      key={item.id} 
                      id={props.id} 
                      onClick={(e)=>props.addBeverages(item)}>
                        <img src={`http://localhost:8081/system/brandset${item.icon}`} alt="my" width={"110px"} />
                    </Button>
                    :
                    <Button 
                        key={item.id} 
                        id={props.id} 
                        onClick={(e)=>props.selectBrand(e,item.id)}
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
  
export default CustomGrid