import '../App.css'
import { Card, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useQuery, useMutation } from "@apollo/client"
import { GET_DATA, GET_MOVIE } from "../queries/query"
import { DELETE_MOVIE } from "../queries/mutation"
import { favoriteVar } from "../config/vars"
import { useHistory } from 'react-router-dom'


function MovieDetail() {

  let { id } = useParams()

  const { data, loading, error } = useQuery(GET_MOVIE, { variables: { id } })
  const [deleteMovie] = useMutation(DELETE_MOVIE, {
    refetchQueries: [{ query: GET_DATA }]
  })
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

  function addToFavorite() {
    const existingFavorites = favoriteVar()
    const newFav = {
      _id: id,
      title: data.movie.title,
      poster_path: data.movie.poster_path
    }
    if(existingFavorites.find(movie => movie._id === newFav._id) === undefined ) {
      const temp = existingFavorites.concat(newFav)
      favoriteVar(temp)
    }
    history.push('/fav')
  }

  function delMovie(id) {
    deleteMovie({
        variables: {
          id
        }
    })
    history.push('/')
  }

  function editMovie(id) {
    history.push('/edit/' + id)
  }

  return (
    <>
    <div className="App">
      <section>
        <div className="container">
          <h1>{data.movie.title}</h1>
          <div className="row">
            <div className="col-4 mt-5">
              <Card className="bg-dark mb-3 text-center">
              <Card.Img className="div-img img-fluid" src={data.movie.poster_path} alt="poster" style={{ position: 'relative' }}></Card.Img>
              <Button onClick={addToFavorite}>Add to Favorite</Button>
              </Card>
              <Button style={{marginRight: 15, marginLeft: 15, width: 75}} onClick={() => editMovie(data.movie._id)}>Edit</Button>
              <Button style={{marginRight: 15, marginLeft: 15, width: 75}} onClick={() => delMovie(data.movie._id)}>Delete</Button>
            </div>

            <div className="col-8 mt-5">
              <Card className="bg-dark mb-3 text-left">
                <Card.Body>
                  <h4>Overview :</h4>
                  <h5>{data.movie.overview}</h5>
                  <br/>
                  <h4>Popularity :</h4>
                  <h5>{data.movie.popularity}</h5>
                  <br/>
                  <h4>Tags :</h4>
                  {
                    data.movie.tags.map((e) => {
                      return <h5>{e}</h5>
                    })
                  }
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
    
    </>
  );
}

export default MovieDetail
