import ArrowBack from '@mui/icons-material/ArrowBack'
import { Box } from '@mui/system'
import React,{useState} from 'react'
import CustomGrid from './CustomGrid'
import PourButton from './PourButton'

const RightScreen=(props:any)=>{
    const [rightChild,setrightChild]=useState(false)
    const [selectedBrand,setSelectedBrand]=useState([])
    const [childBeverages,setChildBeverages]=useState([])
    const [pourDrink,setPourDrink]=useState('')
    const [isPouring,setIsPouring]=useState(false)
    
    const selectCartridge=(e:any,i:string)=>{
        let setBverages:any=[]
        let setBrands:any=props.brands.find((data:{id:string})=>
            data.id===i)
        setBrands?.beverages?.forEach((element: string) => {
            props.beverages.find((data:{id:string,name:string,icon:string})=>{
                return data.id === element && setBverages.push(data)
            })
        });
        if(setBrands) setSelectedBrand(setBrands)
        if(setBverages) setChildBeverages(setBverages)
        if(setBverages.length) setrightChild(true)
        // setScreen(e.target.id)

    }

    const selectBeverages=(data:any)=>{
        setPourDrink(data.id)
    }
    
    const clearAll=()=>{
        setSelectedBrand([])
        setChildBeverages([])
        setPourDrink('')
        setrightChild(false)
        setIsPouring(false)
     }

    return(<>
    {rightChild && <ArrowBack color="inherit" onClick={()=>clearAll()}/>}
    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '90vh'}}>
        <CustomGrid 
            id='screen2'
            className="cartridge-box"
            screen={props.screen}
            showChild={rightChild}
            pourDrink={pourDrink}
            startPouring={isPouring}
            products={rightChild && childBeverages?.length ? childBeverages : props.brands}
            variant="contained"
            selectBrand={(e: any, ind: string) => selectCartridge(e, ind)}       
            addBeverages={(data:{})=>selectBeverages(data)}     
        />
        {pourDrink &&
            <PourButton setPour={(state:boolean)=>setIsPouring(state)}/>
        }
    </Box>
    </>)
}

export default RightScreen