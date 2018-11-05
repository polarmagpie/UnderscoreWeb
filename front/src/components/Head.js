import React from 'react';
import logo from '../images/Logo_Textonly_Black.png';
import { Grid, Icon, Image, Button, Container} from 'semantic-ui-react';

const Head = (props) => {
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3} floated='left' verticalAlign='bottom'>
                        <Button icon basic>
                          <Icon name='sidebar' size='large' />
                        </Button>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Image src={logo} size='medium' centered/>             
                    </Grid.Column>
                    <Grid.Column width={3} verticalAlign='bottom' textAlign='right'>
                        <Button icon basic> 
                            <Icon name='search' size='large' />
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default Head;