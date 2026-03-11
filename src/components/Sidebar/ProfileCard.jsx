import { Image } from 'react-bootstrap';
import { images } from '../../assets/images';
import './Sidebar.scss';

const ProfileCard = () => {
    return (
        <div className="sidebar-card profile-card">
            <div className="cover-img-container">
                <Image src={images.userProfileCoverImg} alt="Cover" className="cover-img" />
            </div>
            <div className="profile-info-container text-center">
                <div className="profile-img-wrapper">
                    <Image src={images.userProfileImg} alt="Profile" roundedCircle className="main-profile-img" />
                </div>
                <h5 className="user-name mt-2 mb-1">Albert Flores</h5>
                <p className="user-role mb-1">
                    Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
                </p>
                <p className="user-location">Clinton, Maryland</p>
            </div>
        </div>
    );
};

export default ProfileCard;