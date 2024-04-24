import Proptypes from 'prop-types'
import pic from '../assets/45f09264-8b59-4a1a-b144-e7e5ce462478.png'
const Overview = ({paragraph,username,userpic}) => {
  return (
    <div>
        <div className='test'>
        <div>
            <img src={pic} className='comments'/>
            <p>{paragraph}</p>
        </div>
        <div className='profile-test'>
            <img src={userpic} alt="" />
            <h3>{username}</h3>
        </div>
        </div>
    </div>
  )
}

Overview.propTypes = {
    paragraph:Proptypes.string.isRequired,
    username:Proptypes.string.isRequired,
    userpic:Proptypes.string.isRequired
}

export default Overview;