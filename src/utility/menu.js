import {
  OtherHousesOutlined,
  DescriptionOutlined,
  EventNoteOutlined,
  SettingsOutlined
} from '@mui/icons-material';


export const menuList = [
  {
    id: 1,
    label: "Dashboard",
    to: "/",
    icon: <OtherHousesOutlined sx={{ marginRight: "13px" }} />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 2,
    label: "Inventory",
    to: "/inventory",
    icon: <DescriptionOutlined sx={{ marginRight: "13px" }} />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 3,
    label: "Documents",
    to: "/documents",
    icon: <EventNoteOutlined sx={{ marginRight: "13px" }} />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 4,
    label: "Settings",
    to: "/settings",
    icon: <SettingsOutlined sx={{ marginRight: "13px" }} />,
    isFirstLabel: false,
    subs: [],
  },
];
