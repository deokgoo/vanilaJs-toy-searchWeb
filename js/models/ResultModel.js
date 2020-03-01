const auth = () => {
  var settings = {
    "url": "https://movie-nodejs.herokuapp.com/auth/login",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Authorization": "Basic ZGVvazoxMjMxMjM="
    },
  };
  return new Promise((res, reject) => {
    $.ajax(settings).done(function (response) {
      res(response);
    }).fail(function (err) { reject(err); });
  });
};

const getData = (token, title) => {
  var settings = {
    "url": `https://movie-nodejs.herokuapp.com/api/search/${title}`,
    "method": "GET",
    "timeout": 0,
    "headers": {
      "Authorization": `Bearer ${token}`
    },
  };
  return new Promise((res, reject) => {
    $.ajax(settings).done(function (response) {
      res(response);
    }).fail(function (err) { reject(err); });
  })
};

export default {
  search: async (title) => {
    let token = await auth();
    let searhResult = await getData(token, title);

    return searhResult.results;
  }
};
