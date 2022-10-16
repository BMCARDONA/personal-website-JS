import React from "react";
import "./right_side"
import LanguageColor from "./language_color";

export default class FetchGithubData extends React.Component {
  state = {
    person: null
  };

  async componentDidMount() {
    const url = "https://api.github.com/users/bmcardona/repos";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ person: data })
    console.log(data);
  }

  render() {

    if (!this.state.person) {
      return <div></div>;
    }

    const githubLink = this.state.person[this.props.index].html_url
    const deploymentLink = this.state.person[this.props.index].homepage

    const attributes = (deploymentLink === null) ? {href: githubLink} : {href: deploymentLink}

    return (
      <div className="card-container">
        <div className="title">
          <img height="20" width="20" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/200/000000/external-book-interface-kiranshastry-lineal-color-kiranshastry.png" alt={``}/>
          
          <a className="card-title" {...attributes}> 
             {this.state.person[this.props.index].name}
          </a>
        </div>


        <p className="card-description">{this.state.person[this.props.index].description}</p>

        <p className="language-content">
          <li className={this.state.person[this.props.index].language}>
            <span className="language-text-color">
                {this.state.person[this.props.index].language}
            </span>
          </li>
        </p>

        <p className="card-updated-at">Last updated: {this.state.person[this.props.index].pushed_at.substring(0, 10)}</p>

      </div>
    );
  }
}

