const data = [
  {
    country: "Bangladesh",
    deathInLastWeek: [40, 42, 45, 50, 55, 60, 65],
    maxDeath: 82,
    minDeath: 5
  },
  {
    country: "India",
    deathInLastWeek: [100, 110, 95, 102, 89, 120, 98],
    maxDeath: 148,
    minDeath: 19
  },
  {
    country: "England",
    deathInLastWeek: [56, 62, 120, 56, 98, 91, 87],
    maxDeath: 124,
    minDeath: 13
  }
];

// iterating using reduce and render the list

export const dataWeek = data.reduce((acc, item) => {
  acc.push({ name: item.country, value: item.deathInLastWeek });
  return acc;
}, []);

// iterating using reduce and render the list both result at once

export const [dataMin, dataMax] = data.reduce(
  (acc, curr) => {
    const { country, maxDeath, minDeath } = curr;
    const minObj = { name: country, value: minDeath };
    const maxObj = { name: country, value: maxDeath };
    acc[0].push(minObj);
    acc[1].push(maxObj);
    return acc;
  },
  [[], []]
);

export default data;
