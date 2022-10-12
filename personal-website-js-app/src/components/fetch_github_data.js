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
    console.log(data);
    this.setState({ person: data })
  }

  render() {

    if (!this.state.person) {
      return <div></div>;
    }

    return (
      <div className="card-container">
        <div className="title">
          <img height="20" width="20" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/200/000000/external-book-interface-kiranshastry-lineal-color-kiranshastry.png" alt={``}/>
          <a className="card-title" href={`${this.state.person[this.props.index].html_url}`}> 
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

        <p className="card-updated-at">Last updated: {this.state.person[this.props.index].updated_at.substring(0, 10)}</p>

      </div>
    );
  }
}

