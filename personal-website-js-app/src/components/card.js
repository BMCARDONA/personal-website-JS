

export default function Card({person}, {index}) {
  <div className="card-container">
    <div className="title">
      <img height="20" width="20" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/200/000000/external-book-interface-kiranshastry-lineal-color-kiranshastry.png" alt={``}/>
      <a className="card-title" href={`${person[index].html_url}`}> 
        {person[index].name}
      </a>
    </div>
    <p className="card-description">{person[index].description}</p>
    <p className="card-language">{person[index].language}</p>
    <p className="card-updated-at">Last updated: {person[index].updated_at.substring(0, 10)}</p>
  </div>
}
