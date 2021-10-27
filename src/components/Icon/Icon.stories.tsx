import React, { ComponentProps } from 'react';
import styled from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon, iconTypes } from './Icon';

export default {
    title: 'Components/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Alone = Template.bind({});
Alone.args = {
    type: 'cog',
    size: 'm',
};

const IconItem = styled.span`
    display: inline-block;
    margin-right: 20px;
`;

export const Showcase: ComponentStory<typeof Icon> = (args) => (
    <>
        {iconTypes.map((type) => (
            <IconItem key={type}>
                <Icon {...args} type={type as ComponentProps<typeof Icon>['type']} />
            </IconItem>
        ))}
    </>
);

Showcase.args = {
    size: 'm',
};
