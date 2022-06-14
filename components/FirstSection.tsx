//MATERIAL-UI
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import ShopIcon from '@mui/icons-material/Shop';
import AppleIcon from '@mui/icons-material/Apple';


function FirstSection() {
    const screen980 = useMediaQuery('(min-width:980px)');


    return (
        <div className="firstsection">
            <Typography className="firstsection_text"> 1st Indonesian Premium Dating App </Typography>
            <Typography className="firstsection_para"> Dating can be really frustrating sometimes. But don't worry, we've got your back! We are here to support you with our authentic, responsive and fresh solution from the singles communities. We created this app with love to help you find your loved one because we believe that "Everyone deserves LOVE". What are you waiting for? Be part of our Golove Community! </Typography>
    
            <div className="firstsection_btns">
                <a href="https://play.google.com/store/apps/details?id=com.golove.app" target="_blank"> <Button variant="contained"> <ShopIcon fontSize={screen980?"medium":"small"}/> <p> Google Play </p> </Button> </a>
                <a href="https://apps.apple.com/de/app/golove/id1563825781" target="_blank"> <Button variant="contained"> <AppleIcon fontSize={screen980?"medium":"small"}/> <p> App Store </p> </Button> </a>
            </div>
        </div>
    )
}

export default FirstSection;