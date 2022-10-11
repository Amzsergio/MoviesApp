import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './About.css'

function About() {
  return (
    <div className='aboutSection d-flex flex-column min-vh-100'>
        <Card>
            <Card.Body>
                <Card.Title> About This WebSite</Card.Title>
                <Card.Text>
                    This website has been created in order to practice some technologies such as:
                    <ListGroup variant='flush'>
                        <ListGroup.Item >React JS</ListGroup.Item>
                        <ListGroup.Item >Redux</ListGroup.Item>
                        <ListGroup.Item >Webpack</ListGroup.Item>
                        <ListGroup.Item >Bootstrap 5</ListGroup.Item>
                        <ListGroup.Item >React-Bootstrap</ListGroup.Item>
                        <ListGroup.Item >Api Rest</ListGroup.Item>
                    </ListGroup>
                    I have used this movies api: <Card.Link href='https://www.omdbapi.com/' target='_blank' >Omdb Api</Card.Link>
                    <br/>
                      This Single Page App was built in order you can search for any movie information and also you'll be able to save your favorite ones in the the "favourites" window. 
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default About