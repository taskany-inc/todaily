import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popup } from './Popup';

export default {
  title: 'Components/Popup',
  component: Popup,
} as ComponentMeta<typeof Popup>;

export const Primary: ComponentStory<typeof Popup> = (args) =>
    <Popup {...args} target={<button>My button</button>}>
        My tippy box
    </Popup>;
