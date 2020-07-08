export class Project {
  public name: string;
  public image: string;
  public frameworks?: string[];
  public techno: string[];
  public tools: string[];
  public websiteLink: string;
  public githubLink: string;
  public production: string[];

  constructor(
    name: string,
    image: string,
    techno: string[],
    tools: string[],
    production: string[],
    websiteLink: string,
    githubLink: string,
    frameworks?: string[]
  ) {
    this.name = name;
    this.image = image;
    this.frameworks = frameworks;
    this.techno = techno;
    this.tools = tools;
    this.production = production;
    this.websiteLink = websiteLink;
    this.githubLink = githubLink;
  }
}
