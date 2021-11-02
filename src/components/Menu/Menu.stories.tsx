import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Menu } from './Menu';

export default {
    title: 'Components/Menu',
    component: Menu,
    parameters: { actions: { argTypesRegex: '^on.*' } },
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const Link = Template.bind({});
Link.args = {
    type: 'link',
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
    type: 'radio',
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
    type: 'check',
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
