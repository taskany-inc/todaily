import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Dropdown } from './Dropdown';

export default {
    title: 'Components/Dropdown',
    component: Dropdown,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Link = Template.bind({});
Link.args = {
    text: 'Dropdown',
    type: 'link',
    minWidth: 150,
    items: [
        {
            label: 'Item 1',
            href: 'posts/1',
        },
        {
            label: 'Item 2',
            href: 'https://google.com',
        },
    ],
};

export const Radio = Template.bind({});
Radio.args = {
    text: 'Dropdown',
    type: 'radio',
    minWidth: 150,
    items: [
        {
            label: 'Item 1',
            value: 'one',
        },
        {
            label: 'Item 2',
            value: 'two',
        },
    ],
};

export const Check = Template.bind({});
Check.args = {
    text: 'Dropdown',
    type: 'check',
    minWidth: 150,
    items: [
        {
            label: 'Item 1',
            value: 'one',
        },
        {
            label: 'Item 2',
            value: 'two',
        },
    ],
};
