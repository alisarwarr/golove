import { useState } from 'react';
//MATERIAL-UI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
//NEXTJS-IMAGE
import Image from 'next/image';
//IMAGE
import { Logo } from '../images';
//NEXTJS-ROUTER
import { useRouter } from 'next/router';


function Header() {
    const router = useRouter();


    const screen1200= useMediaQuery('(min-width:1200px)');
    const screen980 = useMediaQuery('(min-width:980px)');
    const screen860 = useMediaQuery('(min-width:860px)');
    const screen480 = useMediaQuery('(min-width:480px)');


    const [ anchorEl, setAnchorEl ] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);


    return (
        <AppBar className="header" position="sticky" elevation={4}>
            <Toolbar className="header_toolbar">
                <div className="header_toolbar_logo">
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
                    screen480 ? (
                        <div className="header_toolbar_btns">
                            <a href='/' style={{ fontWeight: router.asPath==='/'?"bold":"" }}> Home </a>
                            <a href='/privacy' style={{ fontWeight: router.asPath==='/privacypolicy'?"bold":"" }}> Privacy Policy </a>
                        </div>
                    ) : (
                        <div className="header_toolbar_btns">
                            <IconButton onClick={handleClick}>
                                <MenuIcon fontSize='small'/>
                            </IconButton>

                            <Menu
                                open={open}
                                onClose={handleClose}
                                anchorEl={anchorEl}
                                anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                                className="header_toolbar_btns_menus"
                            >
                                <MenuItem dense> <a href='/'> Home </a> </MenuItem>
                                <MenuItem dense> <a href='/privacypolicy'> Privacy Policy </a> </MenuItem>
                            </Menu>
                        </div>
                    )
                }
            </Toolbar>
        </AppBar>
    )
}

export default Header;