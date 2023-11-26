
import './Fi.css';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import { Search, MapPinned } from 'lucide-react';
import { useEffect } from 'react';
import {toast,Toaster} from 'react-hot-toast';
import image1 from './chennai.jpeg'
import image2 from './coimbatore.jpeg'
import image3 from './Madurai.jpg'
import image4 from './thirunelveli.webp'
import image5 from './Tiruchy.jpeg'
import image6 from './thanjavur.webp'
import Marquee from 'react-fast-marquee';
const First = () => {
    useEffect(() => {
        toast.success(`Logged In!`);
    })
    return (
        <>
            <div className='out'>
                <AppBar style={{ backgroundColor: 'black', zIndex: '2' }}>
                    <Toolbar>
                        <h1 style={{ fontFamily: 'Okra, Helvetica, sans-serif' }}>FEAST FINDER</h1>

                        <Stack direction={'row'} flexGrow={1} justifyContent="flex-end">
                            <Button size='medium' color='inherit'>ABOUT</Button>
                            <Button size='medium' color='inherit'>CONTACT US</Button>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <div className='o1'>
                    <h4 style={{ fontSize: '20px',marginTop:'18px'}}>Search your city:</h4>
                    <div className='d'>
                    <div>
                        <input type='text' style={{ width: '500px', height: '50px', borderRadius: '30px', fontSize: '30px', marginBottom: '13px', paddingLeft: '10px' }} autoFocus /></div>
                    <div>
                        <Button color='inherit' style={{ marginBottom: '15px' }}><Search size='30px' /></Button></div>
                    <div><Button color='inherit' style={{ marginBottom: '15px' }}><MapPinned size='30px' /></Button></div>
                    </div>
                </div>
                <div className='te'>
                    <h1 style={{ fontFamily: 'Okra, Helvetica, sans-serif', fontSize: '50px', marginLeft: '20px' }}>HOTSPOTS</h1>
                </div>
                <div className='in'>

                    <button>
                        <div className='cit' style={{ backgroundImage: `url(${image1})` }}
                        > <div className='osc'>                 <h2  className='pp' style={{fontSize:'40px'}}>CHENNAI</h2></div>

                        </div></button>

                    <button><div className='cit' style={{ backgroundImage: `url(${image2})` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>COIMBATORE</h2></div>
                    </div></button>
                    <button><div className='cit' style={{ backgroundImage: `url(${image3})` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>MADURAI</h2></div>
                    </div></button>
                </div>
                <div className='kj'>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url(${image4})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TIRUNELVELI</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url(${image5})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TRICHY</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url(${image6})` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TANJORE</h2></div>
                        </div></button>

                </div>
                <div className='ma'>
                <Marquee><b>
  LIMITED OFFER : USE CODE FF100 FOR $3.45 DISCOUNT!!</b>
</Marquee></div>
                
            </div>
            <Toaster
  position="top-right"
  reverseOrder={false}
/>
        </>
    );
}
export default First;