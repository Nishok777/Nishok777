import './Si.css';
import { TextField ,Toolbar} from '@mui/material';
const Sign=()=>
{
    return (
        <>
        <div className="h">
          <div className="a1">
              <h1 style={{textAlign:'center',color: "white",fontSize:'50px'}}>Sign Up</h1>
              <div className="form">
              <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ marginBottom: '20px'}}></div>
              <Toolbar>
                <TextField label='First Name' variant='outlined' size='medium' className='t1'color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
              <Toolbar>
                <TextField label='Last Name' variant='outlined' size='medium' className='t1'color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                <Toolbar>
                <TextField label='Email Id' variant='outlined' size='medium' className='t1'color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                <Toolbar>
                <TextField label='Password' size='medium' variant='filled' className='t2' color='success' style={{backgroundColor:'white',borderRadius:'6px'}}required/>
                </Toolbar><div style={{ marginBottom: '20px' }}></div>
                <Toolbar>
                <TextField label='' type="date"variant='outlined' size='medium' className='t1'color='success' style={{backgroundColor:'white',borderRadius:'6px',width:'230px'}}required/>
                </Toolbar>   <div style={{ marginBottom: '25px' }}></div>
               <button value='Submit' className='b1'>Submit</button>
              </form>
              </div>
          </div>
          </div>
        </>
    );
}
export default Sign;