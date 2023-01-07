import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ApiService } from './shared/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  contactForm: FormGroup | any;

  constructor(private formbuilder: FormBuilder, private api: ApiService,) { }


  isChecked: boolean = false;
  mode: string = 'light_mode';
  changed(event: MatSlideToggleChange): void {
    this.mode = event.checked ? 'nightlight_round' : 'light_mode';
    document.body.classList.toggle('darkMode');
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.nullValidator]),
      PhoneNumber: new FormControl('', [Validators.required, Validators.nullValidator]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required, Validators.nullValidator]),
      msg: new FormControl('', [Validators.required, Validators.nullValidator]),
    },
    );
  }

  adddetail() {
    if (this.contactForm.valid) {
      this.api.PostContact(this.contactForm.value)
        .subscribe({
          next: (res) => {
            alert("details added successfully");
            this.contactForm.reset();
          },
          error: () => {
            alert("Something went wrong ")
          }
        })
    }
  }

  cards = [
    {
      Title: 'Website Development',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    },
    {
      Title: 'Website Design',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    },
    {
      Title: 'Website Deployment',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    },
    {
      Title: 'SEO',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    },
    {
      Title: 'DevOps',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    },
    {
      Title: 'QA',
      Description: 'Some quick example text to build on the card title and make up the bulk of the cards content Some quick example text to build on the card title and make up the bulk of the cards content',
    }
  ]
  cards1 = [
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage4.jpg',
      Title: 'Messaging Service',
      Description: 'SLorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage1.jpg',
      Title: 'Twitter Clone',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage4.jpg',
      Title: 'Blog App',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage1.jpg',
      Title: 'YouTube Clone',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage4.jpg',
      Title: 'Quiz App',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      image: 'https://brad-portfolio.netlify.app/images/portfolioImage3.jpg',
      Title: 'Product Landing Page',
      Description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }
  ]

  title = 'TCG-InfoTech';

  AboutPage=[
    {
      Title:'About page',
      Description:'Lorem Ipsum has been the industrys standard dummy textever since the 1500s when anunknown printer took a galley of type and scrambled it to make a type specimen book. It has survived notonly five centuries but also the leap into electronic typesetting remaining essentially unchanged  ',
      Description1:'Name: Virendra',
      Description2:'Age: 35',
      Description3:'Occupation: HardWare Engineer TCG INFOTECH',
      Description4:'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the leap into electronic typesetting remaining essentially unchanged. ',
    }
  ]

}