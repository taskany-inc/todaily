import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CodeMirror, { ReactCodeMirrorProps } from '@uiw/react-codemirror';
import { markdown, markdownLanguage } from '@codemirror/lang-markdown';
import { languages } from '@codemirror/language-data';
import { oneDark } from '@codemirror/theme-one-dark';

import { inputBorderColor } from '../../@generated/themes';

interface CodeEditorProps {
    value?: ReactCodeMirrorProps['value'];
    placeholder?: ReactCodeMirrorProps['placeholder'];
    height?: ReactCodeMirrorProps['height'];

    onChange?: ReactCodeMirrorProps['onChange'];
    onFocus?: ReactCodeMirrorProps['onFocus'];
    onBlur?: ReactCodeMirrorProps['onBlur'];
}

const StyledCodeMirror = styled.div<{ focused?: boolean }>`
    overflow: hidden;

    margin-top: 2px;

    font-size: 16px;

    border-radius: 4px;

    .ͼo {
        box-sizing: border-box;

        outline: none;

        padding: 10px 0;

        color: rgba(255, 255, 255, 1);
        background-color: #0e0e0e;

        .cm-gutters {
            display: none; /* TODO: Унести в настройку */
        }

        .cm-scroller {
            font-family: 'Hack', monospace; /* TODO: Унести в настройку */
        }

        .cm-line {
            padding-left: 18px; /* TODO: Унести в настройку */
            padding-right: 18px; /* TODO: Унести в настройку */
        }

        .cm-gutters {
            background-color: transparent;
            color: rgba(255, 255, 255, 0.05);
        }

        .cm-activeLine {
            background-color: rgba(255, 255, 255, 0.05);
        }

        .cm-activeLineGutter {
            background-color: rgba(255, 255, 255, 0.05);
        }

        ${({ focused }) =>
        focused
            ? css`
                  box-shadow: 0 0 0 1px ${inputBorderColor};
              `
            : css`
                  .cm-activeLine {
                      background-color: transparent;
                  }
              `};
    }
`;

export const CodeEditor: React.FC<CodeEditorProps> = ({
    value,
    placeholder,
    height = '500px',
    onChange,
    onFocus,
    onBlur,
}) => {
    const [focused, setFocused] = useState(false);

    const onFocusHandler: CodeEditorProps['onFocus'] = (e) => {
        setFocused(true);

        if (onFocus) onFocus(e);
    };

    const onBlurHandler: CodeEditorProps['onBlur'] = (e) => {
        setFocused(false);

        if (onBlur) onBlur(e);
    };

    return (
        <StyledCodeMirror focused={focused}>
            <CodeMirror
                theme="dark"
                extensions={[markdown({ base: markdownLanguage, codeLanguages: languages }), oneDark]}
                placeholder={placeholder}
                value={value}
                height={height}
                onChange={onChange}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />
        </StyledCodeMirror>
    );
};
