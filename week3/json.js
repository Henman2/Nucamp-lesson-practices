let hero =  `{
    "response": "success",
    "id": "731",
    "name": "Zoom",
    "powerstats": {
      "intelligence": "50",
      "strength": "10",
      "speed": "100",
      "durability": "28",
      "power": "100",
      "combat": "28"
    },
    "biography": {
      "full-name": "Hunter Zolomon",
      "alter-egos": "No alter egos found.",
      "aliases": [
        "-"
      ],
      "place-of-birth": "-",
      "first-appearance": "Flash Secret Files #3",
      "publisher": "DC Comics",
      "alignment": "bad"
    },
    "appearance": {
      "gender": "Male",
      "race": "null",
      "height": [
        "6'1",
        "185 cm"
      ],
      "weight": [
        "181 lb",
        "81 kg"
      ],
      "eye-color": "Red",
      "hair-color": "Brown"
    },
    "work": {
      "occupation": "-",
      "base": "Keystone City, Kansas"
    },
    "connections": {
      "group-affiliation": "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
      "relatives": "Ashley Zolomon (ex-wife)"
    },
    "image": {
      "url": "https://www.superherodb.com/pictures2/portraits/10/100/1384.jpg"
    }
  }`
  console.log(hero);
  hero = JSON.parse(hero);
  console.log(hero);
  const eyeColor = hero.appearance["eye-color"];
console.log(eyeColor);