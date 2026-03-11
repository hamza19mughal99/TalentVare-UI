import { Button } from 'react-bootstrap';
import { ClockIcon, FavIcon, LocationIcon, MicrosoftTeamsIcon } from '../../assets/icons';
import './JobCard.scss';

const JobCard = ({ title, company, location, timePosted, applicants, isPromoted }) => {
    return (
        <div className="job-card custom-card">
            {isPromoted && <div className="promoted-badge">Promoted</div>}

            <div className="d-flex align-items-center mb-3">
                <div className="company-logo me-3">
                    <MicrosoftTeamsIcon />
                </div>
                <div>
                    <h6 className="job-title mb-0">{title}</h6>
                    <p className="company-name mb-0">{company}</p>
                </div>
            </div>

            <div className="job-details mb-3">
                <div className="detail-row d-flex align-items-center mb-1">
                    <LocationIcon className="detail-icon me-2" />
                    <span className="detail-text">{location}</span>
                </div>
                <div className="detail-row d-flex align-items-center">
                    <ClockIcon className="detail-icon me-2" />
                    <span className="detail-text">{timePosted} | <span className="text-primary-blue">{applicants}</span></span>
                </div>
            </div>

            <div className="card-actions d-flex justify-content-between align-items-center">
                <Button variant="primary" className="apply-btn flex-grow-1 me-3">
                    Apply Now
                </Button>
                <button className="fav-btn">
                    <FavIcon />
                </button>
            </div>
        </div>
    );
};

export default JobCard;
