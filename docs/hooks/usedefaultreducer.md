# useDefaultReducer

State management hook.

## Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `initialState` | object | Yes | Initial state object |

## Returns

| Return | Type | Description |
|--------|------|-------------|
| `state` | object | Current state |
| `multipleAction` | function | Update state |

## Example

```jsx
const { state, multipleAction } = useDefaultReducer({
  email: '',
  password: ''
});

multipleAction({ email: 'test@example.com' });
```