# Quick Start

```jsx
import { useDefaultReducer } from 'medhira-react-typescript-hooks';

const initialState = { name: '', email: '' };

function MyComponent() {
  const { state, multipleAction } = useDefaultReducer(initialState);

  return (
    <input
      value={state.name}
      onChange={(e) => multipleAction({ name: e.target.value })}
    />
  );
}
```