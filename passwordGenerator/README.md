# Password Generator 🔐

A simple and efficient Password Generator built with React.js and styled using Tailwind CSS.

## 🚀 Features

- Generate strong passwords with customizable options.
- Copy passwords to the clipboard.
- Use of essential React hooks: `useState`, `useEffect`, `useCallback`, and `useRef`.
- Fully responsive design with Tailwind CSS.

## 🛠️ Technologies Used

- React.js
- Tailwind CSS
- React Hooks (`useState`, `useEffect`, `useCallback`, `useRef`)

## 🔍 Understanding the React Hooks Used

### 🟢 `useState` – Managing State

`useState` is used to store and update values dynamically in the UI.

**Example Use Case:**

- Store the generated password.
- Track user-selected options (e.g., password length, inclusion of numbers/symbols).

```jsx
let [length, setlength] = useState(8);
let [numberAllowed, setNumberAllowed] = useState(false);
let [charAllowed, setCharAllowed] = useState(false);
let [password, setPassword] = useState("");
```

### 🔵 `useEffect` – Side Effects Handling

`useEffect` is used to handle side effects, such as automatically generating a new password when the user changes the settings.

**Example Use Case:**

- Auto-generate a new password whenever length or includeNumbers/includeSymbols changes.

```jsx
useEffect(() => {
  passwordGenerator();
}, [length, numberAllowed, charAllowed, setPassword]);
```

### 🟣 `useCallback` – Optimizing Function Performance

`useCallback` memoizes functions, preventing unnecessary re-renders and improving performance.

**Example Use Case:**

- Prevents the generatePassword function from being recreated unnecessarily.

```jsx
let passwordGenerator = useCallback(() => {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  if (numberAllowed) str += "0123456789";
  if (charAllowed) str += "!@#$%^&*(){}:<>_+-=`?~";
  for (let i = 0; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  setPassword(pass);
}, [length, numberAllowed, charAllowed, setPassword]);
```

### 🟠 useRef – Managing References

`useRef` provides a reference to DOM elements without causing re-renders.

**Example Use Case:**

- Used for copying the password to the clipboard without triggering a state update.

```jsx
let copyPasswordToClipBoard = useCallback(() => {
  passwordRef.current.select();
  passwordRef.current.setSelectionRange(0, 100);

  window.navigator.clipboard.writeText(password);
}, [password]);
```
