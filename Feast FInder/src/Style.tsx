import { Typography ,AppBar,Toolbar,IconButton,Stack,TextField, Button} from "@mui/material";
import BrightnessHighRoundedIcon from '@mui/icons-material/BrightnessHighRounded';
const Style=()=>
{
    return(
        <>
            <AppBar color="secondary">
                <Toolbar>
                    <IconButton >
                        <BrightnessHighRoundedIcon/>
                    </IconButton>
                    <Typography variant="h4" sx={{flexGrow:1}}>FOOD</Typography>
                    <Stack direction='row' spacing={3}>
                    <Button variant="outlined" color="inherit">HOME</Button>
                    <Button variant="outlined" color="inherit">ABOUT</Button>
                    <Button variant="outlined" color="inherit">SELECT</Button>
                    </Stack>
                </Toolbar>
                <TextField variant="filled" size="small" color="success" label="Name"/>
            </AppBar>
        </>
    );
}
export default Style;