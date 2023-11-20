
import './Fi.css';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import { Search, MapPinned } from 'lucide-react';
import { useEffect } from 'react';
import {toast,Toaster} from 'react-hot-toast';
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
                        <div className='cit' style={{ backgroundImage: `url('data:image/jpeg;base64,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')` }}
                        > <div className='osc'>                 <h2  className='pp' style={{fontSize:'40px'}}>CHENNAI</h2></div>

                        </div></button>

                    <button><div className='cit' style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdB69tiFo-bMr2sBpWWsHe4kJqq9e42HfWcg&usqp=CAU')` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>COIMBATORE</h2></div>
                    </div></button>
                    <button><div className='cit' style={{ backgroundImage: `url('https://www.abhibus.com/blog/wp-content/uploads/2023/04/Madurai-Meenakshi-Temple-History-Timings-How-to-Reach.jpg')` }}><div className='osc'>
                        <h2 className='pp' style={{fontSize:'40px'}}>MADURAI</h2></div>
                    </div></button>
                </div>
                <div className='kj'>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url('https://mediaim.expedia.com/destination/1/0d5f02078ac5e82d21510b06f4fa3e05.jpg')` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TIRUNELVELI</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url('https://th.bing.com/th/id/OIG.nGiBAax4PegQzPvFenEb?pid=ImgGn')` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TRICHY</h2></div>
                        </div></button>
                    <button>
                        <div className='cit' style={{ backgroundImage: `url('https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/thanjavur-1655294212_8d67c2fdaa46899ddda7.webp')` }}><div className='osc'>
                            <h2 className='pp' style={{fontSize:'40px'}}>TANJORE</h2></div>
                        </div></button>

                </div>
                <div className='ma'>
                <div className="marquee-container">
                    <div className="marquee-content">
                    
                        <h2 style={{fontSize:'50px',fontFamily:'Okra, Helvetica, sans-serif'}}>USE CODE: FOODFEAST100 FOR $3.45!</h2>
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
export default First;