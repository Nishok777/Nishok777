import './Log1.css';
import { TextField,Toolbar } from '@mui/material';
const Login=()=>
{
    return(
        <>
        <div className="h">
          <div className='im'>
            <h2>Please Login to continue...</h2>
            <h2></h2>
          </div>
          <div className="h1">
              <h1 style={{textAlign:'center',color: "white",fontSize:'50px'}}>Login</h1>
              <div className="for">
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '20px'}}></div>
                <Toolbar>
                <TextField label='Email Id' variant='outlined' size='medium' className='t1'color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar>   <div style={{ marginBottom: '40px' }}></div>
                <Toolbar>
                <TextField label='Password' size='medium' variant='outlined' className='t2' color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar><div style={{ marginBottom: '45px' }}></div>
               <button value='Submit' className='b1'>Submit</button>
              </form>
              </div>
          </div>
          </div>
        </>
    );
}
export default Login