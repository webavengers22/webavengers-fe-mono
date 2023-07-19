import 'twin.macro';

import { useMergeRefs } from '@floating-ui/react';
import { clsx } from 'clsx';
import { InputHTMLAttributes, forwardRef, useEffect, useRef } from 'react';

import { theme } from './theme';
import Icon from 'icons/src/Icon';

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'placeholder'> {
  indeterminate?: boolean;
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ disabled = false, indeterminate, label, ...rest }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const combineRef = useMergeRefs([inputRef, ref]);

    useEffect(() => {
      if (indeterminate && inputRef.current) {
        inputRef.current.indeterminate = true;
      } else if (inputRef.current) {
        inputRef.current.indeterminate = false;
      }
    }, [indeterminate]);

    return (
      <label className={clsx('group', disabled && 'disabled')} css={[theme.container.base]}>
        <input
          ref={combineRef}
          className="peer"
          type="checkbox"
          css={[theme.input]}
          disabled={disabled}
          {...rest}
        />
        <div css={[theme.icon.base, theme.icon.indeteminate, theme.icon.hover]}>
          {indeterminate ? (
            <div tw="w-[10px] h-[2px] rounded-[34px] bg-Shades-0" />
          ) : (
            <Icon name={'Check'} solid={true} />
          )}
        </div>

        {label && <p css={[theme.label]}>{label}</p>}
      </label>
    );
  },
);
Checkbox.displayName = 'Checkbox';
