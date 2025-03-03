type VerifyUserFn = (user: User, sentValue: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentUser) => {
  return (
    user.username === sentUser.username && user.password === sentUser.password
  );
};

const bdUser = { username: "joao", password: "123456" };
const sentUser = { username: "joao", password: "123456" };
const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
