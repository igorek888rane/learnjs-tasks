function askPassword(ok, fail, password) {
    if (password === "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false), 'rockstar')
askPassword(user.login.bind(user, true), user.login.bind(user, false), '123')