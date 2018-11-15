import React from 'react';
import {Pagination, Container} from 'semantic-ui-react';

const Page = (current, total) => {
    return (
        <Container textAlign='center'>
            <Pagination activePage={current} totalPages={total} /> 
        </Container>
    );
};

export default Page;