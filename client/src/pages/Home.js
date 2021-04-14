import '../App.css'
import { useQuery } from "@apollo/client"
import { GET_DATA } from "../queries"
import Card from "../components/Card"

function Home() {

  const { data, loading, error } = useQuery(GET_DATA)
  // console.log(data, "<<<<<<<<<");
  // const movies = data.movies

  return (
    <div className="App">
      <section>
        <div className="container">
          <h2>Movies Collection</h2>
          <div className="row">
            {/* {
              movies.map(movie => {
                return <Movie movie={movie} key={movie._id}></Movie>
              })
            } */}
            <Card />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
