import '../App.css'
import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/client'
import { useHistory, useParams } from 'react-router-dom'
import { GET_DATA, GET_MOVIE } from '../queries/query'
import { UPDATE_MOVIE } from '../queries/mutation'
import { Form, Button } from 'react-bootstrap'


function UpdateMovie() {

  const { id } = useParams()
  const history = useHistory()

  const [movie, setMovie] = useState({})

  function onChangeForm(event) {
    let { name, value } = event.target;

    setMovie({
    ...movie,
    [name]: value,
    })
  }

  function saveMovie(event) {
    event.preventDefault();
    
    updateMovie({
      variables: {
        newMovie: {
          ...movie, popularity: parseFloat(movie.popularity)
        }
      }
    })
    history.push('/')
  }

  const { data, loading, error } = useQuery(GET_MOVIE, {
    variables: {
      id
    },
    onCompleted: data => {
        setMovie(
            {
                id: data.movie._id,
                title: data.movie.title,
                overview: data.movie.overview,
                poster_path: data.movie.poster_path,
                popularity: parseFloat(data.movie.popularity),
                tags: data.movie.tags.join(", ")
            })
    } 
  })

  const [updateMovie] = useMutation(UPDATE_MOVIE, {
    refetchQueries: [{ query: GET_DATA }]
  })

  return (
    <div className="form">
      <h2>Update Movie Collection</h2>
      <div className="col-4 mt-5">
        <Form onSubmit={saveMovie}>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            name="title"
            value={movie.title}
            placeholder="Enter movie title"
            onChange={onChangeForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Overview</Form.Label>
            <Form.Control
            type="text"
            name="overview"
            value={movie.overview}
            placeholder="Enter movie overview"
            onChange={onChangeForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Poster Path</Form.Label>
            <Form.Control
            type="text"
            name="poster_path"
            value={movie.poster_path}
            placeholder="Enter movie poster path"
            onChange={onChangeForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Popularity</Form.Label>
            <Form.Control
            type="number"
            name="popularity"
            value={movie.popularity}
            placeholder="Enter movie popularity"
            onChange={onChangeForm}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Tags</Form.Label>
            <Form.Control
            type="text"
            name="tags"
            value={movie.tags}
            placeholder="Enter movie tags"
            onChange={onChangeForm}
            />
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default UpdateMovie
