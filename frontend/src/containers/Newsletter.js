import React from 'react';
import {
    Container,
    Image,
    Header,
    Button,
    Icon,
    Label,
    Segment
} from 'semantic-ui-react';
import {useContext} from '../contexts/ContextProvider';

const Newsletter = (props) => {
    //나중에 동기적으로 뉴스레터 파일 가져올 것.
    const newsletter = {
        title: '文대통령 "유치원·채용 비리 분노 커, 반부패개혁 두려워말라',
        writer: '작성자 누구',
        date: 'Nov. 20. 2018.',
        content: `(서울=연합뉴스) 이상헌 기자 = 문재인 대통령은 20일 "반부패를 위한 과감한 개혁을 두려워해서는 안 된다"며 "입법 여건의 핑계를 댈 수도 없으며, 법령 개정 없이도 개선할 수 있는 부분부터 속도감 있게 추진하고 순차적으로 제도적 기반을 마련해 나가야 한다"고 말했다.

        문 대통령은 이날 청와대에서 주재한 3차 반부패정책협의회에서 "국민은 권력형 적폐 청산 수사를 믿고 지지해주셨다. 그만큼 공정한 사회를 바라는 국민 기대가 크다"며 이같이 밝혔다.
        
        문 대통령은 이날 정부가 선정한 9대 생활 적폐 근절대책을 보고 받았다.
        
        문 대통령은 "최근 사립유치원 비리 파동, 학사비리, 채용비리, 갑질문화에 대한 국민의 분노가 매우 크다. 국민 눈높이에 제도·정책이 미치지 못한 탓이라고 생각한다"며 "국민 눈높이는 높아졌는데도 과거 관행이었다는 이유로 눈 감고 있었던 게 아닌지도 반성해야 한다"고 언급했다.
        
        이어 "오늘 회의에서는 생활 적폐를 논의한다. 국민의 일상에서 부딪히는 다양한 부패 문제들"이라며 "공공부문과 공적 영역, 재정보조금이 지원되는 분야의 부정부패부터 먼저 없애야 한다는 의지를 강하게 다져야 할 것"이라고 강조했다.\n
        
        \n
        제3차 반부패정책협의회 주재하는 문 대통령(서울=연합뉴스) 배재만 기자 = 문재인 대통령이 20일 오전 청와대에서 열린 제3차 반부패정책협의회에서 발언하고 있다. 
        scoop@yna.co.kr
        (끝)
        \n
        
        문 대통령은 "문재인 정부 5년 동안 강력한 반부패 정책을 시행하고 반부패 국가, 청렴한 대한민국을 유산으로 남기자는 각오가 필요하다"며 "부패 없는 사회를 위해서는 끊임없는 노력이 필요하다"고 밝혔다.\n
        
        특히 "잠시 방심하면 부패는 다시 살아나고, 반부패 대책을 세우면 그것을 회피하는 부패 수법이 발전하고 또 새로운 부패들이 생겨난다"며 "한두 번, 한두 회 노력해서 끝나는 문제가 아니며, 밑 빠진 독에 물 붓는 것처럼 지칠 수 있다"고 했다.
        \n\n
        그러면서 "그래서 반부패 정책은 인내심을 갖고 강력하게 그리고 꾸준히 시행해야 하며, 반드시 효과를 거둬야 한다"며 "그렇지 않으면 국민이 볼 때 그 정부가 그 정부라는 비판을 받기가 십상"이라고 부연했다.`,
        tags: ['심리학', '사회학']
    }

    return (
        <Container textAlign='center'>
            <br/>
            <Container text textAlign='left'>
            <Header as='h2'>
                {newsletter.title}
            </Header>
            <p>{newsletter.writer}</p>
            <p>{newsletter.date}</p>
            <Segment>{newsletter.content}</Segment>
            {newsletter.tags.map((e, index) =>{
                return <Label key={index}>
                    {e}
                </Label>
            })}
            </Container>
            <br/>
            <Container>
                <Button primary animated className='listbutton' onClick={() => {props.changePage('newsletterlist', props.id, props.page)}}>
                    <Button.Content visible >목록으로</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow left'/>
                    </Button.Content>
                </Button>
            </Container>
        </Container>
    );
};

export default useContext(({state, actions}) => ({currentPage: state.currentPage, id: state.id, page: state.page, changePage: actions.changePage}))(Newsletter);