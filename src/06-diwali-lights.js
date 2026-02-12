/**
 * 🪔 Sharma ji ki Diwali Decoration
 *
 * Sharma ji apne ghar ko Diwali pe sajana chahte hain light strings se.
 * Unke paas ek budget hai aur market mein alag alag colors ki light strings
 * hain different lengths mein. Sharma ji sab kuch lena chahte hain, lekin
 * budget se zyada nahi!
 *
 * Color rates (per meter):
 *   - "golden" = Rs 50/meter
 *   - "multicolor" = Rs 40/meter
 *   - "white" = Rs 30/meter
 *   - Any other color = Rs 35/meter
 *
 * Rules:
 *   Step 1 - Use for...of to loop through lightStrings and add ALL of them
 *     to selected list with their cost calculated
 *   Step 2 - Use a while loop to check: agar totalCost > budget, toh remove
 *     the LAST item from selected, subtract its cost, and keep removing until
 *     totalCost <= budget
 *
 * @param {Array<{color: string, length: number}>} lightStrings - Available light strings
 * @param {number} budget - Sharma ji ka budget in rupees
 * @returns {{ selected: Array<{color: string, length: number, cost: number}>, totalLength: number, totalCost: number }}
 *
 * Validation:
 *   - Agar lightStrings array nahi hai ya budget positive number nahi hai,
 *     return: { selected: [], totalLength: 0, totalCost: 0 }
 *
 * @example
 *   diwaliLightsPlan(
 *     [{ color: "golden", length: 5 }, { color: "white", length: 10 }, { color: "multicolor", length: 3 }],
 *     400
 *   )
 *   // golden: 5*50=250, white: 10*30=300, multicolor: 3*40=120
 *   // Total = 670 > 400, remove multicolor (670-120=550), still > 400,
 *   // remove white (550-300=250), 250 <= 400
 *   // => { selected: [{ color: "golden", length: 5, cost: 250 }], totalLength: 5, totalCost: 250 }
 */
/**
 * Sharma ji wants to decorate his house for Diwali.
 * He has a list of light strings and a budget.
 * 
 * Each light string has: { color: string, length: number }
 * Rates:
 * - Golden: Rs 50/meter
 * - Multicolor: Rs 40/meter
 * - White: Rs 30/meter
 * - Any other color: Rs 35/meter
 * 
 * He buys strings one by one from the list.
 * If adding the NEXT string exceeds the budget, he stops and doesn't buy any more.
 * 
 * Return an object:
 * {
 *   selected: [{ color, length, cost }, ...],
 *   totalLength: number,
 *   totalCost: number
 * }
 */
export function diwaliLightsPlan(lightStrings, budget) {
  const result = {
    selected: [],
    totalLength: 0,
    totalCost: 0
  };

  if (!Array.isArray(lightStrings) || typeof budget !== 'number' || budget <= 0) {
    return result;
  }

  for (const light of lightStrings) {
    let rate = 0;
    const color = light.color.toLowerCase();
    
    if (color === 'golden') rate = 50;
    else if (color === 'multicolor') rate = 40;
    else if (color === 'white') rate = 30;
    else rate = 35;

    const cost = light.length * rate;

    if (result.totalCost + cost <= budget) {
      result.selected.push({
        color: light.color,
        length: light.length,
        cost: cost
      });
      result.totalLength += light.length;
      result.totalCost += cost;
    } else {
      break;
    }
  }

  return result;
}
