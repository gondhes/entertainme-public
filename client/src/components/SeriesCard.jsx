import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function SeriesCard(props) {
  const { _id, title, poster_path } = props.series
  const history = useHistory()

  const toSeriesDetail = (id) => {
    history.push('/series/' + id)
  }

  return (
    <>
    <div className="col-3 mt-5" onClick={() => toSeriesDetail(_id)}>
      <Card className="bg-dark border mb-3 text-center">
      <Card.Img className="div-img img-fluid" src={poster_path} alt="poster" style={{ position: 'relative' }}></Card.Img>
        <Card.Body>
          <Card.Title style={{ color:"white" }}>{title}</Card.Title>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default SeriesCard
