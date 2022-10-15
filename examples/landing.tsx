import { useFetch, Text } from "../src";

export default function LandingPage() {
  const { data, error, revalidate } = useFetch({
    url: "https://jsonplaceholder.typicode.com/todos/1",
  });

  if (!data)
    return (
      <Text bold component="h1">
        Loading...
      </Text>
    );

  if (error)
    return (
      <Text color="Red" component="h1">
        Error :(
      </Text>
    );

  return (
    <div>
      <Text bold component="h1">
        Landing Page
      </Text>
      <Text>{JSON.stringify(data)}</Text>
      <button onClick={revalidate}>Refresh</button>
    </div>
  );
}
