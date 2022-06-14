//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Wallpaper } from '../images';
//COMPONENTS
import { Header, FirstSection, SecondSection, ThirdSection, FourthSection, FifthSection } from '../components';


export default function() {
    return (
        <div className="app">
            <Header/>

            <div className="wallpaper">
                <Image src={Wallpaper} alt="Wallpaper" objectFit="contain"/>
            </div>

            <FirstSection/>

            <SecondSection/>

            <ThirdSection/>

            <FourthSection/>

            <FifthSection/>
        </div>
    )
}