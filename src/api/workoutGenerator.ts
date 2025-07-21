const workoutGenerator = async (prompt: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/workoutGenerator`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // ✔️ correcta ubicación
    body: JSON.stringify({ prompt }),
  });

  return response.json();
};

export default workoutGenerator;