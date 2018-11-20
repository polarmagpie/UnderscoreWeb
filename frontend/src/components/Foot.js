import React from 'react';
import {Segment, Grid, List} from 'semantic-ui-react';
import './Foot.css';

const Foot = (props) => {
    return (
        <div className="foot">
            <Segment color='grey' inverted>
                <Grid container textAlign='center' inverted>
                    <Grid.Column>
                        <Grid.Row>
                            <List horizontal divided inverted link size='medium'>
                                <List.Item as='a' onClick={() => props.changePage('contact')}>CONTACT</List.Item>
                                <List.Item
                                    as='a'
                                    href='https://www.facebook.com/media.underscore/'
                                    target='_blank'>FACEBOOK</List.Item>
                                <List.Item as='a' onClick={() => props.changePage('privacy')}>PRIVACY POLICY</List.Item>
                            </List>
                        </Grid.Row>
                        <Grid.Row>
                            Underscore™
                        </Grid.Row>
                    </Grid.Column>
                </Grid>
            </Segment>
        </div>
    );
};

export default Foot;