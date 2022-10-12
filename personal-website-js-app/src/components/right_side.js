
import FetchGithubData from './fetch_github_data'
import './right_side.css'
// import MyParticle from './my-particle'

export default function RightSide() {
  return (
    <div className="subdivider">
        <p className="my-repositories-title">
          My Projects
          <p className="subheading">Recent GitHub repositories that I've built.</p>
        </p> 
        <div className="super-container">
          <FetchGithubData index={8}/>
          <FetchGithubData index={11}/>
          <FetchGithubData index={12}/>
          <FetchGithubData index={9}/>
          <FetchGithubData index={1}/> 
          <FetchGithubData index={10}/>
        </div>  
    </div>
  )
}
