import React from 'react';
import styled from '@emotion/styled';

import type { ThemedStyledProps } from '../types';

const InputGroup = styled.div<{ hasAddonIcon: boolean }>`
  position: relative;
  display: flex;

  > i {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    cursor: pointer;
    user-select: none;
  }

  ${({ hasAddonIcon }) =>
    hasAddonIcon ? `${Input} { padding-right: 48px; }` : ''}
`;

const getBg = ({
  isInvalid,
  theme,
  readOnly,
  value,
}: ThemedStyledProps<InputProps>) => {
  if (isInvalid) {
    return `
      background-color: ${theme.colors.white};
      border-color: ${theme.colors.red};
      box-shadow: 0px 0px 0px 4px ${theme.colors.red}33;
    `;
  }

  if (readOnly && value) {
    return `
      border-color: ${theme.colors.lightGrey2};
      background-color: ${theme.colors.white};
      color: ${theme.colors.lightGrey1};
    `;
  }

  return `
    &:focus {
      border-color: ${theme.colors.blue};
      background-color: ${theme.colors.white};
      box-shadow: 0px 0px 0px 4px ${theme.colors.blue}33;
    }

    &:valid:not(:focus) {
      border-color: ${theme.colors.lightGrey2};
      background-color: ${theme.colors.white};
    }
  `;
};
const Input = styled.input<InputProps>`
  display: block;
  flex: 1;
  width: 100%;

  outline: none;
  box-shadow: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey3};
  padding: 11px 16px;
  background: ${({ theme }) => theme.colors.lightGrey3};

  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  color: ${({ theme }) => theme.colors.black};

  ${getBg}
`;

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  isInvalid?: boolean;
  renderAddon?: () => React.ReactNode;
  renderAddonIcon?: () => React.ReactNode;
  inputRef?: React.RefObject<HTMLInputElement>;
}

const InputField = ({
  id,
  className,
  error,
  renderAddon,
  renderAddonIcon,
  type,
  inputRef,
  ...props
}: InputProps) => {
  return (
    <InputGroup className={className} hasAddonIcon={!!renderAddonIcon}>
      <Input id={id} type={type || 'text'} ref={inputRef} {...props} />
      {renderAddon ? renderAddon() : null}
      {renderAddonIcon ? <i>{renderAddonIcon()}</i> : null}
    </InputGroup>
  );
};

export default InputField;