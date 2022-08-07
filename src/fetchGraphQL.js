async function fetchGraphQL(text, variables) {
  const URL = "http://localhost:4000/graphql";
  const token = localStorage.getItem("gql-token") || null;

  let headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers,
    };
  }

  const response = await fetch(URL, {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : null,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  return await response.json();
}

export default fetchGraphQL;
