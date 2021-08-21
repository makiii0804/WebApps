const endPoint = "https://jsonplaceholder.typicode.com/posts";

export const getBlogs = () => {
  return fetch(endPoint)
    .then((res) => res.json())
    .then((blogs) => {
      return blogs;
    });
};