import ArrowBack from '@mui/icons-material/ArrowBack'
import React,{useState} from 'react'
import CustomGrid from './CustomGrid'

const LeftScreen=(props:any)=>{
    const [leftChild,setleftChild]=useState(false)
    const [selectedBrand,setSelectedBrand]=useState([])
    const [childBeverages,setChildBeverages]=useState([])
    const [pourDrink,setPourDrink]=useState({})
    
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
        if(setBverages.length) setleftChild(true)
        // setScreen(e.target.id)
    }

    const selectBeverages=(data:any)=>{
        setPourDrink(data.id)
    }
    
    const clearAll=()=>{
        setSelectedBrand([])
        setChildBeverages([])
        setPourDrink({})
        setleftChild(false)
     }

    return(<>
    {leftChild && <ArrowBack color="inherit" onClick={()=>clearAll()}/>}
    <CustomGrid 
        id='screen1'
        className="cartridge-box"
        screen={props.screen}
        showChild={leftChild}
        pourDrink={pourDrink}
        products={leftChild && childBeverages?.length ? childBeverages : props.brands}
        variant="contained"
        selectBrand={(e: any, ind: string) => selectCartridge(e, ind)}       
        addBeverages={(data:{})=>selectBeverages(data)}     
        />
    </>)
}

export default LeftScreen