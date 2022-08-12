import { ListGroup } from "react-bootstrap"

const Feeds = () => {
    let feeds = [
        {
            description : "lorem ipsum 123kskdkdkdkdkkdslsksks",
            title: "lorem ipsum"
        },
        {
            description : "lorem ipsum 28838488djjfjdskkdkkdkk",
            title :"lorem ipsum"
        }
    ];
    return (
        <ListGroup>
            {
                feeds.map(({description, title}) => {
                    return (
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center">
                            <div>
                                {title}
                            </div>
                            <div>
                                {description}
                            </div>
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
    )
}
export default Feeds;