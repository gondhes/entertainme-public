import '../App.css'
import { useQuery } from "@apollo/client"
import { GET_DATA } from "../queries/query"
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


import MovieCard from "../components/MovieCard"
import SeriesCard from "../components/SeriesCard"

function Home() {

  const { data, loading, error } = useQuery(GET_DATA)
  const history = useHistory()

  if(loading) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Loading...</h1>
        </header>
      </div>
    ) 
  }

  if(error) {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Internal Server Error</h1>
          <h2>{error}</h2>
        </header>
      </div>
    ) 
  }

  const toAddMovie = () => {
    history.push('/add')
  }

  return (
    <div className="App">
      <section>
        <div className="container">
          <h2>Movies Collection</h2>
          <div className="row">
            {
              data.movies.map(movie => {
                return <MovieCard movie={movie} key={movie._id}></MovieCard>
              })
            }
            
            <div className="col-3 mt-5" onClick={() => toAddMovie()}>
              <Card className="bg-dark border mb-3 text-center">
              <Card.Img className="div-img img-fluid" src="../../blank.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
                <Card.Body>
                  <Card.Title style={{ color:"white" }}>Add Collection</Card.Title>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>TV Series Collection</h2>
          <div className="row">
            {
              data.allSeries.map(series => {
                return <SeriesCard series={series} key={series._id}></SeriesCard>
              })
            }
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
