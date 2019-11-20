import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Moviez extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            poster: '',
            comment: ''
        }
        this.onChange = this.onChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    submitForm(e) {
        e.preventDefault()
        const config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(this.state),
        }
        const url = "https://post-a-form.herokuapp.com/api/movies/"

        fetch(url, config)
            .then(res => res.json())
            .then(res => {
                if (res.error) {
                    alert(res.error)
                } else {
                    alert(`movie ID ${JSON.stringify(res)}!`)
                }
            }).catch(e => {
                console.error(e)
                alert('Error during an movie addition')
            })

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    render() {
        return (
            <div className='movie'>
                <br />
                <form onSubmit={this.submitForm}>
                    <Container>
                        <Row>
                            <Col>
                                <label htmlFor="favorite-movie"><h2>Favorite Movie</h2></label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text" name="title" id="title" onChange={this.onChange} value={this.state.title} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="poster"><h2>Movie Poster</h2></label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="text" name="poster" id="poster" onChange={this.onChange} value={this.state.poster} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label htmlFor="comment"><h2>Your Taughts</h2></label>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <textarea rows="3" cols='22' name="comment" id="comment" onChange={this.onChange} value={this.state.comment} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <input type="submit" value="Send" />
                            </Col>
                        </Row>
                    </Container>
                </form>
            </div>
        );
    }
}

export default Moviez;
