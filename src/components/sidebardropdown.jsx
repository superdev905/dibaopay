import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Sidebardropdown = (props) => {
    return (
        <div className='sidebar_dropdown'>
            <Select
                displayEmpty
                label="Age"
            >
                <MenuItem>
                    {props.name}
                </MenuItem>
            </Select>
        </div>
    )
}

export default Sidebardropdown;