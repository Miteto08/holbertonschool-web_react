      Project: React component | Holberton Laval, France Intranet

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/7953d594b3ffc14201f5.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240827%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240827T141417Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a0b20fb9a652cbeb40af43a915aa13464709a69203218a2305f2afbd59a27ad2)

Resources
---------

**Read or watch**:

*   [React components](/rltoken/ssJXLhAOlvi-U_zTLGV_MA "React components")
*   [React Developer Tools](/rltoken/cYOQ91eTl7FdNCqPRuKDUw "React Developer Tools")
*   [Enzyme Shallow](/rltoken/sW1fv4kj1zIrejfN_rNSxw "Enzyme Shallow")
*   [Enzyme Mount](/rltoken/L6sQhzeTh3ECtFOVJ66SEg "Enzyme Mount")
*   [Enzyme Unmount](/rltoken/kXC_Mi0iPE1QGa8BHF8qng "Enzyme Unmount")
*   [React Pure components](/rltoken/8-iHzUjpgeDkwIpkrNHzBA "React Pure components")
*   [React Higher Order Components](/rltoken/UdMbY_Mc8b8gNNXStnjlrQ "React Higher Order Components")
*   [Jest mock function](/rltoken/T_FaxNTmCKpFs6sqY2Bppg "Jest mock function")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/wk6j6nYuf2em3Yql6PTQIw "explain to anyone"), **without the help of Google**:

*   When to use a Class or a function to create a component
*   The lifecycle of a Class component
*   How to test a component
*   How to utilize a Jest spy to verify that a function is being called correctly
*   What an HOC is and how to use it
*   How to optimize performance and control which components to render

Requirements
------------

*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using `node 20.x.x` and `npm 10.x.x`
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory

Tasks
-----

### 0\. Commence with class components

mandatory

Start this project with files from the the last task of the `React Props` project:

**Convert the App function into a React Class:**

*   Modify the function within `App.js` to convert the App function into a React class
*   Make sure that the tests are still passing

**Requirements:**

*   At this point, reloading the App should display the exact same page as the last task
*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_0/dashboard/src/App/App.js`

**0/1** pt

### 1\. Lifecycles

mandatory

**Add lifecycle to a component**

In the `App` Class:

*   Add a props named `logOut` with the props type being `function`
*   The default value for this property, should be an empty function
*   Add an event listener when the component is mounted to listen to when the user is pressing down the keyboard keys
*   When the user is pressing down the `control` and the `h` keys simultaneously, display the alert `Logging you out` and call the function `logOut`

**Add the tests**

In the test file for the App Class:

*   Create a test to verify that when the keys `control` and `h` are pressed the `logOut` function, passed as a prop, is called and the alert function is called with the string `Logging you out`

**Requirements:**

*   Make sure to remove the event listener when the component is unmounted
*   In the test file, make sure to restore the alert function you mocked
*   At this point, reloading the App should display the exact same page as the last task
*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_1/dashboard/src/App/App.js, task_1/dashboard/src/App/App.test.js`

**0/2** pts

### 2\. Handling Events

mandatory

**Create a new handing event**

In the `Notifications` component:

*   Convert the function into a React Class
*   Make sure that the tests are still passing
*   Create a new `markAsRead` function within the Notifications class. It accepts one argument: id(number)
*   When the function is called, it logs to the console the message “Notification $id has been marked as read
*   Pass the function `markAsRead` to the `NotificationItem` component as a property

In the `NotificationItem` Class:

*   Modify the `li` element to call the new function `markAsRead` on click. It should send the id of the notification
*   Define the new property type and the default property for the new properties

**Add the tests**

In the `Notifications` test file:

*   Create a test, that will mockup the console.log function
*   Check that when calling the function `markAsRead` on an instance of the component, the spy is being called with the right message

In the `NotificationItem` test file:

*   Create a test, that will pass a spy as the `markAsRead` property
*   Check that when simulating a click on the component, the spy is called with the right ID argument

**Requirements:**

*   Make sure to bind the function `markAsRead` in your constructor to avoid unecessary re-rendering
*   In the test file, make sure to restore the console function you mocked
*   At this point, reloading the App should display the exact same page as the last task. Use the React Chrome Extension to make sure the Notifications component displays correctly
*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_2/dashboard/src/Notifications/NotificationItem.js, task_2/dashboard/src/Notifications/NotificationItem.test.js, task_2/dashboard/src/Notifications/Notifications.js, task_2/dashboard/src/Notifications/Notifications.test.js`

**0/10** pts

### 3\. Reusable comments & specialization

mandatory

**Containment**

Create a new component named `BodySection`. The component does not know its children. It should output the following:

*   A div with the class `bodySection`
*   Within the div, a `h2` element containing a title passed as a prop
*   Under the `h2` the children of `BodySection`

**Tips:**

Rendering the following

    <BodySection title="test">
      <p>test</p>
    </BodySection>


Should generate:

    <div className="bodySection">
      <h2>test</h2>
      <p>test</p>
    </div>


**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_3/dashboard/src/BodySection/BodySection.js`

**0/5** pts

### 4\. Specialization

mandatory

