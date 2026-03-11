import { Col, Row } from 'react-bootstrap';
import JobCard from '../../components/JobCard/JobCard';
import './FindJobs.scss';

const JobListingSection = ({ title, categoryUrlText, jobs }) => {
    return (
        <div className="job-listing-section">
            <div className="section-header d-flex align-items-center mb-3">
                <h4 className="section-title mb-0 me-3">{title}</h4>
                <a href="#" className="section-link">
                    See {categoryUrlText} Jobs
                </a>
            </div>

            <Row xs={2} sm={2} md={3} lg={4} xl={5} className="g-3">
                {jobs.map((job, index) => (
                    <Col key={index}>
                        <JobCard {...job} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default JobListingSection;
