import './Log2.css';
import { useState ,useEffect} from 'react';
import { toast,Toaster } from 'react-hot-toast';
import { TextField, Toolbar, Button } from '@mui/material';
const Login2 = () => {
    const [dat, setdat] = useState(false);
    function def() {
        setdat(true);
    }
    function aa(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        toast.success('Logged In!');
    }
    useEffect(() => {
        document.title = "Feast Finder";  
      }, []);
    function ab(f: React.FormEvent<HTMLFormElement>): void {
        f.preventDefault();
        toast.success('Signed Up!');
    }
    return (
        <>
            <div className="h">
                <div className="im">
                    <div className='oscar'>
                    <div>
                        <h1 className='one' style={{ fontSize: '70px' }}>WELCOME</h1></div>
                    <div>
                        <h2 className='one' style={{ fontSize: '50px' }}>To FEAST FINDER!!</h2>
                    </div>
                    <div>
                        <h3 className='one' style={{ fontSize: '40px' }}>
                            "Delight Your Palate, Anytime, Anywhere – Order Now!"</h3>
                    </div>
                    <div ><h4 className='one' style={{ fontSize: '30px' }}>{dat ? 'Please SignUp to Continue' : 'Please Login to Continue'}</h4><br />,<br /></div>
                        <h4 className={dat ? "hi" : ""} style={{ fontSize: '30px' }}>If you do not have a account please <Button onClick={def} color='warning' size='medium'>click here</Button> to Sign Up</h4></div>
                </div>
                <div className='lo'>

                    <div className={dat?"a2":"h1"}>
                        <h1 style={{ textAlign: 'center', color: "white", fontSize: '50px' }}><i>LOGIN</i></h1>
                        <div className="for">
                            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={aa}>
                                <div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='Email Id' variant='filled' size='medium' className='t1' color="success" style={{ backgroundColor: 'white', borderRadius: '9px' }} required />
                                </Toolbar>   <div style={{ marginBottom: '40px' }}></div>
                                <Toolbar>
                                    <TextField label='Password' type="password" size='medium' variant='filled' className='t2' color='success' style={{ backgroundColor: 'white', borderRadius: '9px' }} required />
                                </Toolbar><div style={{ marginBottom: '65px' }}></div>
                                <button value='Submit' className='b1'>Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className={dat?"a1":"a2"}>
                        <h1 style={{ textAlign: 'center', color: "white", fontSize: '50px' }}><i>Sign Up</i></h1>
                        <div className="form">
                            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={ab}>
                                <div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='First Name' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required />
                                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='Last Name' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required />
                                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='Email Id' variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required />
                                </Toolbar>   <div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='Password' type="password" size='medium' variant='filled' className='t2' color='success' style={{ backgroundColor: 'white', borderRadius: '6px' }} required />
                                </Toolbar><div style={{ marginBottom: '20px' }}></div>
                                <Toolbar>
                                    <TextField label='' type="date" variant='filled' size='medium' className='t1' color='success' style={{ backgroundColor: 'white', borderRadius: '6px', width: '230px' }} required />
                                </Toolbar>   <div style={{ marginBottom: '25px' }}></div>
                                <button value='Submit' className='b1'>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </>
    );
}
export default Login2;