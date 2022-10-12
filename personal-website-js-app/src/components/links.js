
export default function Links (props) {
  return (
    <div className='specific-link'>
      <img height="20" width="22" src={props.image} alt={``}/>
      <a className="link-properties" href={props.link}>
        {props.text}
      </a>
    </div>
  )
}