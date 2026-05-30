const teams = [
  {
    id: 1,
    name: 'Goldberries',
    members: [
      { firstName: 'Inge', lastName: 'Fellinger' },
      { firstName: 'Bettina', lastName: 'Gugerell' },
      { firstName: 'Jana', lastName: 'Krautgartner' },
      { firstName: 'Marijana', lastName: 'Taskin' },
      { firstName: 'Katja', lastName: 'Bernegger' },
    ],
  },
  {
    id: 2,
    name: 'OneAppToRuleThemAll',
    members: [
      { firstName: 'Jennifer', lastName: 'Meißl' },
      { firstName: 'Grzegorz', lastName: 'Domanowski' },
      { firstName: 'Georg', lastName: 'Pignitter' },
      { firstName: 'Jürgen', lastName: 'Palmberger' },
      { firstName: 'Christopher', lastName: 'Schuch' },
    ],
  },
  {
    id: 3,
    name: 'FiresOfMordor',
    members: [
      { firstName: 'Bastian', lastName: 'Windisch' },
      { firstName: 'Isabella', lastName: 'Berlini' },
      { firstName: 'Moritz', lastName: 'Spitz' },
      { firstName: 'Damian', lastName: 'Swietek' },
      { firstName: 'Naemi', lastName: 'Jakob' },
    ],
  },
  {
    id: 4,
    name: 'TheBugHuntersOfMiddleEarth',
    members: [
      { firstName: 'Nico Luis', lastName: 'Baisch' },
      { firstName: 'Paul', lastName: 'Heißbauer' },
      { firstName: 'Daniel', lastName: 'Lung' },
      { firstName: 'Felix', lastName: 'Uteschill' },
      { firstName: 'Erica', lastName: 'Emofonmwan' },
    ],
  },
  {
    id: 5,
    name: 'TheFellowshipOfTheFive',
    members: [
      { firstName: 'Angelil', lastName: 'Bico' },
      { firstName: 'Sherif', lastName: 'Ahmed' },
      { firstName: 'Wolf', lastName: 'Rosenkranz' },
      { firstName: 'Yvonne', lastName: 'Lin' },
      { firstName: 'Moritz', lastName: 'Nürnberger' },
    ],
  },
  {
    id: 6,
    name: 'YouShallNotDebug',
    members: [
      { firstName: 'Halyna', lastName: 'Byelousova' },
      { firstName: 'Vanessa', lastName: 'Federmann' },
      { firstName: 'Shira Zsofia', lastName: 'Szabady' },
      { firstName: 'Lara-Ana', lastName: 'Wininger' },
      { firstName: 'Laksmi Devaki', lastName: 'Wuggenig' },
    ],
  },
  {
    id: 7,
    name: 'ShadowCodersOfMordor',
    members: [
      { firstName: 'Julian', lastName: 'Raynov' },
      { firstName: 'Noémi', lastName: 'Filka' },
      { firstName: 'Christine', lastName: 'Kreutzinger' },
      { firstName: 'Nubet', lastName: 'Kiliç' },
      { firstName: 'Adnan', lastName: 'Hamidović' },
    ],
  },
  {
    id: 8,
    name: 'OneDoesNotSimplyDevelopAnApp',
    members: [
      { firstName: 'Georg', lastName: 'Hu' },
      { firstName: 'Artur', lastName: 'Hochmeister' },
      { firstName: 'Gabriel', lastName: 'Neuberger' },
      { firstName: 'Alexander', lastName: 'Ipser' },
      { firstName: 'Jusuf', lastName: 'Hann' },
    ],
  },
  {
    id: 9,
    name: 'GollumGPT',
    members: [
      { firstName: 'Assem', lastName: 'Schlichtner' },
      { firstName: 'Oksana', lastName: 'Rechytska' },
      { firstName: 'Ubaida', lastName: 'Kelenchy' },
      { firstName: 'Miriam', lastName: 'Prantner' },
      { firstName: 'Claudia', lastName: 'Hösch' },
    ],
  },
  {
    id: 10,
    name: 'WeShallPass',
    members: [
      { firstName: 'Max', lastName: 'Brandstetter' },
      { firstName: 'Leonie', lastName: 'Claudi' },
      { firstName: 'Helena', lastName: 'Sadeghi' },
      { firstName: 'Katharina', lastName: 'Spörk' },
      { firstName: 'Timon', lastName: 'Ehn' },
      { firstName: 'Evelyn', lastName: 'Ishak' },
    ],
  },
  {
    id: 11,
    name: 'IsengardInnovations',
    members: [
      { firstName: 'Samuel', lastName: 'Stremnitzer' },
      { firstName: 'Ali', lastName: 'Amro' },
      { firstName: 'David', lastName: 'UÇAR' },
      { firstName: 'Daniel', lastName: 'Aicher' },
      { firstName: 'Lasse', lastName: 'Jochmann' },
      { firstName: 'Gabriel', lastName: 'Selinschek' },
    ],
  },
];

const select = document.querySelector('#js-team-select');

teams.forEach(team => {
  const option = document.createElement('option');
  option.value = team.id;
  option.textContent = `Team ${team.id}: ${team.name}`;
  select.append(option);
});

document.querySelector('#js-pick-button').addEventListener('click', () => {
  const team = teams.find(team => team.id === Number(select.value));
  const member = team.members[Math.floor(Math.random() * team.members.length)];

  document.querySelector('#js-result-name').textContent = `${member.firstName} ${member.lastName}`;
  document.querySelector('#js-result-team').textContent = `Team ${teamid}: ${team.name}`;
});
