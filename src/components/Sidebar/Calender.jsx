import { ChevronDownIcon } from '../../assets/icons';
import './Sidebar.scss';

const Calender = () => {
    return (
        <div className="sidebar-card calender-card d-flex justify-content-between align-items-center">
            <div>
                <h6 className="calender-title mb-0">My calendar</h6>
                <p className="calender-subtitle mb-0">Upcoming Interviews</p>
            </div>
            <div className="chevron-container">
                <ChevronDownIcon />
            </div>
        </div>
    );
};

export default Calender;