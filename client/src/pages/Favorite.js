import '../App.css'
import { useReactiveVar } from "@apollo/client"
import { favoriteVar } from "../config/vars"
import MovieCard from "../components/MovieCard"

function Favorite() {

  const favorites = useReactiveVar(favoriteVar)

  return (
    <div className="App">
      <section>
        <div className="container">
          <h2>Favorites Collection</h2>
          <div className="row">
            {
              favorites?.map(movie => {
                return <MovieCard movie={movie} key={movie._id}></MovieCard>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Favorite
