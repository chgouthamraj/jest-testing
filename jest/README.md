# Jest Unit Testing - README

This README provides a guide to Jest-based unit testing for JavaScript functions and use cases, including synchronous, asynchronous, and mocked scenarios.

## 📦 Project Structure

```
project/
├── index.js              # Exports multiply function
├── async.js              # Exports async fetchData function
├── mathUtils.js          # Utility math functions (add, subtract, etc.)
├── app.js                # calculate function using mathUtils
├── __tests__/
│   └── tests.js          # All test cases
```

---

## 🧪 Test Cases

### ✅ Basic Function Tests

```js
expect(multiply(2, 5)).toBe(10);
expect(multiply(2, 5)).not.toBe(9);
```

### 🔍 Object Matching

```js
expect({ alpha: 'A', beta: 'B' }).toEqual({ alpha: 'A', beta: 'B' });
```

### 🚫 Null Checks

```js
expect(value).toBeNull();
expect(value).toBeDefined();
expect(value).not.toBeUndefined();
expect(value).not.toBeTruthy();
expect(value).toBeFalsy();
```

### 0️⃣ Zero Value Checks

```js
expect(value).not.toBeNull();
expect(value).toBeDefined();
expect(value).not.toBeTruthy();
expect(value).toBeFalsy();
```

### ➕ Comparisons and String Matching

```js
expect(3 + 3).toBeGreaterThan(5);
expect(3 + 3).toBe(6);
expect(0.2 + 0.1).toBeCloseTo(0.3);
expect("developer").toMatch(/dev/);
```

### 📋 Array Matchers

```js
expect(todoList).toContain("pay bills");
```

### 💥 Exception Matchers

```js
function openValidFile() {
  throw new Error('file not found');
}
expect(() => openValidFile()).toThrow('file not found');
```

### 🤖 Mock Functions

```js
const drink = jest.fn(() => true);
expect(drink).toHaveReturned();
expect(drink).toHaveReturnedWith(true);
```

---

## 🌐 Async Tests

### ✅ Promise Resolution

```js
test('resolves with chocolate', () => {
  return fetchData().then(data => {
    expect(data).toBe('choclate');
  });
});
```

### ❌ Promise Rejection

```js
test('rejects with error', async () => {
  expect.assertions(1);
  try {
    await fetchData(true);
  } catch (error) {
    expect(error).toBe('error occured');
  }
});
```

### ✅ Using `resolves` and `rejects`

```js
await expect(fetchData()).resolves.toBe('choclate');
await expect(fetchData(true)).rejects.toMatch('error occured');
```

---

## 🧪 Mocking with Jest

### `mathUtils.js`

```js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
```

### `app.js`

```js
function calculate(a, b, operation) {
  switch (operation) {
    case 'add': return add(a, b);
    case 'subtract': return subtract(a, b);
    case 'multiply': return multiply(a, b);
    case 'divide': return divide(a, b);
    default: throw new Error('Invalid operation');
  }
}
```

### Jest Mock Test

```js
jest.mock('./mathUtils');

test('calls add and subtract', () => {
  calculate(1, 2, 'add');
  expect(add).toHaveBeenCalledWith(1, 2);

  calculate(1, 2, 'subtract');
  expect(subtract).toHaveBeenCalled();
});
```

---

## 📚 Conclusion

This suite of tests demonstrates core Jest capabilities:

* Exact matching (`toBe`, `toEqual`, etc.)
* Object, null, and array assertions
* String matching and comparison
* Asynchronous testing with Promises
* Mocking functions and modules

Use this README as a reference template when building Jest test suites for your Node.js or React projects.

---

### 🛠 Run the tests

```bash
npm install
npm test
```
