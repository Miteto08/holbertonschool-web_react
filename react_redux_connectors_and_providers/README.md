      Project: React Redux Connectors and Providers | Holberton Laval

![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/31221f70d90911840d47.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20240930%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20240930T091441Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=ec3e75c8bfd5241a5fabe8a332610904c8d73825a19cc4366cd65790f4fbc315)

Resources
---------

**Read or watch**:

*   [Redux CreateStore](/rltoken/7zj3lJIy-gBOOw6dqp5n8g "Redux CreateStore")
*   [Redux Connect](/rltoken/7zj3lJIy-gBOOw6dqp5n8g "Redux Connect")
*   [Redux Provider](/rltoken/-38-TcyW5Shs2dXHTQEFqg "Redux Provider")
*   [Redux Middleware](/rltoken/a3tEDP2XQn0NXv3WkVTQSQ "Redux Middleware")
*   [Redux Thunk](/rltoken/RK_WL5d1_U-F6npZHXVxug "Redux Thunk")
*   [Redux devtools](/rltoken/4MFDkhQlyIQk_BqfUs886A "Redux devtools")
*   [Redux Reselect](/rltoken/wxgABF75esTwmaAo87bzjg "Redux Reselect")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/_4aXeH1_dZRlF-ZV_d3L4g "explain to anyone"), **without the help of Google**:

*   Redux connectors and how to use them
*   The different functions you can pass to a connector (mapStateToProps, mapDispatchToPros)
*   How to map an action creator to a component using a connector
*   How to map an async action creator to a component with Redux Thunk
*   What Redux Providers are and how to set up your app’s store
*   How you can improve a connector’s performance using Reselect
*   How to use Redux’s dev tools to debug the state of your application

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node `12.x.x` and `npm 6.x.x`
*   Push all of your files, including `package.json` and `.babelrc`
*   All of your functions must be exported

Provided files
--------------

### `dashboard/dist/courses.json`

<details>
<summary>Click to show/hide file contents</summary>

    [
      {
        "id": "1",
        "name": "ES6",
        "credit": 60
      },
      {
        "id": "2",
        "name": "Webpack",
        "credit": 20
      },
      {
        "id": "3",
        "name": "React",
        "credit": 40
      }
    ]

</details>

### `dashboard/dist/login-success.json`

<details>
<summary>Click to show/hide file contents</summary>


    {
      "first_name": "Johann",
      "last_name": "Salva",
      "email": "[email protected]",
      "profile_picture": "http://placehold.it/32x32"
    }

</details>

### `dashboard/dist/notifications.json`

