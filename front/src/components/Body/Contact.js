import React, {Component} from 'react';
import { Header, Input, Container, Form, TextArea, Button, Icon } from 'semantic-ui-react';

class Contact extends Component{

    state = {
        title: '',
        mail: '',
        textToSend: '' 
    }
    
    render(){
        const {title, mail, textToSend} = this.state;

        return (
            <div>
                <Container text>
                    <Header size='large' textAlign='left'>CONTACT
                    </Header>
                    <p>언더스코어에 대한 어떤 메세지라도 보내주세요. 여러분의 소중한 의견을 항상 귀담아 듣겠습니다.</p>
                    <Container textAlign='left'>
                        <p><Input label='제목' placeholder='제목을 입력하세요.' onChange={e => this.setState({title: e.target.value})} fluid/></p>
                        <p><Input label='메일 주소' placeholder='id@mail.com' onChange={e => this.setState({mail: e.target.value})} fluid/></p>
                        <p>
                            <Form>
                                <TextArea placeholder='내용을 입력하세요.' onChange={e => this.setState({textToSend: e.target.value})} rows={6}/>
                            </Form>
                        </p>
                        <p>
                        </p>
                    </Container>
                    <Button style={{width: '10rem'}} primary animated='fade'>
                        <Button.Content visible>전송</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                </Container>
            </div>
        );

    }
}

export default Contact;