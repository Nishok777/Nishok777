
import './Fi.css';
import { useState,useRef,useEffect } from 'react';
import { AppBar, Toolbar, Stack, Button, TextField } from '@mui/material';
import { Search } from 'lucide';
const First = () => {
    const inp=useRef(null);
    useEffect(() => {
        inp.current.focus();
      }, []);
    return (
        <>
            <div className='out'>
                <AppBar style={{ backgroundColor: 'black' }}>
                    <Toolbar>
                        <h1 style={{ fontFamily: 'Okra, Helvetica, sans-serif' }}>FEAST FINDER</h1>
                        <Stack direction={'row'} flexGrow={1} justifyContent="flex-end">
                            <Button size='medium' color='inherit'>ABOUT</Button>
                            <Button size='medium' color='inherit'>CONTACT US</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <div className='o1'>
                    <input type='text' style={{width:'400px',height:'50px',borderRadius:'30px'}} ref={inp} autoFocus>
                        
                        </input>
                </div>
            </div>
        </>
    );
}
export default First;