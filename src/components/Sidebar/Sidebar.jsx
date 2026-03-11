import Calender from './Calender';
import ProfileCard from './ProfileCard';
import './Sidebar.scss';
import Stats from './Stats';

const Sidebar = () => {
    return (
        <div className="sidebar-container d-flex flex-column gap-3 pt-1 sticky-top">
            <ProfileCard />
            <Stats />
            <Calender />
        </div>
    );
};

export default Sidebar;