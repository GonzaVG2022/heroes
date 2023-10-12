import { Link } from "react-router-dom"


export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters

}) => {
  
  return (
    <div className={publisher == 'DC Comics' ? 'col DC animate__animated animate__fadeIn' : 'col Marvel animate__animated animate__fadeIn'}>
        <div  className="card mb-3 gon ">
            <div className="row no-gutters animate__animated animate__bounce">
                <div className="col-md-6 ">
                    <img src={`../assets/heroes/${id}.jpg`} className="card-img" style={{ maxHeight: '680px' }} alt={superhero} />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h3 className="card-title">{superhero}</h3>
                        <p className="card-text">{alter_ego}</p>
                        {alter_ego !== characters ? <p className="card-text">{characters}</p> : null}
                        <p className="card-text">
                            <small >{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>plus...</Link>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}
