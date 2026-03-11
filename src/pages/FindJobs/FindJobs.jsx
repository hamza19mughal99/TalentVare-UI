import { Button, Form } from 'react-bootstrap';
import { ChevronDownIcon, SearchIcon } from '../../assets/icons';
import './FindJobs.scss';
import JobListingSection from './JobListingSection';

const FindJobs = () => {

    const mockJobs = Array(5).fill({
        title: "UI/UX Designer",
        company: "Teams",
        location: "Seattle, USA (Remote)",
        timePosted: "1 day ago",
        applicants: "22 applicants",
        isPromoted: false
    });

    const promotedJobs = Array(5).fill({
        ...mockJobs[0],
        isPromoted: true
    });

    const recommendedJobs = Array(10).fill({
        ...mockJobs[0]
    });

    const latestJobs = Array(15).fill({
        ...mockJobs[0]
    });

    const similarJobs = ["Frontend", "Backend", "Graphic Designer"];

    return (
        <div className="find-jobs-page">
            <div className="header-section mb-4 mt-3">
                <h2 className="greeting-text mb-1">
                    Find your Dream Job, <span>Albert!</span>
                </h2>
                <p className="subtitle-text mb-4">
                    Explore the latest job openings and apply for the best opportunities available today!
                </p>

                <div className="search-filter-card d-flex align-items-center mb-4">
                    <div className="filter-input-group flex-grow-1">
                        <Form.Control
                            type="text"
                            placeholder="Job Title, Company, or Keywords"
                            className="search-input border-0 shadow-none bg-transparent"
                        />
                    </div>

                    <div className="divider" />

                    <div className="filter-dropdown-group px-3 d-flex align-items-center justify-content-between">
                        <span className="dropdown-label text-muted">Select Location</span>
                        <ChevronDownIcon className="dropdown-icon" />
                    </div>

                    <div className="divider" />

                    <div className="filter-dropdown-group px-3 d-flex align-items-center justify-content-between">
                        <span className="dropdown-label text-muted">Job Type</span>
                        <ChevronDownIcon className="dropdown-icon" />
                    </div>

                    <div className="search-btn-container ms-2">
                        <Button variant="primary" className="search-btn d-flex align-items-center justify-content-center gap-2">
                            <SearchIcon stroke="#ffffff" />
                            Search
                        </Button>
                    </div>
                </div>

                <div className="similar-tags-container d-flex align-items-center gap-2">
                    <span className="similar-label text-muted me-2">Similar:</span>
                    {
                        similarJobs?.map((item, index) => (
                            <button className="tag-btn" key={index}>{item}</button>
                        ))
                    }
                </div>
            </div>

            <div className="job-lists-container">
                <JobListingSection title="Featured Jobs" categoryUrlText="Featured" jobs={promotedJobs} />
                <JobListingSection title="Recommended Jobs" categoryUrlText="Recommended" jobs={recommendedJobs} />
                <JobListingSection title="Latest Jobs" categoryUrlText="Latest" jobs={latestJobs} />
            </div>
        </div>
    );
};

export default FindJobs;