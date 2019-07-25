import Beer from "./beer";

const createBeer = (cooler, file) => {

  Object.keys(file).forEach((projectName) => {
    let beer = new Beer(projectName, file[projectName]);

    beer.createNode(cooler);
  })
}

export default createBeer;