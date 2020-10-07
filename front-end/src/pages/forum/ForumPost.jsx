import React from 'react';
import { Card, CardHeader, CardBody, CardSubtitle, Col, Row, Container } from 'reactstrap';
import { MdEdit } from 'react-icons/md';

const styles= {textAlign:'left'};
const setBorder ={marginBottom:'0.5em'}
export default class ForumPost extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div style={setBorder}>
                <Container>
                    <Row>
                        <Col sm='4'>
                            <Card style={styles}>
                                <CardHeader>Title<MdEdit color='darkgray' style={{float:'right'}}/></CardHeader>
                                <CardBody>
                                    <CardSubtitle style={{opacity:'0.4'}}>@username</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}