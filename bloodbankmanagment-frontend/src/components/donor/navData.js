import HomeIcon from "@material-ui/icons/Home";
// import PersonIcon from "@material-ui/icons/Person";
// import HotelIcon from "@material-ui/icons/Hotel";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import CachedIcon from "@material-ui/icons/Cached";
import ReplayIcon from "@material-ui/icons/Replay";
// import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";

export const navData = [
	{
		Icon: HomeIcon,
		title: "Home",       
		route: "/donor/Home",
	},
	{
		Icon: ControlPointIcon,
		title: "Donate Blood",
		route: "/donor/donateBlood",
	},
	
	{
		Icon: ReplayIcon,
		title: "Donation History",
		route: "/donor/donationHistory",
	},
	{
		Icon: ControlPointIcon,
		title: "Blood Request",
		route: "/donor/requestBlood",
	},
    {
		Icon: CachedIcon,
		title: "Request History",
		route: "/donor/requestHistory",
	},
];
