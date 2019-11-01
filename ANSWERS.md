- [ ] Why would you use class component over function components (removing hooks from the question)?
If you mean removing hooks from functional components then because functional components can't hold state.  Otherwise im not sure why anybody would ever program a class component as they may no longer be needed.

- [ ] Name three lifecycle methods and their purposes.
componentWillMount
componentDidMount
componentWillUnmount

- [ ] What is the purpose of a custom hook?
Custom hooks allow us to resuse stateful logic while keeping the state and effects inside of it isolated.

- [ ] Why is it important to test our apps?
It is important to test our applications because it minimizes the risk of bugs.  & VVV
Reduces the risk of regressions.
Allows us to trust the code.
Makes us think about the edge cases.
Acts as a safety net when making changes or refactoring.
Acts as documentation for the code.
Encourages us to write more testable (better!) code.