import { getHeroesByPublisher } from "../helpers"
import { HeroCard } from "./"


export const HeroList = ({ publisher }) => {
    const heroes = getHeroesByPublisher( publisher )
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 w-100 row-cols-md-2">
        {
            heroes.map(
                hero => (
                    <HeroCard key={hero.id} {...hero}/>
                )
            )
        }
    </div>
  )
}
