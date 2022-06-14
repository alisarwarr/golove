//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Mobile, Icon1, Icon2, Icon3, Icon4, Icon5 } from '../images';


function ThirdSection() {
    const screen725 = useMediaQuery('(min-width:725px)');
    
    
    return (
        <div className="thirdsection">
            {
                screen725 && (
                    <div className="thirdsection_left">
                        <Image src={Mobile} alt="Mobile"/>
                    </div>
                )
            }

            <div className="thirdsection_right">
                <Typography className="thirdsection_right_text"> Our Feature </Typography>
                <Typography className="thirdsection_right_para"> We are looking forward to solving your dating problem. We listen and collect all ideas from our singles communities before we start developing our main and future features. Do you have any ideas? Do not hesitate to contact us! </Typography>

                {
                    !screen725 && (
                        <div className="thirdsection_right_pic">
                            <Image src={Mobile} alt="Mobile"/>
                        </div>        
                    )
                }

                <div className="thirdsection_right_options">
                    <div className="thirdsection_right_options_option">
                        <div className="thirdsection_right_options_option_left">
                            <Image src={Icon1} alt="Icon1"/>
                            <div/>
                        </div>

                        <div className="thirdsection_right_options_option_right">
                            <Typography className="thirdsection_right_options_option_right_text"> Group Chat </Typography>
                            <Typography className="thirdsection_right_options_option_right_para"> Waiting for a Match can be boring. With Group Chat you can chat with other singles or potential Match in prior. We categorize the group based on the topics. </Typography>
                        </div>
                    </div>

                    <div className="thirdsection_right_options_option">
                        <div className="thirdsection_right_options_option_left">
                            <Image src={Icon2} alt="Icon2"/>
                            <div/>
                        </div>

                        <div className="thirdsection_right_options_option_right">
                            <Typography className="thirdsection_right_options_option_right_text"> Chat and Video Call </Typography>
                            <Typography className="thirdsection_right_options_option_right_para"> Providing your home number can sometimes be risky. You can use our chat and video call features to make your communication more convenient. </Typography>
                        </div>
                    </div>

                    <div className="thirdsection_right_options_option">
                        <div className="thirdsection_right_options_option_left">
                            <Image src={Icon3} alt="Icon3"/>
                            <div/>
                        </div>

                        <div className="thirdsection_right_options_option_right">
                            <Typography className="thirdsection_right_options_option_right_text"> Worldwide Distance Filter </Typography>
                            <Typography className="thirdsection_right_options_option_right_para"> You prefer someone near you or someone from another part of the world? With this function you are perfectly equipped. </Typography>
                        </div>
                    </div>

                    <div className="thirdsection_right_options_option">
                        <div className="thirdsection_right_options_option_left">
                            <Image src={Icon4} alt="Icon4"/>
                            <div/>
                        </div>

                        <div className="thirdsection_right_options_option_right">
                            <Typography className="thirdsection_right_options_option_right_text"> Speed Dating Event </Typography>
                            <Typography className="thirdsection_right_options_option_right_para"> You want to go on a date as soon as possible? Use our in-app speed dating event and meet your match now. </Typography>
                        </div>
                    </div>

                    <div className="thirdsection_right_options_option">
                        <div className="thirdsection_right_options_option_left">
                            <Image src={Icon5} alt="Icon5"/>
                            <div/>
                        </div>

                        <div className="thirdsection_right_options_option_right">
                            <Typography className="thirdsection_right_options_option_right_text"> Filter Agama </Typography>
                            <Typography className="thirdsection_right_options_option_right_para"> The same religion can be a big PLUS when looking for a match. This filter will help you. </Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdSection;