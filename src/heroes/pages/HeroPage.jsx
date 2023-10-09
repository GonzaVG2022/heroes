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
    <div className="row mt-5 ">
    <div className="col-4">
      <h1  >{hero.superhero}</h1>
      <hr/>
      <p>{hero.alter_ego}</p>
      <p>{hero.first_appearance}</p>
      <p>{hero.characters}</p>
      <img src={`../assets/heroes/${heroid}.jpg`} alt={hero.superhero} />
      </div>
    </div>

    </>
  )
}
