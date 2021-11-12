import React from 'react';
import ActionMenu from '../../common/ActionMenu';
import { RemoveRedEyeOutlined, EditOutlined } from "@mui/icons-material";

export default function TopNavigation() {
   return (
      <>
         <div className="top-navigation">
            <div className="logo-wrapper">
            <ActionMenu
      options={[
         {
            value: 1,
            label: 'View',
            icon: <RemoveRedEyeOutlined sx={{ marginRight: "10px" }} />,
            onClick: () => {
               alert('View One');
            }
         },
         {
            value: 2,
            label: 'Edit',
            icon: <EditOutlined sx={{ marginRight: "10px" }} />,
            onClick: () => {
               alert('Edit One');
            }
         }
      ]}
   />
            </div>
            <div className="top-menu"></div>
         </div>
      </>
   );
}
