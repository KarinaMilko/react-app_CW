import queryString from "query-string";

// TODO move to constants.js
const BASE_URL = "https://randomuser.me/api/";

export const loadUsers = (options) => {
  const defaultOptions = {
    // currentPage: 1,
    page: 1,
    results: 10,
    seed: "pe2024",
    inc: ["name", "gender", "login"],
  };

  const resultsOptions = {
    ...defaultOptions,
    ...options,
  };

  //   const { currentPage, results } = resultsOptions;

  //   return fetch(
  //     `https://randomuser.me/api/?page=${currentPage}&results=${results}&seed=pe2024`
  //     `https://randomuser.me/api/?${queryString.stringify(resultsOptions)}`
  //   ).then((response) => response.json());
  // };

  //   return fetch(`${BASE_URL}?${queryString.stringify(resultsOptions)}`).then(
  //     (response) => response.json()
  //   );

  // arrayFormat: "comma", означає, що з елементи масиву
  //              перетворяться на значення, розділені комою:
  //              inc: ["name", "gender", "login"] => 'inc=name,gender,login'
  // Джерело: https://www.npmjs.com/package/query-string#arrayformat-1
  return fetch(
    `${BASE_URL}?${queryString.stringify(resultsOptions, {
      arrayFormat: "comma",
    })}`
  ).then((response) => response.json());
};

// currentPage: 1,
// // results: 10,
// results: 20
