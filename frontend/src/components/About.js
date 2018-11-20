import React from 'react';
import {Image, Container, Header, Item, Divider} from 'semantic-ui-react';
import Logo from '../resources/Logo_Imageonly_White.png';
import 구현모 from '../resources/구현모.png';
import 김선함 from '../resources/김선함.png';
import 박선영 from '../resources/박선영.png';
import 서정규 from '../resources/서정규.png';
import 송준모 from '../resources/송준모.png';
import 오창동 from '../resources/오창동.png';
import 강태영 from '../resources/강태영.png';
import 너울 from '../resources/너울.png';
import 정예진 from '../resources/정예진.png';
import './About.css'

const lorem = '나는 작가라는 자의식 하나로 제아무리 강한 세도가나 내노라하는 잘난 사람 앞에서도 기죽을 것 없이 당당할 수 있었고, 아무리 보잘것 없는 밑바닥' +
        ' 인생들하고 어울려도 내가 한 치도 더 잘날 것 없었으니 나는 참으로 대단한 빽을 가졌다 하겠다.'
const ipsum = 'https://via.placeholder.com/300'
const About = () => {
    const writers = [
        {
            id: 0,
            name: '구현모',
            image: 구현모,
            subject: '뉴미디어 산업, 미디어 경영',
            degree: '고려대학교 미디어 커뮤니케이션 석사',
            description: lorem
        }, {
            id: 1,
            name: '김선함',
            image: 김선함,
            subject: '노동시장',
            degree: 'Purdue University, Economics Ph.D Student',
            description: lorem
        }, {
            id: 2,
            name: '박선영',
            image: 박선영,
            subject: '정치경제, 여론, 빈곤',
            degree: 'Havard University, Political Science Ph.D Student',
            description: lorem
        }, {
            id: 3,
            name: '서정규',
            image: 서정규,
            subject: '정치심리, 실험사회과학, 사회적 소수자',
            degree: '서강대학교 정치외교학 석사',
            description: lorem
        }, {
            id: 4,
            name: '송준모',
            image: 송준모,
            subject: '계량사회과학, 정치심리, 불평등',
            degree: '연세대학교 사회학 석사',
            description: lorem
        }, {
            id: 5,
            name: '오창동',
            image: 오창동,
            subject: '계량사회과학, 정치심리, 사회운동',
            degree: '연세대학교 사회학 석사',
            description: lorem
        }
    ].map(e => {
        return (
            <Item key={e.id}>
                <Item.Image size='small' src={e.image} className='itemPhoto'/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>{e.name}</Item.Header>
                    <Item.Meta>{e.subject}
                        /{e.degree}</Item.Meta>
                    <Item.Description>{e.description}</Item.Description>
                </Item.Content>
            </Item>
        )
    })

    const members = [
        {
            id: 0,
            name: '강태영',
            image: 강태영,
            subject: '대표',
            description: lorem
        }, {
            id: 1,
            name: '김지수',
            image: ipsum,
            subject: '해외 컨텐츠 제작',
            description: lorem
        }, {
            id: 2,
            name: '너울',
            image: 너울,
            subject: '살려줘',
            description: lorem
        }, {
            id: 3,
            name: '문성혁',
            image: ipsum,
            subject: '웹서버',
            description: lorem,
        }, {
            id: 4,
            name: '정예진',
            image: 정예진,
            subject: '디자인',
            description: lorem
        }, {
            id: 5,
            name: '허창혁',
            image: ipsum,
            subject: '?????????',
            description: lorem
        }
    ].map(e => {
        return (
            <Item key={e.id}>
                <Item.Image size='small' src={e.image} className='itemPhoto'/>
                <Item.Content verticalAlign='middle'>
                    <Item.Header>{e.name}</Item.Header>
                    <Item.Meta>{e.subject}</Item.Meta>
                    <Item.Description>{e.description}</Item.Description>
                </Item.Content>
            </Item>
        )
    })

    return (
        <div>
            <Container>
                <Image src={Logo} size='small' className='Logo' circular centered/>
                <Header
                    as='h1'
                    content='세상의 지식에 밑줄을 긋다'
                    subheader='학술 지식 큐레이팅 미디어'
                    textAlign='center'/>
            </Container>
            <Container text className='menContainer'>
                <Divider horizontal>
                    <Header as='h2'>필진</Header>
                </Divider>
                <Item.Group>
                    {writers}
                </Item.Group>
            </Container>
            <Container text className='menContainer'>
                <Divider horizontal>
                    <Header as='h2'>일꾼</Header>
                </Divider>
                <Item.Group>
                    {members}
                </Item.Group>
            </Container>
        </div>
    )
};

export default About;