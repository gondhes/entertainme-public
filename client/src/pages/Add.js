import '../App.css'
import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useHistory } from 'react-router-dom'
import { GET_DATA } from '../queries/query'
import { ADD_MOVIE } from '../queries/mutation'
import { Form, Button } from 'react-bootstrap'


function AddMovie() {

  const [addMovie] = useMutation(ADD_MOVIE, {
    refetchQueries:[{ query: GET_DATA }]
  })
  const history = useHistory()

  const [movie, setMovie] = useState({
    title: '',
    overview: '',
    poster_path: '',
    popularity: 0,
    tags: ''
  })

  function onChangeForm(event) {
    let { name, value } = event.target;

    setMovie({
    ...movie,
    [name]: value,
    })
  }

  function saveMovie(event) {
    event.preventDefault();
    
    if(movie.title && movie.overview && movie.poster_path && movie.popularity && movie.tags){
      addMovie({
          variables: {
              newMovie: { ...movie, popularity: parseFloat(movie.popularity) }
          }
      })
        setMovie({
          title: '',
          overview: '',
          poster_path: '',
          popularity: 0,
          tags: ''
      })
    }
    else{
        console.log('saving movie failed')
    }

    history.push("/")
  }

  return (
    <div className="form">
      <h2>Add Movie Collection</h2>
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

export default AddMovie
