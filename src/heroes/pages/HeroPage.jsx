import { Navigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";

export const HeroPage = () => {
  const {heroid} = useParams();
  
  const hero = getHeroById( heroid );
  console.log(hero)
  if( !hero ) {
    return <Navigate to={'/marvel'}/>
  }
  
  return (
    <>
<div className= {hero.publisher == 'DC Comics' ? 'row mt-5 heroDC' : 'row mt-5  heroMarvel'}>
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
  </div>
</div>
</>
  )
}
