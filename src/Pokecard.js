import './Pokecard.css';
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon'
const Pokecard = ({id,name,exp, type}) => {
  const img= `${POKE_API}/${id}.png`
  const upperType = type.slice(0,1).toUpperCase() + type.slice(1)
  return (
    <div className="Pokecard">
      <div className="Pokecard-title">{ name }</div>
      <img className="Pokecard-image" src={img} alt="pokemon-img"/>
      <div className="Pokecard-data">Type: {upperType}</div>
      <div className="Pokecard-data">EXP: {exp}</div>
    </div>
  )
}
export default Pokecard;