in `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js`, create a new component named `BodySectionWithMarginBottom`. The component does not know its children. It should output the following:

*   A div with the class `bodySectionWithMargin`
*   Within the div, a `BodySection` element with the same props passed to `bodySectionWithMarginBottom`

in `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.css`

*   Set the style for the class `bodySectionWithMargin` with a margin bottom of 40px
*   Import the styling into the `BodySectionWithMarginBottom` component

**Requirements:**

*   Make sure to define the propTypes for both props
*   Do not repeat each props manually and use the spread operator

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.js, task_3/dashboard/src/BodySection/BodySection.css`

**0/7** pts

### 5\. Use the new components

mandatory

**in `task_3/dashboard/src/App/App.js`, modify the `App` component:**

*   Wrap the `CourseList` component with the newly created `BodySectionWithMarginBottom` component. The title should be `Course list`
*   Wrap the `Login` component with the newly created `BodySectionWithMarginBottom` component. The title should be `Log in to continue`
*   Using the `BodySection` component, add a new block with the title `News from the School`. The component should contain a paragraph with some random text

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_3/dashboard/src/App/App.js`

**0/8** pts

### 6\. Test the new components

mandatory

in `task_3/dashboard/src/BodySection/BodySection.test.js`:

*   Add one test checking that shallowing the component should render correctly the children and one `h2` element

E.g. with the following code:

    <BodySection title="test title">
      <p>test children node</p>
    </BodySection>


You should check that:

*   There is one `h2` element and it includes the text `test title`
*   There is one `p` element and it includes the text `test children node`

in `task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js`:

*   Add one test checking that shallowing the component should render correctly a `BodySection` component and that the props are passed correctly to the child component

**Requirements:**

*   Make sure that the CSS is correctly applied to your component
*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_3/dashboard/src/BodySection/BodySection.test.js, task_3/dashboard/src/BodySection/BodySectionWithMarginBottom.test.js`

**0/6** pts

### 7\. Create WithLogging HOC

mandatory

We would like to add a way to log to the console every time a component has been mounted and every time it is about to unmount.

**To not repeat the same code everywhere, create a HOC component in `task_4/dashboard/src/HOC/WithLogging.js`:**

*   The component should log to the console `Component NAME_OF_THE_WRAPPED_COMPONENT is mounted` on `componentDidMount()`
*   The component should log to the console `Component NAME_OF_THE_WRAPPED_COMPONENT is going to unmount` on `componentWillUnmount()`
*   Modify the `displayName` of the HOC to always display `WithLogging(NAME_OF_THE_WRAPPED_COMPONENT)` in the React Chrome Extension or for debugging
*   `NAME_OF_THE_WRAPPED_COMPONENT` should be the name of the wrapped component or class. If the wrapped element has no name it should default to `Component`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_4/dashboard/src/HOC/WithLogging.js`

**0/4** pts

### 8\. Write a test for the HOC

mandatory

**in `task_4/dashboard/src/HOC/WithLogging.test.js`, write some tests for the HOC component:**

*   The first test should make sure `console.log` was called on mount and on unmount with `Component` when the wrapped element is pure html
*   The second test should make sure `console.log` was called on mount and on unmount with the name of the component when the wrapped element is the `Login` component. `Component Login is mounted` and `Component Login is going to unmount` should be sent to the console

**Tips:**

*   Writing a unit test for HOC can be difficult. Create a variable with the HOC wrapping a function rendering the React component or html. e.g. `WithLogging(() => <p />)`

**Requirements:**

*   Make sure that the messages `Component Login is mounted` and `Component Login is going to unmount` are sent when loading the app
*   In the test file, make sure to restore the console function you mocked
*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_4/dashboard/src/HOC/WithLogging.test.js`

**0/3** pts

### 9\. Declare a pure component

mandatory

**In `task_5/dashboard/src/Notifications/NotificationItem.js`:**

*   Modify the component to make it “pure”. Which means that it will only update when its props and state are different

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_5/dashboard/src/Notifications/NotificationItem.js`

**0/1** pt

### 10\. Make your own pure component

mandatory

**In `task_5/dashboard/src/Notifications/Notifications.js`:**

*   Modify the file so it only updates itself when the new property `listNotifications` has a longer list of elements than the previously
*   You must implement the function `shouldComponentUpdate` to add this performance optimization

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_5/dashboard/src/Notifications/Notifications.js`

**0/2** pts

### 11\. Add a test

mandatory

**In `task_5/dashboard/src/Notifications/Notifications.test.js`, add two checks:**

*   The first check should verify that when updating the props of the component with the same list, the component doesn’t rerender
*   The second check should verify that when updating the props of the component with a longer list, the component does rerender

**Tips:**

*   Since the `NotificationItem` component is a function component, you can’t directly use `React.PureComponent`
*   Using the React Chrome Extension to make sure the `Notifications` component does not rerender will not work because the extension bypass `shouldComponentUpdate`. Use the test to verify your code instead
*   You can use the function `setProps` to change the props of the component

**Requirements:**

*   The console in your browser should not show any error or warning

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `React_component`
*   File: `task_5/dashboard/src/Notifications/Notifications.test.js`

**0/4** pts