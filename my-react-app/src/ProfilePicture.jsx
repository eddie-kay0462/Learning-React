//add the image url in the imageurl object
import ProfilePic from './assets/mee.jpg';
function ProfilePicture() {
    const imageurl = {ProfilePic};
    const handleClick = () => {
        console.log("Kay!");
    }
    return (
    <div>
        <img src={imageurl.ProfilePic} alt="profile picture" className = "profilePic" onClick={handleClick}/>
    </div>
    );
}


export default ProfilePicture;