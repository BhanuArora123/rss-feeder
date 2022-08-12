import { Button, ListGroup } from "react-bootstrap"

const Subscription = () => {
    let subscriptions = [
        {
            name :"lorem ipsum",
            link :"http://localhost:8080/"
        },
        {
            name :"lorem ipsum",
            link :"http://localhost:8080/"
        },
        {
            name :"lorem ipsum",
            link :"http://localhost:8080/"
        }
    ];
    return (
        <ListGroup>
            {
                subscriptions.map(({name, link}) => {
                    return (
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center">
                            <div>
                                {name}
                            </div>
                            <div>
                                {link}
                            </div>
                            <Button>
                                Delete
                            </Button>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}
export default Subscription;