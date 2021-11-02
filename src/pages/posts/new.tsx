import React from 'react';
import styled from 'styled-components';

import { TimelineComment } from '../../components/TimelineComment/TimelineComment';
import { Form } from '../../components/Form/Form';
import { Dropdown } from '../../components/Dropdown/Dropdown';
import { Button } from '../../components/Button/Button';
import { FormInput } from '../../components/FormInput/FormInput';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';
import { StylingWithMarkdown } from '../../components/StylingWithMarkdown/StylingWithMarkdown';

const titlePlchldr = 'Ура, новый пост! 🎉';

const codePlchldr = `Это контент вашего поста. Пишите грамотно и понятно.
Вас читают не только коллеги из команды, но и ребята из смежных команд.
Спасибо!
`;

const StyledRow = styled.div`
    display: flex;

    padding-left: 18px;
    padding-bottom: 10px;
`;

const StyledFormAction = styled.div`
    & + & {
        margin-left: 10px;
    }
`;

export default function Page() {
    const channels = [{
        label: 'Frontend',
        value: 'frontend'
    }, {
        label: 'Devices',
        value: 'devices'
    }];

    const onChannelsChange = (value: string[]) => {
        console.log(value);
    };

    const tags = [{
        label: 'JS',
        value: 'js'
    }];

    const onTagsChange = (value: string[]) => {
        console.log(value);
    };

    return (
        <>
            <TimelineComment size="xl" image="https://avatars.githubusercontent.com/u/982072?v=4">
                <Form>
                    <FormInput
                        size="xl"
                        placeholder={titlePlchldr}
                        defaultValue="Салют! Запустили новые пайплайны."
                    />

                    <CodeEditor placeholder={codePlchldr} />

                    <StyledRow>
                        <StyledFormAction>
                            <Dropdown type="check" items={channels} text="Каналы" onChange={onChannelsChange} />
                        </StyledFormAction>

                        <StyledFormAction>
                            <Dropdown type="check" items={tags} text="Теги" onChange={onTagsChange} />
                        </StyledFormAction>
                    </StyledRow>
                </Form>

                <StylingWithMarkdown />
            </TimelineComment>
        </>
    );
}
