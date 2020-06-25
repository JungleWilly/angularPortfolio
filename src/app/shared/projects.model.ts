export class Project {
  public name: string;
  public image: string;
  public logo: string;
  public techno: string[];
  public tools: string[];
  public production: string[];

  constructor(
    name: string,
    image: string,
    logo: string,
    techno: string[],
    tools: string[],
    production: string[]
  ) {
    this.name = name;
    this.image = image;
    this.logo = logo;
    this.techno = techno;
    this.tools = tools;
    this.production = production;
  }
}
