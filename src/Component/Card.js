export default function Card(props) {
  return(
    <div className = 'cards'>
      <div className = 'card'>
        <img  src = {props.imgsrc} alt = 'img' className = 'img' />
        <h4 className = 'span'>{props.name}</h4>
      </div>

    </div>
  ); 
}
