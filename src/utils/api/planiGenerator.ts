const planiGenerator = async (prompt: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/planiGenerator`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      credentials: "include",
    },
    body: JSON.stringify({ prompt }),
  });
  const data = await response.json();
  return data;
};

export default planiGenerator;