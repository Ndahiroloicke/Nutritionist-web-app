import PropTypes from 'prop-types';
import likepic from '../../../assets/6cc9cba9-e626-443c-a01b-78adc5f5bca7.png';
import profilepic from '../../../assets/66ec857a-d1ba-4efe-8caa-fa64245a1167.png';
import { useState } from 'react';
const Firstblogs = ({ blogtitle, homepic,profile }) => {
  const [like,setlike]= useState(false);
  const handlelike=()=>{
    setlike(true)
  }
  return (
    <div className='firstblog'>
      <img src={homepic} className='bigone' alt="Blog Thumbnail" />
      <div>
        <div className='tigress'>
          <p>{blogtitle}</p>
          <h3>The Benefits of Hydration for Weight Loss</h3>
          <p className="small-p">
            Discover how staying hydrated can support your weight loss goals and improve overall health.
          </p>
        </div>
        <div className="profile">
          <img src={profile} alt="Author Profile" className='person-image' />
          <div className='profile-description'>
            <h3>Emily Johnson</h3>
            <p>23 May 2023 - 5 min read</p>
          </div>
          <div className="profile-icons">
            <img src={likepic} alt="Like"onClick={handlelike} className={like ? 'liked' : 'likepic'} />
            <img src={profilepic} alt="Share" className='share' />
          </div>
        </div>
      </div>
    </div>
  );
};

Firstblogs.propTypes = {
  blogtitle: PropTypes.string.isRequired,
  homepic: PropTypes.string.isRequired,
  profile: PropTypes.string.isRequired
};

export default Firstblogs;
