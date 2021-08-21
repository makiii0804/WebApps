const endPoint = "https://randomuser.me/api/?results=15";

export const getUsers = () => {
  return fetch(endPoint)
    .then((res) => res.json())
    .then((users) => {
      return users;
    });
};