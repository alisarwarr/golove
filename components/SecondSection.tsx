//MATERIAL-UI
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Arrow, Line, Fact1, Fact2, Fact3, Persons } from '../images';


function SecondSection() {
    const screen860 = useMediaQuery('(min-width:860px)');
    const screen700 = useMediaQuery('(min-width:700px)');
    const screen590 = useMediaQuery('(min-width:590px)');


    return (
        <div className="secondsection">
            <Typography className="secondsection_text"> Statistik Jomlo di Indonesia </Typography>

            <div className="secondsection_row">
                <div className="secondsection_row_arrow">
                    {
                        screen590 ?
                        screen700 ?
                        screen860 ?
                        <Image src={Arrow} alt="Arrow" width={210} height={170}/> :
                        <Image src={Arrow} alt="Arrow" width={150} height={110}/> :
                        <Image src={Arrow} alt="Arrow" width={100} height={90}/>  :
                        <Image src={Arrow} alt="Arrow" width={80} height={70}/>
                    }
                </div>
    
                <div className="secondsection_row_line">
                    {
                        screen590 ?
                        screen700 ?
                        screen860 ?
                        <Image src={Line} alt="Line" width={180} height={140}/> :
                        <Image src={Line} alt="Line" width={120} height={80}/>  :
                        <Image src={Line} alt="Line" width={70} height={60}/>   :
                        <Image src={Line} alt="Line" width={60} height={50}/>
                    }
                </div>
            </div>

            <div className="secondsection_cards">
                <div className="secondsection_cards_card">
                    <Image src={Fact1} alt="Fact1"/>
                </div>

                <div className="secondsection_cards_card">
                    <Image src={Fact2} alt="Fact2"/>
                </div>

                <div className="secondsection_cards_card">
                    <Image src={Fact3} alt="Fact3"/>
                </div>
            </div>    

            <div className="secondsection_foot">
                <div className="secondsection_foot_left">
                    <Typography className="secondsection_foot_left_text"> Sekarang Kamu Tidak Perlu Takut Lagi </Typography>
                    <Typography className="secondsection_foot_left_para"> Golove akan membantu kamu menemukan pasangan terbaik untuk kamu </Typography>
                </div>

                <div className="secondsection_foot_right">
                    <Image src={Persons} alt="Persons"/>
                </div>
            </div>
        </div>
    )
}

export default SecondSection;