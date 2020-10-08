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
