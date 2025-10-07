export default function QueryProcessor(query: string): string {

    const lower = query.toLowerCase();

  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew") || query.toLowerCase().includes("name")) {
    return ("zachikeh");
  }
  
  // if (query.toLowerCase().includes("largest: 39, 35, 86")) {
  //   return "86";
  // }

  // if (query.toLowerCase().includes("52 plus 72")) {
  //   return "144";
  // }

  // if (query.toLowerCase().includes("1 plus 70")) {
  //   return "71";
  // }

  // if (query.toLowerCase().includes("6 plus 81")) {
  //   return "87";
  // }

  // if (query.toLowerCase().includes("largest: 18, 41, 32")) {
  //   return "41";
  // }
  // if (query.toLowerCase().includes("1 plus 70")) {
  //   return "71";
  // }

  const plusMatch = lower.match(/(\d+)\s*(?:\+|plus)\s*(\d+)/);
  if (plusMatch) {
    const sum = parseInt(plusMatch[1]) + parseInt(plusMatch[2]);
    return sum.toString();
  }

  if (lower.includes("largest")) {
    const nums = query.match(/\d+/g); // extract all numbers
    if (nums && nums.length > 0) {
      const max = Math.max(...nums.map(Number));
      return max.toString();
    }
  }



  return "";
}
 