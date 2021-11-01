import React from 'react';
import styled from 'styled-components';

import { TimelineComment } from '../../components/TimelineComment/TimelineComment';
import { Form } from '../../components/Form/Form';
import { Icon } from '../../components/Icon/Icon';
import { Popup } from '../../components/Popup/Popup';
import { Button } from '../../components/Button/Button';
import { List, ListItem } from '../../components/List/List';
import { FormInput } from '../../components/FormInput/FormInput';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';
import { StylingWithMarkdown } from '../../components/StylingWithMarkdown/StylingWithMarkdown';
import { inputBorderColor } from '../../@generated/themes';

const titlePlchldr = 'Ура, новый пост! 🎉';

const codePlchldr = `Это контент вашего поста. Пишите грамотно и понятно.
Вас читают не только коллеги из команды, но и ребята из смежных команд.
Спасибо!
`;

const StyledTagsDropdown = styled.div``;
const StyledTagsDropdownTrigger = styled.div``;

// const TagsDrowdown = () => (
//     <StyledTagsDropdown>
//         <Popup
//             interactive
//             overflow="hidden"
//             minWidth={150}
//             placement="right"
//             target={
//                 <StyledTagsDropdownTrigger>
//                     <Icon type="tag" size="s" color={inputBorderColor} />
//                 </StyledTagsDropdownTrigger>
//             }
//         >
//             <List>
//                 <ListItem interactive>JS</ListItem>
//                 <ListItem interactive>Алгоритмы</ListItem>
//             </List>
//         </Popup>
//     </StyledTagsDropdown>
// );


const StyledRow = styled.div`
    display: flex;

    padding-left: 18px;
    padding-bottom: 10px;

    * + * {
        margin-left: 10px;
    }
`;

export default function Page() {
    return (
        <>
            <TimelineComment size="xl" image="https://avatars.githubusercontent.com/u/982072?v=4">
                <Form>
                    <FormInput
                        size="xl"
                        placeholder={titlePlchldr}
                        defaultValue="Салют! Запустили новые пайплайны."
                        // iconRight={<TagsDrowdown />}
                    />

                    <CodeEditor placeholder={codePlchldr} />

                    <StyledRow>
                        <Button size="s">Каналы</Button>
                        <Button size="s">Теги</Button>
                    </StyledRow>
                </Form>

                <StylingWithMarkdown />
            </TimelineComment>
        </>
    );
}
