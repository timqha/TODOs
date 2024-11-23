import { Todo } from '../types';

const ACTIONS = {
  ADD_TASK: 'ADD_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  CHECKED_TASK: 'CHECKED_TASK',
} as const;

type State = {
  tasks: Todo[];
};

type Action =
  | { type: typeof ACTIONS.ADD_TASK; payload: string }
  | { type: typeof ACTIONS.REMOVE_TASK; taskID: Todo['id'] }
  | { type: typeof ACTIONS.CHECKED_TASK; taskID: Todo['id'] };

const initialStore: State = {
  tasks: [],
};

function reducerTodo(state: State, action: Action): State {
  switch (action.type) {
    case ACTIONS.ADD_TASK:
      return {
        ...state,
        tasks: [
          { id: Date.now().toString(), text: action.payload, completed: false },
          ...state.tasks,
        ],
      };
    case ACTIONS.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.taskID),
      };
    case ACTIONS.CHECKED_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.taskID
            ? { ...task, completed: !task.completed }
            : task,
        ),
      };
    default:
      return state;
  }
}

export { reducerTodo, initialStore, ACTIONS };
