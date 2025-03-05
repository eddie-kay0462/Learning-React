import ProfilePic from './assets/mee.jpg';
function Card(){

    return(
        <div className="card">
            <img className="cardImage" src={ProfilePic} alt="profile picture" />
            <h2 className="cardTitle">Edward Ofosu Mensah Jnr</h2>
            <p className='card-text'>I make Youtube videos and teach programming!</p>
            <button className="cardButton">Subscribe</button>
        </div>
    );
}

export default Card;