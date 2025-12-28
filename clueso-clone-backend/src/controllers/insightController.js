exports.generateInsights = async (req, res) => {
    try {
        const { feedbackList } = req.body; // Array of feedback objects or strings

        if (!feedbackList || feedbackList.length === 0) {
            return res.status(400).json({ summary: 'No feedback provided to analyze.', themes: [] });
        }

        // MOCK AI LOGIC
        const keywords = ['slow', 'bug', 'crash', 'ui', 'great', 'love', 'feature'];
        const themes = [];
        let positiveCount = 0;
        let negativeCount = 0;

        const text = JSON.stringify(feedbackList).toLowerCase();

        keywords.forEach(word => {
            if (text.includes(word)) {
                themes.push(word);
            }
        });

        if (text.includes('great') || text.includes('love')) positiveCount++;
        if (text.includes('slow') || text.includes('crash')) negativeCount++;

        const summary = `Analyzed ${feedbackList.length} items. Sentiment appears to be ${positiveCount >= negativeCount ? 'mostly positive' : 'mixed/negative'}. Users are mentioning terms like: ${themes.join(', ')}.`;

        res.json({
            summary,
            themes: [...new Set(themes)],
            generatedAt: new Date()
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
