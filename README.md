# if-else-react

##### Small helper component for conditional rendering,

This

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      {isLoggedIn
          ? <LogoutButton onClick={this.handleLogoutClick} />
          : <LoginButton onClick={this.handleLoginClick} />}
    </div>
  );
}
```

becomes this ✨

```
render() {
  const isLoggedIn = this.state.isLoggedIn;
  return (
    <div>
      <If condition={isLoggedIn}>
        <LogoutButton onClick={this.handleLogoutClick} />
        <Else />
        <LoginButton onClick={this.handleLoginClick} />
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

```
import If, { Else } from 'if-else-react';
```

and use it like shown in the example above. done 🎉