<details>
<summary>Click to show/hide file contents</summary>

    [
      {
        "id": "5debd76480edafc8af244228",
        "author": {
          "id": "5debd764a7c57c7839d722e9",
          "name": {
            "first": "Poole",
            "last": "Sanders"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 25
        },
        "context": {
          "guid": "2d8e40be-1c78-4de0-afc9-fcc147afd4d2",
          "isRead": true,
          "type": "urgent",
          "value": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
        }
      },
      {
        "id": "5debd764507712e7a1307303",
        "author": {
          "id": "5debd7648ba8641ce0a34ea4",
          "name": {
            "first": "Norton",
            "last": "Grimes"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 37
        },
        "context": {
          "guid": "cec84b7a-7be4-4af0-b833-f1485433f66e",
          "isRead": false,
          "type": "urgent",
          "value": "ut labore et dolore magna aliqua. Dignissim convallis aenean et tortor at risus viverra adipiscing. Ac tortor dignissim convallis aenean et. "
        }
      },
      {
        "id": "5debd76444dd4dafea89d53b",
        "author": {
          "id": "5debd764a7c57c7839d722e9",
          "name": {
            "first": "Poole",
            "last": "Sanders"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 25
        },
        "context": {
          "guid": "280913fe-38dd-4abd-8ab6-acdb4105f922",
          "isRead": false,
          "type": "urgent",
          "value": "Non diam phasellus vestibulum lorem sed risus ultricies. Tellus mauris a diam maecenas sed"
        }
      },
      {
        "id": "5debd76485ee4dfd1284f97b",
        "author": {
          "id": "5debd764f07f50822352e252",
          "name": {
            "first": "Roach",
            "last": "Cameron"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 26
        },
        "context": {
          "guid": "89906f88-a02d-41ee-b214-daa0c54633e3",
          "isRead": true,
          "type": "urgent",
          "value": "Odio pellentesque diam volutpat commodo sed egestas egestas"
        }
      },
      {
        "id": "5debd7644e561e022d66e61a",
        "author": {
          "id": "5debd764e66586653a8a33f3",
          "name": {
            "first": "Christy",
            "last": "Collier"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 27
        },
        "context": {
          "guid": "f8d66cca-63ec-4f19-a422-a3e1c8f05a36",
          "isRead": false,
          "type": "urgent",
          "value": "In hendrerit gravida rutrum quisque non tellus orci. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Lorem mollis aliquam ut porttitor"
        }
      },
      {
        "id": "5debd7644aaed86c97bf9d5e",
        "author": {
          "id": "5debd764f5017139ce541857",
          "name": {
            "first": "Mason",
            "last": "Douglas"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 31
        },
        "context": {
          "guid": "de55f849-8fca-4ac7-afbb-41751f09d0c6",
          "isRead": false,
          "type": "default",
          "value": "Cursus metus aliquam eleifend mi in nulla posuere. "
        }
      },
      {
        "id": "5debd76413f0d5e5429c28a0",
        "author": {
          "id": "5debd76456a6a030695e6a70",
          "name": {
            "first": "Marshall",
            "last": "Wynn"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 26
        },
        "context": {
          "guid": "8094c267-ab84-47e1-8801-58ddd23f3b2a",
          "isRead": false,
          "type": "default",
          "value": "Quam viverra orci sagittis eu volutpat odio facilisis mauris sit"
        }
      },
      {
        "id": "5debd7642e815cd350407777",
        "author": {
          "id": "5debd764f8452ef92346c772",
          "name": {
            "first": "Cherry",
            "last": "Miles"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 25
        },
        "context": {
          "guid": "3068c575-d619-40af-bf12-dece1ee18dd3",
          "isRead": true,
          "type": "default",
          "value": "Est ante in nibh mauris cursus mattis molestie a iaculis. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim"
        }
      },
      {
        "id": "5debd764c1127bc5a490a4d0",
        "author": {
          "id": "5debd76470dcced4a244fe7f",
          "name": {
            "first": "Sykes",
            "last": "Fulton"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 36
        },
        "context": {
          "guid": "efb6c485-00f7-4fdf-97cc-5e12d14d6c41",
          "isRead": false,
          "type": "default",
          "value": "Cursus risus at ultrices mi."
        }
      },
      {
        "id": "5debd7646ef31e0861ec1cab",
        "author": {
          "id": "5debd7645c8d811b8c6a235d",
          "name": {
            "first": "Valentine",
            "last": "Juarez"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 25
        },
        "context": {
          "guid": "1d3918d0-67e6-44a4-9031-72d7750234de",
          "isRead": true,
          "type": "default",
          "value": "Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing"
        }
      },
      {
        "id": "5debd764a4f11eabef05a81d",
        "author": {
          "id": "5debd764d0b0e7ed3e45ee6d",
          "name": {
            "first": "Maryann",
            "last": "Larson"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 32
        },
        "context": {
          "guid": "98fe7af4-8300-461f-a376-c147b2987616",
          "isRead": false,
          "type": "default",
          "value": "Ac placerat vestibulum lectus mauris ultrices eros in cursus. Amet nisl suscipit adipiscing bibendum est ultricies integer. Lorem donec massa sapien faucibus et molestie ac"
        }
      },
      {
        "id": "5debd764af0fdd1fc815ad9b",
        "author": {
          "id": "5debd764fb6db3a5c21ce617",
          "name": {
            "first": "Naomi",
            "last": "Hayes"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 30
        },
        "context": {
          "guid": "cd1a09cf-ad6e-4478-9662-18a292807e2e",
          "isRead": false,
          "type": "urgent",
          "value": "Nulla malesuada pellentesque elit eget gravida cum sociis"
        }
      },
      {
        "id": "5debd76468cb5b277fd125f4",
        "author": {
          "id": "5debd764f7234e1d44828515",
          "name": {
            "first": "Knowles",
            "last": "Vazquez"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 28
        },
        "context": {
          "guid": "0f446b01-37c3-4884-9dc6-316f23b7711b",
          "isRead": false,
          "type": "urgent",
          "value": "Elit eget gravida cum sociis natoque penatibus et. Congue mauris rhoncus aenean vel"
        }
      },
      {
        "id": "5debd764de9fa684468cdc0b",
        "author": {
          "id": "5debd764ec7c8d21449be7d7",
          "name": {
            "first": "Greta",
            "last": "Benjamin"
          },
          "email": "[email protected]",
          "picture": "http://placehold.it/32x32",
          "age": 23
        },
        "context": {
          "guid": "4cc5bc3a-98fe-4392-b97d-6a41da1d944b",
          "isRead": false,
          "type": "default",
          "value": "Leo vel fringilla est ullamcorper. Volutpat consequat mauris nunc congue"
        }
      }
    ]

</details>

Tasks
-----

### 0\. Write mapStateToProps

mandatory

Reuse the latest dashboard project you worked on in the React course `0x09-React_Redux_reducer` and install `react-redux`

Within the `App/App.js` file:

*   Create a function named `mapStateToProps`. This should connect the `uiReducer` you created and the property `isLoggedIn` that your component is already using
*   Import `connect` from Redux, and connect the `mapStateToProps` to the component

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_0/dashboard/src/App/App.js`

**0/3** pts

### 1\. Create a small store

mandatory

In the `index.js` file:

*   Create a store using `createStore` from Redux that would contain the `uiReducer` state
*   Implement a provider passing the store that you created to the main `App`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_0/dashboard/src/index.js`

**0/2** pts

### 2\. Test MapStateToProps

mandatory

Export the `mapStateToProps` function you created if you haven’t already, and in the `App.test.js` file:

*   Create a new suite to test the function
*   Create a test that verify that the function returns the right object when passing the

    let state = fromJS({
      isUserLoggedIn: true
    });


Should return `{ isLoggedIn: true }`

Tips:

*   At this point your app is not functional but you should be able to load the page without crashing
*   Remember that the state of uiReducer is using Map from Immutable

Requirements:

*   No error should be displayed within the console
*   All the tests in the project should pass

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_0/dashboard/src/App/App.test.js`

**0/2** pts

### 3\. Update mapStateToProps

mandatory

In the `App.js` file:

*   Update the `mapStateToProps` function to also pass to the component the value for `displayDrawer`. It should be connected to the Reducer attribute `isNotificationDrawerVisible`
*   Update the render function of the component to use the value `displayDrawer` coming from the props instead of the state

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_1/dashboard/src/App/App.js`

**0/2** pts

### 4\. Connect your actions creators

mandatory

In the `App.js` file:

*   Connect to the component the actions creators `displayNotificationDrawer` and `hideNotificationDrawer`
*   You should use the simplified version for the `mapDispatchToProps`. No need to import `bindActionCreators`
*   Modify the render function of the component to use the functions passed within the props instead of the action within the Class component

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_1/dashboard/src/App/App.js`

**0/3** pts

### 5\. Refactor your code

mandatory

In the `App.js` file:

*   You can delete the old function `handleDisplayDrawer`
*   You can delete the old function `handleHideDrawer`
*   Remove any state property related to the display of the drawer
*   Remove any binding in the constructor
*   You are now passing to your components props. You need to define `propTypes` and `defaultProps`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_1/dashboard/src/App/App.js`

**0/4** pts

### 6\. Update your tests

mandatory

You can now refactor the `App.test.js` file:

*   You don’t need to test the functions `handleDisplayDrawer` and `handleHideDrawer` since everything is already tested using the Redux mechanism
*   You need to update the test you previously created to support the new attribute

Tips:

*   At this point your app should be functional and able to display/hide the drawer using the Redux state
*   Remember that the state of `uiReducer` is using Map from Immutable

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_1/dashboard/src/App/App.test.js`

**0/3** pts

### 7\. Async actions & Thunk middleware

mandatory

Let’s implement the `LoginRequest` / `logout` actions creators accross the entire application. `LoginRequest` is calling an API and is Async. Therefore, Redux will not support it. We will need to use a middleware

Install `redux-thunk` within your project. And in the `index.js` file, apply the middleware to your store

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/index.js`

**0/2** pts

### 8\. Connect LoginRequest to the App

mandatory

Modify the file `App/App.js`:

*   Connect the action creator `loginRequest` and map it to the `login` prop
*   Modify the component to use the new `login` function from the props instead of the one within the class
*   Refactor the component to remove any `login` or `logout` function and bind

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/App/App.js`

**0/3** pts

### 9\. Connect user state to the Footer

mandatory

Modify the file `Footer/Footer.js`

*   Create a `mapStateToProps` function
*   Map the `user` props to the `user` within the Redux state
*   Connect the Footer component to the function you created
*   Modify the render function and remove any use of the Context. Instead use the `user` prop

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/Footer/Footer.js`

**0/3** pts

### 10\. Connect Logout action creator to the Header

mandatory

Modify the file `Header/Header.js`

*   Create a `mapStateToProps` function
*   Map the `user` props to the `user` within the Redux state
*   Connect the Header component to the function you created
*   Connect the Header component to the `logout` action creator
*   Modify the render function and remove any use of the Context. Instead use the `user` prop. When the user clicks on the link, it should now dispatch the `logout` action creator

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/Header/Header.js`

**0/3** pts

### 11\. Modify the uiReducer

mandatory

Now that we can have the entire login request and the entire feedback loop, let’s modify a few things within the reducer:

*   When the action `LOGIN` is passed, set the user within the state to the one passed within the action
*   When the `LOGOUT` action is passed, make sure to set the `user` to `null`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/reducers/uiReducer.js`

**0/2** pts

### 12\. Modify the test suites

mandatory

Modify the test suites of the different components you modified:

*   In the `App.test.js`, `Footer.test.js`, and `Header.test.js` to import the Stateless components instead of the connected component
*   Remove any use of the `mount` function, and convert everything to use the `shallow` function
*   You should remove any use of `setState` within the tests and pass directly the props to the stateless components
*   Remove any test linked to the `login`, `logout` function within App, and Header
*   Add a test in `uiReducer` to support the new action you just created

Tips:

*   At this point your app should be functional and able to display/hide the drawer, login/logout using the Redux state
*   Remember that the state of uiReducer is using Map from Immutable
*   You can now see that your components logic is simplified. They only respond to props change. The logic is happening within the action creators

Requirements:

*   Do not forget to add `defaultProps` and `PropTypes` to any component receiving props
*   No error should be displayed within the console
*   All the tests in the project should pass

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_2/dashboard/src/App/App.test.js, task_2/dashboard/src/Footer/Footer.test.js, task_2/dashboard/src/Header/Header.test.js, task_2/dashboard/src/reducers/uiReducer.test.js`

**0/13** pts

### 13\. Understand how to use the Redux Chrome extension

mandatory

Install the Redux DevTools extension on your Chrome browser:

*   Modify the `index.js` to support the extension
*   Use the application and note the different actions being registered when you are logging in / logging out
*   Note that a version of the state is saved along the different actions and you can jump at a different moment of the user journey

Tips:

*   Read the documentation of the extension to learn how to support the Chrome extension as well as the Thunk middleware
*   This extension can be one of the most powerful tool to debug an application. Make sure to become familiar with it

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_3/dashboard/src/index.js`

**0/1** pt

### 14\. Combine store: Root reducer

mandatory

Since you have more than one reducer for your application, you will need to combine them into the store.

Create a new file `reducers/rootReducer.js`, in this file, export a `rootReducer`:

*   the root should contain every reducer
*   `courses` maps to `courseReducer`
*   `notifications` maps to `notificationReducer`
*   `ui` maps to `uiReducer`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_4/dashboard/src/reducers/rootReducer.js`

**0/7** pts

### 15\. Combine store: modify the application

mandatory

In the `index.js`, create the store using the root reducer instead of only the ui reducer:

*   Any component connected to the state will probably need to be updated since you added a nested level

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_4/dashboard/src/index.js`

**0/1** pt

### 16\. Combine store: write the tests

mandatory

Modify the test suites:

*   In the `App.test.js`, modify `mapStateToProps` to correctly work with the new format of the reducer
*   Create a `rootReducer.test.js` file to test the root reducer’s initial state for the following structure:

    {
      courses: Map {},
      notifications: Map {},
      ui: Map {}
    }


Requirements:

*   No errors in the browser’s console
*   All tests should pass
*   Use `combineReducer` to create the root reducer

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_4/dashboard/src/App/App.test.js, task_4/dashboard/src/reducers/rootReducer.test.js`

**0/4** pts

### 17\. Connect notifications: New Action Creator

mandatory

We now know how to connect a simple component to a reducer. Let’s work on connecting a more complex component to the the entire API.

Add the following three action creators to `notificationActionCreators.js`

*   `setLoadingState` whose parameter is a boolean. It will send the `SET_LOADING_STATE` action and the boolean.
*   `setNotifications` whose parameter is an array. It will send the `FETCH_NOTIFICATIONS_SUCCESS` action with the data.
*   `fetchNotifications` (which does not have a parameter). Calling it will dispatch `setLoadingState` with the boolean set to true
    *   It fetches `/notifications.json`
    *   Once the fetch is realized, it will dispatch `setNotifications` with the data
    *   At the end of the query it sets the loading state to `false` again

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_5/dashboard/src/actions/notificationActionCreators.js`

**0/7** pts

### 18\. Connect notifications: Improve reducer

mandatory

In the function `notificationReducer` within `notificationReducer.js`:

*   Make sure to add a `loading` attribute to the initial state.
*   Modify the `notifications` object to have the right initial state when merging the data coming from the API
*   Create a `SET_LOADING_STATE` case and update the state accordingly
*   Modify the `FETCH_NOTIFICATIONS_SUCCESS` case to perform a `mergeDeep` with the data

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_5/dashboard/src/reducers/notificationReducer.js`

**0/3** pts

### 19\. Connect notifications to the reducer

mandatory

In the `Notifications.js` component:

*   Map the prop `listNotifications` to the `messages` within the `notifications` state
*   Map the action `fetchNotifications` to the component
*   In `componentDidMount`, call `fetchNotifications`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_5/dashboard/src/Notifications/Notifications.js`

**0/3** pts

### 20\. Connect notifications: clean up

mandatory

With this new behavior, let’s clean up old functions and test data

*   Delete `NotificationItemShape.js`
*   Remove the notification list and delete `markNotificationAsRead` within `App.js`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_5/dashboard/src/App/App.js`

**0/4** pts

### 21\. Connect notifications: update the test suites

mandatory

Modify the test suites to pass the tests:

*   Update `notificationReducer.test.js` to support the new attributes and default state
*   Clean up `App.test.js` for the function you just removed
*   Modify `Notifications.js` and `Notifications.test.js` to make sure that every tests pass correctly

Add new tests:

*   Add a test in `Notifications.test.js` to verify that the function `fetchNotifications` is called when the component is mounted
*   Add a test for `setLoadingState`, `setNotifications`, and `fetchNotifications` to verify that they each create the right actions
*   Add a test for `SET_LOADING_STATE` to verify that it updates the reducer correctly

Tips:

*   At this point, when you load the page, you should be able to see the list of notifications coming from the API using the developer tools or when clicking on the notifications toggle
*   Use some CSS to make the notifications panel readable
*   Look at `valueSeq` from Immutable to iterate on your list of notifications without having to use `toJS()`

Requirements:

*   Make sure to update the different Proptypes so you don’t have any errors in the console
*   Make sure to create the new actions that the action creators are using

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_5/dashboard/src/reducers/notificationReducer.test.js, task_5/dashboard/src/App/App.test.js, task_5/dashboard/src/Notifications/Notifications.js, task_5/dashboard/src/Notifications/Notifications.test.js, task_5/dashboard/src/actions/notificationActionCreators.test.js`

**0/7** pts

### 22\. Selectors

mandatory

To improve performance in your connector, you should always use selectors when you can. Let’s modify the Notifications connector to reuse the selector we built in the previous project:

*   Update `Notifications.js` to use `getUnreadNotifications`
*   Map the `markAsAread` action creator to the component, and use it for `markNotificationAsRead`

Tips:

*   At this point, when you load the page, you should be able to see the list of notifications. Clicking on one notification should make it disappear from the list

Requirements:

*   Make sure to update the selector to use the same `valueSeq` you created previously
*   Make sure to update the tests to work as expected
*   Make sure to create the new actions that the action creators are using

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_6/dashboard/src/Notifications/Notifications.js, task_6/dashboard/src/Notifications/Notifications.test.js`

**0/3** pts

### 23\. Connect courses: create a course selector

mandatory

In `selectors/courseSelector.js`, create a selector that will:

*   Get all the course entities from within the reducer
*   Return a List using `valueSeq` from Immutable

Write a new file `courseSelector.test.js`, that will verify that the selector is working correctly

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_7/dashboard/src/selectors/courseSelector.js, task_7/dashboard/src/selectors/courseSelector.test.js`

**0/3** pts

### 24\. Connect courses: create a fetch courses function

mandatory

In `actions/courseActionCreators.js`:

*   Create a new function named `fetchCourses`, that will query the API in `courses.json` (provided in the project description, put it in your `dist` folder)
*   When the API returns the data, dispatch the action `setCourses`

In `courseActionCreators.test.js`, create a test to verify that the fetch is working correctly

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_7/dashboard/src/actions/courseActionCreators.js, task_7/dashboard/src/actions/courseActionCreators.test.js`

**0/3** pts

### 25\. Connect the courses component

mandatory

In `CourseList.js`, connect the component to:

*   The three action creators: `fetchCourses`, `selectCourse`, and `unSelectCourse`
*   Connect the data to the list of courses using `getListCourses` selector
*   When the component mount, call the action `fetchCourses`

Create a new function `onChangeRow`:

*   It will take two arguments: `id (string)`, `checked (boolean)`
*   When `checked` is `true`, call the action `selectCourse` with the id
*   When `checked` is `false`, call the action `unSelectCourse` with the id

Modify `CourseListRow`:

*   Pass a new prop, `isChecked`, to the component that will pass the `isSelected` attribute coming from the state of the reducer
*   Pass the `onChangeRow` function to the component
*   Modify the component to not use its local state anymore

In the file `CourseList.test.js`, create two new tests:

*   Verify that the action is dispatched when the component is mounted
*   Verify that the two actions are correctly dispatched when the `onChangeRow` function is called

Tips:

*   At this point, when you load the page and you log in, you should be able to see the list of courses. Make sure that everything is working correctly using the developer tools or using the Redux tool
*   When checking or unchecking a row, you should see the state in the Redux tool updated. You should also see the change on the UI
*   Be careful that the API is sending Strings instead of Number for the IDs. You will probably need to adapt your reducers and tests
*   Delete the `CourseShape` file now

Requirements:

*   Make sure to update the tests to work as expected

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_7/dashboard/src/CourseList/CourseList.js, task_7/dashboard/src/CourseList/CourseList.test.js`

**0/8** pts

### 26\. Memoized selectors: Redux Reselect

mandatory

Our current selectors are useful but they are not really performant. Imagine a very long list of notifications with multiple filters on the type and on the read status. This would require a lot of resources to compute. Memoized selectors are very powerful in this sense.

Install Redux Reselect and create a new selector named `getUnreadNotificationsByType` in `notificationSelector.js`:

*   This selector should combine the state of the filter, and the list of notifications
*   When the filter is set to default, it should return all the unread notifications
*   When the filter is set to urgent, it should return all the unread and urgent notifications
*   Delete `getUnreadNotifications`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_8/dashboard/src/selectors/notificationSelector.js`

**0/3** pts

### 27\. Memoized selectors: update the UI

mandatory

In the Notifications component:

*   Update the component to use the new selector you just created
*   Map the component to the Action `setNotificationFilter`
*   Add two buttons under the text `Here is the list of notifications`. The first one contains `‼️`. On click, it set the filters of notifications to `URGENT`. The second one contains `?`. On click, it sets the filter of notifications to `DEFAULT`

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_8/dashboard/src/Notifications/Notifications.js`

**0/3** pts

### 28\. Memoized selectors: update the test suite

mandatory

In `Notifications.test.js`, add two new tests:

*   Clicking on the first button should call `setNotificationFilter` with `URGENT`
*   Clicking on the second button should call `setNotificationFilter` with `DEFAULT`

In `notificationSelector.test.js`:

*   Update the previous tests to work correctly
*   Create a new test to verify that the selector returns unread urgent notifications when the filter is set

Tips:

*   At this point, you should be able to load the notifications panel, filter the list using the two new buttons, and mark items as read

Requirements:

*   Make sure to update the tests to work as expected

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_8/dashboard/src/Notifications/Notifications.test.js, task_8/dashboard/src/selectors/notificationSelector.test.js`

**0/3** pts

### 29\. Container/Component

mandatory

Our components can become very verbose when we start adding connectors and actions. It is also becoming harder to tests what is supposed to be our React component, and the interations of the application. To simplify our architecture, we can use the concept of containers and components:

*   Create a new file `NotificationsContainer.js`. This component will take care of connecting to the state, and fetching the notifications on mount
*   The component should render the `Notifications` components and pass the required props to it
*   Modify the file `Notifications.js`. It should now become a functional component
*   Create a new test file for `NotificationsContainer.js`. It should make sure the fetching is happening on mount
*   Modify `Notifications.test.js` file to only support the new behavior of the file

Tips:

*   No need to repeat every single prop, you can use the spread operator

**Repo:**

*   GitHub repository: `holbertonschool-web_react`
*   Directory: `react_redux_connectors_and_providers`
*   File: `task_9/dashboard/src/Notifications/Notifications.js, task_9/dashboard/src/Notifications/Notifications.test.js, task_9/dashboard/src/Notifications/NotificationsContainer.js, task_9/dashboard/src/Notifications/NotificationsContainer.test.js`

**0/6** pts