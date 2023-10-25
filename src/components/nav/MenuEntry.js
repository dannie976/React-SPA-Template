// components imports
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

export default function PageNavigation(props) {
    
    const badgeTemplate = (
        <Badge bg="success" pill>
            {props.badge}
        </Badge>
    );

    return (
        <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            action onClick={() => props.whenClicked(props.id)}
        >
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">
                    <img
                        src={props.icon}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </div>
                <div className="p-2">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold"> {props.title} </div>
                        {props.description}
                    </div>
                </div>
            </Stack>
            {props.badge == 0 ? null : badgeTemplate}
        </ListGroup.Item>
    );

}