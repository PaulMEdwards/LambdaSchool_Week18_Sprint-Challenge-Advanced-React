- [x] Why would you use class component over function components (removing hooks from the question)?

  - More/direct control over how the components work. More generic JavaScript form of implementing React which may be more comfortable to developers not familiar with the React functional components style.

- [x] Name three lifecycle methods and their purposes.

  - componentDidMount: called before the component is created allowing custom logic such as making an API call.
  - componentDidUpdate: called when the component is updated to permit additional follow-on state changes.
  - componentWillUnmount: called before the component is destroyed to allow cleaning up, such as stopping timers and canceling API calls, preventing memory leaks.

- [x] What is the purpose of a custom hook?

  - You build the hook yourself, giving you complete control to apply non-visual behavior and stateful logic within your components by reusing the hook as needed, facilitating DRY.

- [x] Why is it important to test our apps?

  - To ensure you're delivering QUALITY work which meets the stated needs/goals of the functionality.
  - To be kind to your future self by ensuring future changes do not break current functionality.
  - To establish a solid foundation which your and/or others can build upon.
