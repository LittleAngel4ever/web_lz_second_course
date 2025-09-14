## Task
The task is to implement functions on different Core JS topics. There are eight modules with different tasks. Each module consists of tasks for specified topic:

1. Strings
2. Numbers
3. Arrays
4. Conditions and Loops

**Active usage of [documentation](https://developer.mozilla.org/en-US/) is strongly recommended!**

## Prepare and test
1. Install Node.js
2. To install all dependencies use `npm install`
3. Each task is usually a regular function:
    ```javascript
      /**
       * Returns the result of concatenation of two strings.
      *
      * @param {string} value1
      * @param {string} value2
      * @return {string}
      *
      * @example
      *   'aa', 'bb' => 'aabb'
      *   'aa',''    => 'aa'
      *   '',  'bb'  => 'bb'
      */
      function concatenateStrings(/* value1, value2 */) {
        throw new Error('Not implemented');
      }
    ```
    Read the task description in the comment above the function. Try to understand the idea. You can see the tests prepared if you don't understand it.
4. Write your code in `src/*.js`.

    Uncomment the incoming parameters:

    ```javascript
        function concatenateStrings(/* value1, value2 */)
    ```

    Remove the throwing error line from function body:
    ```javascript
        throw new Error('Not implemented'); 
    ```
    Implement the function by any way and verify your solution by running tests until the failed test become passed (green).
5. Save the solution and run `npm test` in command line. If everything is OK you can try to resolve the next task.
6. You will see the number of passing and pending tests.


## FAQ
**Question:** I use Windows machine and have received a lot of errors like "Expected linebreaks to be 'LF' but found 'CRLF'". How to handle it?

**Answer**:
- First, you need to install Gitbash properly: you need to choose option "Checkout as-is, commit as-is" in section "Configuring the line ending conversions". It'll let you download repos with line endings set "as-is" as well as commit. In other words, not to change them at all, because by default it converts them.
- Second, install `editorconfig` plugin to your editor. For VS Code you can find it here:
https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig


The task based on https://github.com/rolling-scopes-school/js-assignments.
