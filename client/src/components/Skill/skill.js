import React from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { Loader } from 'react-feather';

import SkillCard from './skillCard';
import PreLoaderWidget from '../Loader';

const FETCH_ALL_SKILLS = gql`
    {
        getSkills {
            id
            label
            description
            type
        }
    }
`;

const Skills = () => {
    const { loading, error, data, fetchMore } = useQuery(FETCH_ALL_SKILLS, { variables: {} });
    console.log(fetchMore);

    if (loading) return <PreLoaderWidget />;
    if (error) return <p>Error :(</p>;

    return (
        <React.Fragment>
            <Row className="page-title">
                <Col md={12}></Col>
            </Row>
            <Card>
                <CardBody>
                    <Row>
                        <Col xs="11">
                            <h4 className="mb-3 mt-0 header-title">Skills</h4>
                        </Col>
                        <Col xs="1" className="text-right">
                            <a href="#" className="card-link text-custom text-right">
                                Add Skill
                            </a>
                        </Col>
                    </Row>
                    <Row className="bg-light p-3">
                        {data.getSkills.map(({ id, label, description, type }) => (
                            <SkillCard key={id} title={label} desc={description} type={type} />
                        ))}
                    </Row>

                    <Row className="mb-3 mt-4">
                        <Col>
                            <div className="text-center">
                                <Button color="white">
                                    <Loader className="icon-dual icon-xs mr-2"></Loader>Load more
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Skills;
