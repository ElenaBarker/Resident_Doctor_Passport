import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useHistory } from 'react-router-dom';

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [buttonLabel, setButtonLabel] = useState('Log In'); // State for button label
    const open = Boolean(anchorEl);
    const history = useHistory();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (label, path) => {
        setButtonLabel(label);
        setAnchorEl(null);
        history.push(path);
    };

    return (
        <div>
            <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {buttonLabel} {/* Display the current button label */}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose(buttonLabel)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => handleClose('Doctor', '/doctor')}>Doctor</MenuItem>
                <MenuItem onClick={() => handleClose('Organisation', '/organisation')}>Organisation</MenuItem>
            </Menu>
        </div>
    );
}
