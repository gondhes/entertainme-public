import '../App.css'
import { Card } from 'react-bootstrap'

function Detail() {
  return (
    <>
    <div className="App">
      <section>
        <div className="container">
          <h2>Detail Information</h2>
          <div className="row">
            <div className="col-4 mt-5">
              <Card className="bg-dark mb-3 text-center">
              <Card.Img className="div-img img-fluid" src="https://www.themoviedb.org/t/p/w1280/h1B7tW0t399VDjAcWJh8m87469b.jpg" alt="poster" style={{ position: 'relative' }}></Card.Img>
              </Card>
            </div>

            <div className="col-8 mt-5">
              <Card className="bg-dark mb-3 text-left">
                <Card.Body>
                  <h1>Hamilton</h1>
                  <br/>
                  <h4>Overview :</h4>
                  <h5>Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.</h5>
                  <br/>
                  <h4>Popularity :</h4>
                  <h5>20.626</h5>
                  <br/>
                  <h4>Tags :</h4>
                  <h5>musical, biography, stage show, live theatre, live musical</h5>
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

export default Detail
