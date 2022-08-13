import { useState } from "react";
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { subscribeToFeed } from "../../store/feed";

const Subscribe = () => {
    const dispatch = useDispatch();
    const [feedName,setFeedName] = useState();
    const [feedUrl,setFeedUrl] = useState();
    const submitHandler = (event) => {
        event.preventDefault();
        dispatch(subscribeToFeed(feedUrl,feedName));
    }
    const feedNameHandler = (event) => {
        setFeedName(event.target.value);
    }
    const feedUrlHandler = (event) => {
        setFeedUrl(event.target.value);
    }
    return (
        <div style={{height :"500px"}} className="w-100 d-flex justify-content-center align-items-center">
            <Form onSubmit={submitHandler} className="d-flex w-50 flex-column">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>RSS Feed URL</Form.Label>
                    <Form.Control onChange={feedUrlHandler} type="url" placeholder="Enter URL" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Feed Name</Form.Label>
                    <Form.Control onChange={feedNameHandler} type="text" placeholder="Feed Name" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Subscribe;