# if-else-react · [![npm](https://badge.fury.io/js/if-else-react.svg)](https://www.npmjs.com/package/if-else-react)

#### Small helper component for conditional rendering.

This

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn ? (
        <span>
          <Button onClick={this.handdleSettingsClick}>Account Settings</Button>
          <Button onClick={this.handleLogoutClick}>Logout</Button>
        </span>
      ) : (
        <span>
          <Button onClick={this.handleLoginClick}>Login</Button>
          <Button onClick={this.handleSignUpClick}>Sign Up</Button>
        </span>
      )}
    </div>
  );
}
```

becomes this ✨

```javascript
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      <If condition={isLoggedIn}>
        <Button onClick={this.handdleSettingsClick}>Account Settings</Button>
        <Button onClick={this.handleLogoutClick}>Logout</Button>
        <Else />
        <Button onClick={this.handleLoginClick}>Login</Button>
        <Button onClick={this.handleSignUpClick}>Sign Up</Button>
      </If>
    </div>
  );
}
```

### Getting Started

Install via npm:

```
$ npm install if-else-react --save
```

and then just import it in your app

```javascript
import If, { Else } from 'if-else-react';
```

and use it like shown in the example above. done 🎉
