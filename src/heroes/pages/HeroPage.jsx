import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
  const {heroid} = useParams();
  
  const hero = useMemo( () => getHeroById(heroid), [heroid]);
  const navigate = useNavigate();
  const onNavigateback = () => {
    navigate(-1);
  }
  if( !hero ) {
    return <Navigate to={'/marvel'}/>
  }
  
  return (
    <>
<div className= {hero.publisher == 'DC Comics' ? 'row mt-5 heroDC animate__animated animate__fadeInLeft' : 'row mt-5  heroMarvel animate__animated animate__fadeInLeft'}>
  <div className="col-3 ms-5">
    <img src={`../assets/heroes/${heroid}.jpg`} alt={hero.superhero} className="img-thumbnail"/>
  </div>

  <div className="col-2 ms-5">
    <h3>{hero.superhero}</h3>
    <ul className="list-group list-group-flush ">
      <li className="list-group-item carat">{hero.alter_ego}</li>
      <li className="list-group-item">{hero.publisher}</li>
      <li className="list-group-item">{hero.first_appearance}</li>
    </ul>
    <h5 className="mt-3">Characters</h5>
    <p>{hero.characters}</p>
    <button 
    className="btn btn-outline-primary"
    onClick={ () => onNavigateback() }
    >
      go back
    </button>
  </div>
</div>
</>
  )
}
