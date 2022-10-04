import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './About.css'

function About() {
  return (
    <div className='aboutSection'>
        <Card>
            <Card.Body>
                <Card.Title> About This WebSite</Card.Title>
                <Card.Text>
                    This website has been created in order to practice some technologies such as:
                    <ListGroup variant='flush'>
                        <ListGroup.Item >React JS</ListGroup.Item>
                        <ListGroup.Item >Redux</ListGroup.Item>
                        <ListGroup.Item >Webpack</ListGroup.Item>
                    </ListGroup>
                    I have used this movies api: <Card.Link href='https://www.omdbapi.com/' target='_blank' >Omdb Api</Card.Link>
                    <br/>
                    Keep in mind that you can search for any movie and you'll be able to save your favorite ones in the the "favourites" window. 
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default About