const users = [
  {
    name: "Артем",
    age: 22,
    city: "Дніпро",
    favoriteColors: ["червоний", "білий", "синій"],
    isStudent: true,
    grades: [85, 90, 88, 91],
  },
  {
    name: "Софія",
    age: 28,
    city: "Одеса",
    favoriteColors: ["бірюзовий", "сірий"],
    isStudent: false,
    grades: [72, 78, 80, 76],
  },
  {
    name: "Максим",
    age: 20,
    city: "Чернівці",
    favoriteColors: ["помаранчевий", "зелений", "чорний"],
    isStudent: true,
    grades: [45, 52, 48, 50],
  },
];

const greet = (user) => console.log(`Привіт, ${user.name}!`);
const average = (arr) => arr.reduce((s, n) => s + n, 0) / arr.length;
const gradeLevel = (avg) =>
  avg >= 90 ? "Відмінно" : avg >= 70 ? "Добре" : "Задовільно";
const colorsString = (colors) => colors.join(", ");
const needRetake = (grades) => grades.some((g) => g < 60);

const sq = (x) => x ** 2;
const cube = (x) => x ** 3;
const percentOfMax = (v, max = 100) => ((v / max) * 100).toFixed(1);

function processUser(user) {
  greet(user);

  const avg = average(user.grades);
  const level = gradeLevel(avg);
  const colors = colorsString(user.favoriteColors);
  const msg = needRetake(user.grades) ? "Потрібна перездача" : "Хвостів немає";

  console.log(`Ім'я: ${user.name}
      Місто: ${user.city}
      Студент: ${user.isStudent}
      Середній бал: ${avg.toFixed(1)} — ${level}
      Улюблені кольори: ${colors}
      ${msg}`);

  console.log(`  ↳ квадрат віку:           ${sq(user.age)}`);
  console.log(`  ↳ куб першої оцінки:      ${cube(user.grades[0])}`);
  console.log(`  ↳ % середнього від 100:   ${percentOfMax(avg)}%\n`);
}

for (let i = 0; i < users.length; i++) {
  if (users[i].name === "Артем") {
    processUser(users[i]);
    break;
  }
}

console.log();
for (const user of users) {
  if (user.name === "Софія") {
    processUser(user);
    break;
  }
}

console.log();
users.forEach((user) => {
  if (user.name === "Максим") {
    processUser(user);
  }
});
