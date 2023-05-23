const Urls = {
  GET: 'https://27.javascript.pages.academy/kekstagram/data',
  POST: 'https://27.javascript.pages.academy/kekstagram',
};

const sendRequest = (onSuccess, onFail, method, body) => {
  fetch(
    Urls[method],
    {
      method: method,
      body: body,
    },
  )
    .then((response) => response.json())
    .then((data) => {
      onSuccess(data);
    })
    .catch(() => {
      onFail();
    });
};

export {sendRequest};
