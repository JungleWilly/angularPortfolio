import { Component, OnInit } from '@angular/core';

interface Certification {
  name: string;
  year: number;
  link: string;
}

interface Skills {
  languages: string;
  framework: string;
  tools: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  certificationDisplayedColumns: string[] = ['year', 'name', 'link'];
  skillsDisplayedColumns: string[] = ['languages', 'framework', 'tools'];

  CERTIFICATION_ELEMENT_DATA: Certification[] = [
    {
      year: 2020,
      name: 'Angular',
      link:
        'https://dyma.fr/certification/5e7b81cc42424412974d5fa9/58a1863e2e158e82bb85bb6a',
    },
    {
      year: 2020,
      name: 'Javascript (ES6)',
      link:
        ' https://dyma.fr/certification/5e7b81cc42424412974d5fa9/5de1a78332cf6b3128beee34',
    },
    {
      year: 2020,
      name: 'HTML5 / CSS3',
      link:
        'https://dyma.fr/certification/5e7b81cc42424412974d5fa9/5dab7f032482b13eb493df12',
    },
    {
      year: 2019,
      name: 'The Hacking Project',
      link:
        'https://www.thehackingproject.org/dashboard/formation_attestations/1.pdf?utf8=%E2%9C%93&commit=G%C3%A9n%C3%A9rer+l%27attestation',
    },
  ];

  SKILLS_ELEMENT_DATA: Skills[] = [
    {
      languages: 'TypeScript',
      framework: 'Angular',
      tools: 'Git / Github',
    },
    {
      languages: 'Javascript (ES6)',
      framework: '',
      tools: 'Bash',
    },
    {
      languages: 'CSS3 / SASS',
      framework: '',
      tools: 'Chrome DevTool',
    },
    {
      languages: 'HTML5',
      framework: '',
      tools: '',
    },
  ];

  certificationDataSource = this.CERTIFICATION_ELEMENT_DATA;
  skillsDataSource = this.SKILLS_ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
