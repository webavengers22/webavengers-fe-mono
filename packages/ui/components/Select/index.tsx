import 'twin.macro';

import { FC, useState } from 'react';

import { Icon } from 'icons';

import { Floating } from '../Floating';
import { ScrollArea } from '../ScrollArea';
import { theme } from './theme';

export interface Option {
  value: string;
  label: string;
}

export interface SelectProps {
  width?: number;
  placeholder?: string;
  options?: Option[];
  selected?: string;
  onSelected?: (selected: string) => void;
}

export const Select: FC<SelectProps> = ({
  width,
  placeholder = '선택해주세요',
  selected,
  options,
  onSelected,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedLabel = options?.find((option) => option.value === selected)?.label;

  const renderOptions = () => {
    return (
      <div>
        <ScrollArea css={theme.optionContainer} style={{ width }}>
          <ul>
            {options?.map((option) => {
              return (
                <li
                  css={[
                    theme.option.base,
                    theme.option.hover,
                    option.value === selected && theme.option.selected,
                  ]}
                  key={option.value}
                  onClick={() => {
                    onSelected?.(option.value);
                    setIsOpen(false);
                  }}
                >
                  {option.label}
                </li>
              );
            })}
          </ul>
        </ScrollArea>
      </div>
    );
  };

  return (
    <Floating
      placement="bottom"
      offset={1}
      contents={renderOptions()}
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <div
        tabIndex={0}
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="options-list"
        aria-label="select-label"
        aria-autocomplete="none"
        css={[theme.label.base, theme.label.hover, isOpen && theme.label.open]}
        style={{ width }}
      >
        <span>{selectedLabel || placeholder}</span>
        <Icon name={'ArrowDown'} solid color={'none'} />
      </div>
    </Floating>
  );
};
