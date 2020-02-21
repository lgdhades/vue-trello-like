import faker from "faker";

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export const getCandidatures = async (id, pagination = 0) => {
  await timeout(250);
  let data = []
  if (pagination < 10){
     data = await [...Array(2 * id + pagination)].map(x => ({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      jobs: faker.name.jobTitle(),
      avatar: faker.internet.avatar()
    }));
  }
  if (pagination === 0){
    data.unshift({
      id,
      name: faker.name.findName(),
      jobs: faker.name.jobTitle(),
      avatar: faker.internet.avatar()
    })
  }
  if (data.length === 0){
    return [data, pagination];
  }
  return [data, pagination++];
}


const steps = [
  { id: 1, label: "source" },
  { id: 2, label: "Entretien 1" },
  { id: 3, label: "Entretien 2" },
  { id: 4, label: "Entretien 3" },
  { id: 5, label: "Entretien 4" },
  { id: 6, label: "Entretien 5" },
  { id: 7, label: "Entretien 6" },
  { id: 8, label: "Entretien 7" },
  { id: 9, label: "Proposition d'embauche" }
];

export const getSteps = async () => await steps;
