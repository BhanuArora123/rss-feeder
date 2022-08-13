import { ListGroup } from "react-bootstrap"
import { useSelector } from "react-redux"

const Feeds = () => {
    let feeds = useSelector(state => state.feeds).feeds;
    let feedsData = [];
    feeds.forEach(data => {
        data?.items?.forEach(item => {
            feedsData.push({
                name : data.name,
                ...item
            })
        })
    })
    return (
        <ListGroup style={{"overflowX":"scroll"}}>
            {
                feedsData.map(({name,link, title}) => {
                    return (
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center">
                            <div className="w-25 d-flex justify-content-center">
                                {name}
                            </div>
                            <div className="w-50 d-flex justify-content-center">
                                {title._text}
                            </div>
                            <a href={link._text} className="w-25 d-flex justify-content-center">
                                {link._text}
                            </a>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}
export default Feeds;