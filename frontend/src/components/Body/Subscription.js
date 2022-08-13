import { Button, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteFeed } from "../../store/feed";

const Subscription = () => {
    let subscriptions = useSelector(state => state.feeds);
    console.log(subscriptions);
    const dispatch = useDispatch();
    const deleteSubsHandler = (id) => {
        return () => {
            dispatch(deleteFeed(id));
        }
    }
    return (
        <ListGroup>
            {
                subscriptions.feedSubscriptions.map(({feedName:name, feedUrl:link, feedId: id}) => {
                    return (
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center">
                            <div>
                                {name}
                            </div>
                            <div>
                                {link}
                            </div>
                            <Button onClick={deleteSubsHandler(id)}>
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