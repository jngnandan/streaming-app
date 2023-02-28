import './index.css'

import { Link } from "react-router-dom";


const ProfilePage = () => {
    return(
        <div className='background'>
            <div className='boxingPage'>
            <div>
            <Link to='/'>
            <img src='../assets/images/movies.png'/>
            </Link>

            </div>
            <h1 className='heading'>Who is watching?</h1>
            <ul className='pofiles'>
                <Link to='/'>
                <li className='box'>
                <img className='profilePic' src='../assets/images/profile_normal.png'/>
                </li>
                </Link>

                <Link to='/'>
                <li className='box'>
                <img className='profilePic' src='../assets/images/profile_butterfly.png'/>
                </li>
                </Link>

                <Link to='/'>
                <li className='box'>
                <img className='profilePic' src='../assets/images/profile_normal2.png'/>
                </li>
                </Link>

                <Link to='/'>
                <li className='box'>
                <img className='profilePic' src='../assets/images/profile_kids.png'/>
                </li>
                </Link>

            </ul>

            </div>

        </div>
    )
}
export default ProfilePage