import React from 'react';
import {Segment, Grid, List} from 'semantic-ui-react';

const Foot = (props) => {
    return (
        <div className="foot">
            <Segment
                style={{
                padding: '2em 0em'
            }}
                color='grey' inverted>
                <Grid container textAlign='center' inverted>
                    <Grid.Column>
                        <Grid.Row>
                            <List horizontal divided inverted link size='medium'>
                                <List.Item as ='a' onClick={() => props.handleChangePage('contact')}>CONTACT</List.Item>
                                <List.Item as ='a' href='https://www.facebook.com/media.underscore/' target='_blank'>FACEBOOK</List.Item>
                                <List.Item as ='a' onClick={() => props.handleChangePage('privacypolicy')}>PRIVACY POLICY</List.Item>
                            </List>
                        </Grid.Row>
                        <Grid.Row>
                            강태영 김지수 문성혁 심너울 정예진 조해언
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};

export default Foot;