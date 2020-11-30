import React from 'react';
import DatePicker from "react-datepicker";
import Dropdown from 'react-dropdown';
import "react-datepicker/dist/react-datepicker.css";
import 'react-dropdown/style.css';

function SideMenu(props) {

    const dropdownOptions = [
        'default',
        'dark',
        'pink', 
        'purple', 
        'yellow'
    ];

    const { date, theme, setTheme, setDate } = props;

    return (
        <div>
            <h3>Settings </h3>
            <div className="date-container">
                <label className="label">Date</label>
                <DatePicker selected={date} onChange={date => setDate(date)} />
            </div>

            <div>
                <label className="label">Theme</label>
                <Dropdown options={dropdownOptions}  value={theme} onChange={theme => setTheme(theme.value)} placeholder="Select a theme" />
            </div>
        </div>
    )
}

export default SideMenu;