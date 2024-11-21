export const fetchQuotes = async () => {
	const response = await fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");
	if (!response.ok) {
		throw new Error("Error fetching quotes");
	}
	return response.json();
};

export const fetchTags = async (quote) => {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
		{
			headers: {
				Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
				"Content-Type": "application/json",
			},
			method: "POST",
			body: JSON.stringify({ inputs: quote }),
		}
	);
	if (!response.ok) {
		throw new Error("Error fetching tags");
	}
	const result = await response.json();
	return result[0].slice(0,5)
};
