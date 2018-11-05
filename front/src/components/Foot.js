import React from 'react';
import {Segment, Container, Grid, List} from 'semantic-ui-react';

const Foot = () => {
    return (
        <Segment
            style={{
            marginTop: '2rem',
            padding: '3em 0em'
        }}
            color='grey' inverted>
            <Grid container textAlign='center' inverted>
                <Grid.Column>
                    <Grid.Row>
                        <List horizontal divided inverted link size='medium'>
                            <List.Item as ='a' href='#'>언더스코어 페이스북</List.Item>
                            <List.Item as ='a' href='#'>Contact</List.Item>
                            <List.Item as ='a' href='#'>개인정보처리방침</List.Item>
                        </List>
                    </Grid.Row>
                    <Grid.Row>
                        여기에 뭘 적어넣으면 좋을까?
                    </Grid.Row>
                </Grid.Column>
            </Grid>
        </Segment>
    );
};

export default Foot;