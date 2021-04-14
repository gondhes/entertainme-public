import React from 'react'
import { Card } from 'react-bootstrap'

function Movie(props) {
  // const { title, overview, poster_path } = props.movie

  return (
    <>
    {/* <div className="col-3 mt-5">
      <Card className="bg-light mb-3 text-center" style={{ height: '26rem' }}>
      <Card.Img className="div-img border mt-4 img-fluid" src={poster_path} alt="flag" style={{ position: 'relative', width: '16rem', height: '10rem' }}></Card.Img>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{overview}</Card.Text>
        </Card.Body>
      </Card>
    </div> */}

    <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src="https://www.themoviedb.org/t/p/w1280/h1B7tW0t399VDjAcWJh8m87469b.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>Hamilton</Card.Title>
        </Card.Body>
      </Card>
    </div>

    <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src="https://www.themoviedb.org/t/p/w1280/h1B7tW0t399VDjAcWJh8m87469b.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>Hamilton</Card.Title>
        </Card.Body>
      </Card>
    </div>

    <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src="https://www.themoviedb.org/t/p/w1280/h1B7tW0t399VDjAcWJh8m87469b.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>Hamilton</Card.Title>
        </Card.Body>
      </Card>
    </div>

    <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src="../../blank.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>Add Collection</Card.Title>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default Movie
