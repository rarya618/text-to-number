const numberWords: { [key: string]: number } = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };
  
  const scaleWords: { [key: string]: number } = {
    hundred: 100,
    thousand: 1000,
    million: 1_000_000,
  };
  
  export function textToNumber(text: string): number {
    const words = text.toLowerCase().replace(/-/g, " ").split(/\s+/);
    let current = 0;
    let total = 0;
  
    for (const word of words) {
      if (numberWords[word] !== undefined) {
        current += numberWords[word];
      } else if (scaleWords[word] !== undefined) {
        if (word === "hundred") {
          current *= scaleWords[word];
        } else {
          total += current * scaleWords[word];
          current = 0;
        }
      } else if (word === "and") {
        continue;
      } else {
        throw new Error(`Unknown word: ${word}`);
      }
    }
  
    return total + current;
  }
  