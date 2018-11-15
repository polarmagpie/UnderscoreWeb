import React, {Component} from 'react';
import {Image, Container, Header, Popup, Grid} from 'semantic-ui-react';

import dike from '../../images/temp/정의의 여신상.png';
import moon from '../../images/temp/달.png';
import genius from '../../images/temp/심너울.png';
import anchovy from '../../images/temp/멸치.png';
import racoon from '../../images/temp/너구리.png';
import starbucks from '../../images/temp/스타벅스.png';

import Logo from '../../images/Logo_Imageonly_White.png';

class About extends Component {
    render() {
        const popupStyle = {
            opacity:'0.8',
            borderRadius: '0',
        }

        const members = [
            {
                id: 0,
                image: anchovy,
                name: '강태영',
                role: '편집장',
                description: '멸치(영어: anchovy)는 멸치과의 바닷물고기이다. 정어리의 일종으로, 사람들의 이용뿐만 아니라 먹이 사슬에서도 중요한 물고기이다.'
            }, {
                id: 1,
                image: starbucks,
                name: '김지수',
                role: '해외 로컬라이제이션',
                description: '매일밤 눈물섞인 스타벅스 음료를 마시는 중'
            }, {
                id: 2,
                image: moon,
                name: '문성혁',
                role: '웹서버',
                description: '이거 만든 사람보다 코딩 못함^^'
            }, {
                id: 3,
                image: genius,
                name: '심너울',
                role: '웹 프론트엔드',
                description: '아티스트 + 엔지니어'
            }, {
                id: 4,
                image: racoon,
                name: '정예진',
                role: '컨텐츠, UX 디자인',
                description: '너구리는 개과의 포유동물이다. 너구리속(Nyctereutes)에 속하며 학명은 Nyct­ereutes procyonoides이다.'
            }, {
                id: 5,
                image: dike,
                name: '조해언',
                role: '컨텐츠 편집, 시각디자인',
                description: '(후)막내 부럽다'
            }
        ].map((e) => {
            return (
                <Grid.Column textAlign='center'>
                    <Popup
                        key={e.id}
                        inverted
                        trigger={<div> < Image src = {
                        e.image
                    }
                    size = 'medium' style = {{borderRadius: '1.5rem'}}/> 
                    <Header a='h4'>
                        {e.name}
                        <Header.Subheader>
                            {e.role}
                        </Header.Subheader>
                    </Header >
                    </div>}
                        style={popupStyle}
                        header={e.name}>
                        <div style={{textAlign:'justify'}}>
                            <Header as='h3' inverted>{e.name}
                                <Header.Subheader inverted>{e.role}</Header.Subheader>
                            </Header>
                            <p>{e.description}</p>
                        </div>
                    </Popup>
                </Grid.Column>
            )
        })

        const writers = [
            {
                id: 0,
                name: '구현모',
                image: 'https://via.placeholder.com/300',
                subject: '뉴미디어 산업, 미디어 경영',
                degree: '고려대학교 미디어 커뮤니케이션 석사'
            }, {
                id: 1,
                name: '김선함',
                image: 'https://via.placeholder.com/300',
                subject: '노동시장',
                degree: 'Purdue University, Economics Ph.D Student'
            }, {
                id: 2,
                name: '박선영',
                image: 'https://via.placeholder.com/300',
                subject: '정치경제, 여론, 빈곤',
                degree: 'Havard University, Political Science Ph.D Student'
            }, {
                id: 3,
                name: '서정규',
                image: 'https://via.placeholder.com/300',
                subject: '정치심리, 실험사회과학, 사회적 소수자',
                degree: '서강대학교 정치외교학 석사'
            }, {
                id: 4,
                name: '송준모',
                image: 'https://via.placeholder.com/300',
                subject: '계량사회과학, 정치심리, 불평등',
                degree: '연세대학교 사회학 석사'
            }, {
                id: 5,
                name: '오창동',
                image: 'https://via.placeholder.com/300',
                subject: '계량사회과학, 정치심리, 사회운동',
                degree: '연세대학교 사회학 석사'
            }
        ]

        return (
            <div>
                <Container text textAlign='center'>
                    <Image src={Logo} className='bgColor' circular size='small' centered/>
                    <Header as='h2' content='세상의 지식에 밑줄을 긋다' subheader='학술 지식 큐레이팅 미디어'/>
                </Container>
                <Header as='h3' textAlign='center'>Member</Header>
                <Grid columns='6' container doubling centered divided>
                    {members}
                </Grid>
            </div>
        );
    }
}

export default About;