import './left_side.css'
import Links from './links'


export default function LeftSide() {
  return (
    // profile info 
    <div className="profile">
      <img className="profile-picture" height="150" width="150" src="MyImages/profile-picture.jpg" alt={``}/>
      <p className="profile-name">Bradley Cardona</p>
      {/* <p className="profile-description">Full-time learner.</p> */}
      <p className="profile-description">
        A full-time learner. 
        <br>
        </br>
        Mathematics student at Allegheny College.
      </p>

      {/* links  */}
      <div className="links">
        <Links image={'MyImages/Github_cat_dark.png'} link={'https://github.com/BMCARDONA'} text={'@bmcardona'} />
        <Links image={"https://img.icons8.com/fluency/48/000000/new-post.png"} link={'mailto:cardonab3@allegheny.edu'} text={'cardonab3@allegheny.edu'} />
        <Links image={'MyImages/LinkedIn-icon.png'} link={'https://www.linkedin.com/in/bradley-cardona/'} text={'bradley-cardona'} />
        {/* <Links image={} link={'https://open.spotify.com/playlist/6wZRMpw2OX5EzgmXdGaKG0?si=96c5fbb2cba14c5c'} /> */}
      </div>
    </div>
  )
}