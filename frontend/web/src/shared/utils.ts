export function getPercentageOfDream(currentStep: number, stepsCount: number) {
    return Math.floor((currentStep / stepsCount) * 100);
}

export function truncateText(
    originalText: string,
    truncatedTextLength: number,
) {
    if (originalText.length <= truncatedTextLength) return originalText;

    const result = `${originalText.slice(0, truncatedTextLength)}...`;
    return result;
}
