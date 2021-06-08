import DvrIcon from "@material-ui/icons/Dvr";
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EventIcon from "@material-ui/icons/Event";
import DescriptionIcon from "@material-ui/icons/Description";
import GroupIcon from "@material-ui/icons/Group";
import AssessmentIcon from "@material-ui/icons/Assessment";
import TimelineIcon from '@material-ui/icons/Timeline';
import PersonIcon from "@material-ui/icons/Person";

export const sidebarList = [
  { id: 0, name: "Dashboard", icon: <DvrIcon /> },
  { id: 1, name: "Study", icon: <LibraryBooksIcon /> },
  { id: 2, name: "Schedule", icon: <EventIcon /> },
  { id: 3, name: "Notes", icon: <DescriptionIcon /> },
  { id: 4, name: "Mentor", icon: <GroupIcon /> },
  { id: 5, name: "Assesment", icon: <AssessmentIcon /> },
  { id: 6, name: "Report", icon: <TimelineIcon /> },
  { id: 7, name: "My Parent", icon: <PersonIcon /> },
];
