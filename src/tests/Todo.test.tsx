import {ToDo} from './Todo';
import {render} from '@testing-library/react';

type ComponentProps = React.ComponentProps<typeof ToDo>;

const baseProps: ComponentProps = {
  onClick: () => {},
  id: 1,
};

function renderUI(props: Partial<ComponentProps> = {}) {
  const rtlProps = render(<ToDo {...baseProps} {...props} />);

  return {
    ...rtlProps,
    rerender: (newProps: Partial<ComponentProps>) =>
      rtlProps.rerender(<ToDo {...baseProps} {...props} {...newProps} />),
  };
}

it('fetches a todo', () => {
  const {
    /* selectors */
  } = renderUI({onClick: () => {}, id: 1});
  // rest of the test
});

it('fetches a todo', () => {
  const {
    /* selectors */
  } = renderUI({onClick: () => {}, id: 420});
  // rest of the test
});

it('reacts to id change', () => {
  const {rerender} = renderUI({id: 1});
  // assert
  rerender({id: 2});
  // assert
});
