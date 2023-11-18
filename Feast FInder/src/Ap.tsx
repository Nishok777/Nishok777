import { useState } from "react";
import { Autocomplete,TextField } from "@mui/material";
const Ap =()=>
{
    const l=['Delhi','Chennai','Bangalore'];
    const [val,setval]=useState<string|null>(null) 
    console.log(val);
    return(
        <>
        <Autocomplete options={l} renderInput={params =><TextField {...params} label="Cities"/>}
         value={val}
         onChange={(event:any,newValue:string|null)=>setval(newValue)}
         freeSolo
         />
        </>
    );
}
export default Ap