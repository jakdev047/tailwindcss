import React from 'react';
import { Link } from 'react-router-dom';
import {
    OtherHousesOutlined,
    DescriptionOutlined,
    EventNoteOutlined,
    SettingsOutlined
} from '@mui/icons-material';

export default function FooterSection() {
    return (
        <div className="footer-div">
            <ul>
                <li>
                    <Link to="/" className="text-menuColor hover:text-secondaryColor"><OtherHousesOutlined /></Link>
                </li>
                <li>
                    <Link to="/inventory" className="text-menuColor hover:text-secondaryColor"><DescriptionOutlined /></Link>
                </li>
                <li>
                    <Link to="/documents" className="text-menuColor hover:text-secondaryColor"><EventNoteOutlined /></Link>
                </li>
                <li>
                    <Link to="/settings" className="text-menuColor hover:text-secondaryColor"><SettingsOutlined /></Link>
                </li>
            </ul>
        </div>
    )
}
