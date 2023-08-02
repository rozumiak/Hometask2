export const parseDate = (contentValue: string) => {
    const dateRegex =
        /\b(?:(?<day>\d{1,2})[./](?<month>\d{1,2})[./](?<year>\d{4})|(?<year2>\d{4})[./](?<month2>\d{1,2})[./](?<day2>\d{1,2}))\b/g;
    const dates: string[] = [];
    let match;
    while ((match = dateRegex.exec(contentValue)) !== null) {
        // Знаходимо збіги дати та формуємо рядки дати у форматі 'day/month/year'
        const { day, month, year, day2, month2, year2 } = match.groups!;
        const dateStr = day
            ? `${day}/${month}/${year} `
            : `${day2}/${month2}/${year2}`;
        dates.push(dateStr);
    }
    return dates;
};
