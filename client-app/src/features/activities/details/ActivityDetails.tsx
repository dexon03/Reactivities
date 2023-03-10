import { act } from '@testing-library/react';
import React from 'react';
import { Card, Image, Icon, ButtonGroup, Button } from 'semantic-ui-react';
import { Activity } from '../../../app/models/activity';

interface Props {
    activity : Activity
}

export default function ActivityDetails({activity} : Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group width='2'>
                    <Button basic color='blue' content='Edit'/>
                    <Button basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
}