import '../App.css'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useQuery } from "@apollo/client"
import { GET_SERIES } from "../queries"


function SeriesDetail() {

  let { id } = useParams()

  const { data, loading, error } = useQuery(GET_SERIES, { variables: { id } })

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

  return (
    <>
    <div className="App">
      <section>
        <div className="container">
          <h2>Detail Information</h2>
          <div className="row">
            <div className="col-4 mt-5">
              <Card className="bg-dark mb-3 text-center">
              <Card.Img className="div-img img-fluid" src={data.series.poster_path} alt="poster" style={{ position: 'relative' }}></Card.Img>
              </Card>
            </div>

            <div className="col-8 mt-5">
              <Card className="bg-dark mb-3 text-left">
                <Card.Body>
                  <h1>{data.series.title}</h1>
                  <br/>
                  <h4>Overview :</h4>
                  <h5>{data.series.overview}</h5>
                  <br/>
                  <h4>Popularity :</h4>
                  <h5>{data.series.popularity}</h5>
                  <br/>
                  <h4>Tags :</h4>
                  {
                    data.series.tags.map((e) => {
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

export default SeriesDetail
