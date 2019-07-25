export default class Beer {
  constructor(name, { description, technologies }) {
    this.name = name;
    this.description = description;
    this.technologies = technologies;
  }

  createNode(coolerNode) {
    let beerNode = document.createElement("div");
    beerNode.classList.add(this.name);
    beerNode.classList.add('beer');

    let nameNode = document.createElement('H2');
    let nameText = document.createTextNode(this.name);
    nameNode.appendChild(nameText);

    let descriptionNode = document.createElement('p');
    let descriptionText = document.createTextNode(this.description);
    descriptionNode.appendChild(descriptionText);

    let technologiesNode = document.createElement('ul');
    this.technologies.forEach((technology) => {
      let technologyNode = document.createElement('li');
      let technologyText = document.createTextNode(technology);
      technologyNode.appendChild(technologyText);
      technologiesNode.appendChild(technologyNode);
    })

    beerNode.appendChild(nameNode);
    beerNode.appendChild(descriptionNode);
    beerNode.appendChild(technologiesNode);

    coolerNode.appendChild(beerNode);
  }
}