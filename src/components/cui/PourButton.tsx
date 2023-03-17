import React,{useState} from 'react'
import Button from '@mui/material/Button'
import './cui.scss'


const PourButton=(props:any)=>{
    const [isPouring,setIsPouring]=useState(false)

    const setPourButton=()=>{
        setIsPouring(!isPouring)
        props.setPour(!isPouring)
    }

    return(<>
    <div className='bottom-div'>
        <Button 
            className={isPouring ? 'pourButton stop' : 'pourButton start'}
            onClick={setPourButton}
        >
            {isPouring ? 'Stop' : 'Start'}
        </Button>
    </div>
    </>
)}


export default PourButton