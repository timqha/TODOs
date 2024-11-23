import { render, fireEvent, waitFor } from '@testing-library/react-native';
import TodoList from './TodoList';

describe('TodoList test', () => {
  it('renders empty state', () => {
    const { getByText } = render(<TodoList />);
    expect(getByText('No tasks yet')).toBeTruthy();
    expect(getByText('Add a new task to get started')).toBeTruthy();
  });

  it('add a new todo item', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <TodoList />,
    );

    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add');

    fireEvent.changeText(input, 'My new task');
    fireEvent.press(addButton);

    await waitFor(() => expect(queryByText('No tasks yet')).toBeNull());

    expect(getByText('My new task')).toBeTruthy();
  });

  it('toggles a todo item completion correctly', async () => {
    const { getByPlaceholderText, getByText } = render(<TodoList />);

    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add');
    fireEvent.changeText(input, 'My toggling task');
    fireEvent.press(addButton);

    const taskItem = getByText('My toggling task');
    fireEvent.press(taskItem);

    await waitFor(() => {
      expect(taskItem.props.style).toContainEqual(
        expect.objectContaining({
          textDecorationLine: 'line-through',
        }),
      );
    });
  });

  it('deletes a todo item correctly', async () => {
    const { getByPlaceholderText, getByText, queryByText, getByTestId } =
      render(<TodoList />);

    const input = getByPlaceholderText('Add a new task');
    const addButton = getByText('Add');
    fireEvent.changeText(input, 'My task to delete');
    fireEvent.press(addButton);

    const taskToDelete = getByText('My task to delete');
    fireEvent(taskToDelete, 'swipeLeft');

    const deleteButton = getByText('Delete');
    fireEvent.press(deleteButton);

    await waitFor(() => expect(queryByText('My task to delete')).toBeNull());
  });
});
