const QUOTE_API_URL = "https://api.breakingbadquotes.xyz/v1/quotes/5";
const TAGS_API_URL = "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions";

export const fetchQuotes = async () => {
	const response = await fetch(QUOTE_API_URL);
	if (!response.ok) {
		throw new Error("Error fetching quotes");
	}
	return response.json();
};

export const fetchTags = async (quote) => {
	const response = await fetch(
		TAGS_API_URL,
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
		// throw new Error("Error fetching tags");
		return [{
			label: 'Error fetching tags',
			score: 0
		}]
	}
	const result = await response.json();
	console.info('fetching tags')
	return result[0].slice(0,5)
};
