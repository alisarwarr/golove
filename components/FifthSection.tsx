//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Logo, Fb, Twitter, Msg, Insta } from '../images';


function FifthSection() {
    const screen1200= useMediaQuery('(min-width:1200px)');
    const screen980 = useMediaQuery('(min-width:980px)');
    const screen860 = useMediaQuery('(min-width:860px)');
    const screen645 = useMediaQuery('(min-width:645px)');


    return (
        <div className="fifthsection">
            <div className="fifthsection_content">
                <div className="fifthsection_content_left">
                    <div className="fifthsection_content_left_logo">
                        {
                            screen860 ?
                            screen980 ?
                            screen1200 ?
                            <Image src={Logo} alt="logo"/> :
                            <Image src={Logo} alt="logo" width={120} height={40}/> :
                            <Image src={Logo} alt="logo" width={110} height={37}/> :
                            <Image src={Logo} alt="logo" width={105} height={33}/>
                        }
                    </div>

                    {
                        screen645 && (
                            <div className="fifthsection_content_left_links">
                                <a href='/privacypolicy'> Privacy Policy </a>
                                <a href='/termsofuse'>    Terms of Use   </a>
                            </div>
                        )
                    }
                </div>

                <div className="fifthsection_content_right">
                    <div className="fifthsection_content_right_icons">
                        <a href="https://m.facebook.com/101142885373595" target="_blank"> <Image src={Fb} alt="Fb"/> </a>
                        <a href="https://twitter.com/GoloveId?t=NLU6Zrpvq0RAN5R3xmRH_A&s=09" target="_blank"> <Image src={Twitter} alt="Twitter"/> </a>
                        <a href="https://telegram.org" target="_blank"> <Image src={Msg} alt="Msg"/> </a>
                        <a href="https://instagram.com/golove.id?igshid=YmMyMTA2M2Y=" target="_blank"> <Image src={Insta} alt="Insta"/> </a>
                    </div>

                    {
                        screen645 && (
                            <Typography className="fifthsection_content_right_para">
                                © 2022 All Rights Reserved
                            </Typography>
                        )
                    }
                </div>
            </div>

            {
                !screen645 && (
                    <div className="fifthsection_extra">
                        <div className="fifthsection_extra_links">
                            <a href='/privacypolicy'> Privacy Policy </a>
                            <a href='/termsofuse'>    Terms of Use   </a>
                            <a href='/legal'>         Legal          </a>
                        </div>

                        <Typography className="fifthsection_extra_para">
                            © 2022 All Rights Reserved
                        </Typography>                
                    </div>
                )
            }
        </div>
    )
}

export default FifthSection