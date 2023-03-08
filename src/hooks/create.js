export const Create = (api, body, navigate) => {
  const url = `${process.env.REACT_APP_API_URL}/${api}/`;
  delete body._id;

  const requestOptions = {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };

  fetch(url, requestOptions)
    .then((res) => res.json())
    .then(() => {
      navigate();
    });
};
