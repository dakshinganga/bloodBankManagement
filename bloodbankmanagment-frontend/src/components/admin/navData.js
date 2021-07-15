import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import HotelIcon from "@material-ui/icons/Hotel";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import CachedIcon from "@material-ui/icons/Cached";
import ReplayIcon from "@material-ui/icons/Replay";
import MoveToInboxIcon from "@material-ui/icons/MoveToInbox";

export const navData = [
	{
		Icon: HomeIcon,
		title: "Home",
		route: "/admin/Home",
	},
	{
		Icon: PersonIcon,
		title: "Donor",
		route: "/admin/Donor",
	},
	{
		Icon: HotelIcon,
		title: "Patient",
		route: "/admin/Patient",
	},
	{
		Icon: ControlPointIcon,
		title: "Donations",
		route: "/admin/Donations",
	},
	{
		Icon: CachedIcon,
		title: "Blood Requests",
		route: "/admin/BloodRequests",
	},
	{
		Icon: ReplayIcon,
		title: "Request History",
		route: "/admin/RequestHistory",
	},
	{
		Icon: MoveToInboxIcon,
		title: "Blood Stock",
		route: "/admin/BloodStock",
	},
];
