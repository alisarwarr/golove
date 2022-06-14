//MATERIAL-UI
import Typography from '@mui/material/Typography';
//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Playstore, Appstore } from '../images';


function FourthSection() {
    return (
        <div className="fourthsection">
            <div className="fourthsection_content">
                <Typography className="fourthsection_content_text"> Download The App </Typography>
                <Typography className="fourthsection_content_para"> Become part of our Golove community and enjoy all the benefits. Support us with love to help others find their loved ones! </Typography>

                <div className="fourthsection_content_pics">
                    <a className="fourthsection_content_pics_playstore" href="https://play.google.com/store/apps/details?id=com.golove.app" target="_blank">
                        <Image src={Playstore} alt="Playstore"/>
                    </a>
    
                    <a className="fourthsection_content_pics_appstore" href="https://apps.apple.com/de/app/golove/id1563825781" target="_blank">
                        <Image src={Appstore} alt="Appstore"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FourthSection;