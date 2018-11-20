import React from 'react';
import logo from '../resources/Logo_Textonly_Black.png';
import {Grid, Icon, Image, Button, Container, Modal} from 'semantic-ui-react';
import './HeadMenu.css'

const HeadMenu = (props) => {
    return (
        <div className="head">
            <Container>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={3} floated='left' verticalAlign='bottom'>
                            <Button icon basic onClick={props.openSidebar}>
                                <Icon name='sidebar' size='large'/>
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Image
                                className='logo'
                                src={logo}
                                size='medium'
                                onClick={() => {
                                props.changePage('main')
                            }}
                                centered/>
                        </Grid.Column>
                        <Modal trigger={<Grid.Column width={3} verticalAlign='bottom' textAlign='right'>
                                <Button icon basic>
                                    <Icon name='search' size='large'/>
                                </Button>
                            </Grid.Column>}>
                            <Modal.Header>
                                구현 중
                            </Modal.Header>
                            <Modal.Content>
                                죄송합니다, 이 서비스는 현재 구현 중입니다... - 웹 담당자
                            </Modal.Content>
                        </Modal>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    );
};

export default HeadMenu;