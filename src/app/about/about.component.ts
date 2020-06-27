import { Component, OnInit } from '@angular/core';

interface PeriodicElement {
  name: string;
  year: number;
  link: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['year', 'name', 'link'];

  ELEMENT_DATA: PeriodicElement[] = [
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

  dataSource = this.ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
