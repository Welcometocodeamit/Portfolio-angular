import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css', '../app.component.css']
})
export class ExperienceComponent {

  heading1: string="Full Stack Developer Intern";
  expdata1p1: string="- Created a full-stack web app using React and Spring Boot for quotes management."
  expdata1p2: string="- Enhanced React skills for dynamic and user-friendly UI."
  expdata1p3:string="- Developed a robust Spring Boot server for RESTful API."
  expdata1p4: string="- Proficiently managed SQL databases for efficient data storage."
  company1: any="assets/infotrixs.png"
  date1: string ="Nov 2023 - Present"

}
