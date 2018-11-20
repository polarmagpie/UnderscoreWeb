import React from 'react';
import {Container, Header, Icon, Form, Button, Checkbox} from 'semantic-ui-react'

const Subscribe = () => {
    return (
<Container text>
                <Header as='h1' icon textAlign='center'>
                    <Icon name='mail' className='pointColor'/>
                        구독
                        <Header.Subheader>언더스코어의 지식들을 메일로 받아보세요.</Header.Subheader>
                </Header>
                <Form>
                    <Form.Field required>
                        <label>필수 정보 1</label>
                        <input placeholder='Radio, someone still loves you~' />
                    </Form.Field>
                    <Form.Field required>
                        <label>필수 정보 2</label>
                        <input placeholder="He's just poor boy and nobody loves him" />
                    </Form.Field>
                    <Form.Field>
                        <label>쓰면 좋은 정보</label>
                        <input placeholder='and another one bites the dust' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox label='언더스코어의 개인정보 처리 방침에 동의합니다.'></Checkbox>
                    </Form.Field>
                    <div style={{textAlign:'center', margin:'0.5rem'}}>
                        <Button
                                style={{width: '10rem',}}
                                primary
                                animated='fade'>
                            <Button.Content visible>전송</Button.Content>
                            <Button.Content hidden>
                                <Icon name='arrow right'/>
                            </Button.Content>
                        </Button>
                    </div>
                </Form>
            </Container>
    );
};

export default Subscribe;