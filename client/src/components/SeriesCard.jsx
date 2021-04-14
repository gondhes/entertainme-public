import React from 'react'
import { Card } from 'react-bootstrap'

function SeriesCard(props) {
  const { title, poster_path } = props.series

  return (
    <>
    <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src={poster_path} alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>

    {/* <div className="col-3 mt-5">
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
    </div> */}

    {/* <div className="col-3 mt-5">
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src="../../blank.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>Add Collection</Card.Title>
        </Card.Body>
      </Card>
    </div> */}
    </>
  )
}

export default SeriesCard
