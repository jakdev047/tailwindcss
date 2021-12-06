import {
  OtherHousesOutlined,
  DescriptionOutlined,
  EventNoteOutlined,
  SettingsOutlined,
  AccountTreeOutlined,
  GestureOutlined
} from '@mui/icons-material';


export const menuList = [
  {
    id: 1,
    label: "Dashboard",
    to: "/",
    icon: <OtherHousesOutlined />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 2,
    label: "Inventory",
    to: "/inventory",
    icon: <DescriptionOutlined />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 3,
    label: "Documents",
    to: "/documents",
    icon: <EventNoteOutlined />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 4,
    label: "Settings",
    to: "/settings",
    icon: <SettingsOutlined />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 5,
    label: "Typescript",
    to: "/typescript",
    icon: <AccountTreeOutlined />,
    isFirstLabel: false,
    subs: [],
  },
  {
    id: 6,
    label: "SVG",
    to: "/svg",
    icon: <GestureOutlined />,
    isFirstLabel: false,
    subs: [],
  },
];
