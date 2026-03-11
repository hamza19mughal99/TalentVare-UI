import './Sidebar.scss';

const Stats = () => {
    const statItems = [
        { label: 'Profile Visitors', value: 140, padding: "0px 0px 5px 0px" },
        { label: 'Resume Viewers', value: 20, padding: "5px 0px" },
        { label: 'My Jobs', value: 88, padding: "5px 0px 0px 0px" },
    ];

    return (
        <div className="sidebar-card stats-card">
            <ul className="list-unstyled mb-0">
                {statItems.map((item, index) => (
                    <li key={index} className="d-flex justify-content-between align-items-center stat-item" style={{ padding: item.padding }}>
                        <span className="stat-label">{item.label}</span>
                        <span className="stat-value">{item.value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Stats;