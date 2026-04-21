<p align="center">
  <img src="https://github.com/HELLOMEDHIRA/medhira/blob/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="200"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

# medhira-react-typescript-hooks

Custom React hooks for making development easier, faster, and more performant.

## Why MEDHIRA?

- **useDefaultReducer** - Simplified state management
- **TypeScript Ready** - Full type definitions
- **Lightweight** - Zero dependencies
- **React 18+** - Compatible with latest React

## Installation

```bash
npm install medhira-react-typescript-hooks
# or
yarn add medhira-react-typescript-hooks
```

## Available Hooks

### useDefaultReducer

Simple state management hook.

#### Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `initialState` | object | Initial state object | Yes |

#### Returns

| Return | Type | Description |
|--------|------|-------------|
| `state` | object | Current state |
| `multipleAction` | function | Update state with object |

#### Example

```jsx
import { useDefaultReducer } from 'medhira-react-typescript-hooks';

const initialState = {
  email: null,
  password: null
};

function LoginForm() {
  const { state, multipleAction } = useDefaultReducer(initialState);

  return (
    <input
      value={state.email}
      onChange={(e) => multipleAction({ email: e.target.value })}
    />
  );
}
```

## Contributing

Contributions welcome!

## Sponsor & Support

- GitHub: https://github.com/HELLOMEDHIRA
- Email: hello.medhira@gmail.com

## About MEDHIRA

**MEDHIRA** - Engineering Intelligence Across Everything

- Website: https://medhira.readthedocs.io/en/latest/
- GitHub: https://github.com/HELLOMEDHIRA

---

## License

MIT

---

Made with passion by MEDHIRA