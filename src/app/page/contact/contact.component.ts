import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { BlogService } from '@app/services/blog/blog.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  fGroup: FormGroup;

  successfulMsg = false;
  successfulErr = false;

  sentSuccessfully = '';
  sendErr = '';

  constructor(
    private fBuilder: FormBuilder,
    private blosServ: BlogService,
  ) { }

  ngOnInit(): void {
    this.formBuilder();
  }

  sendMsg() {
    const formData = new FormData();
    formData.append('name', this.fGroup.get('name').value);
    formData.append('email', this.fGroup.get('email').value);
    formData.append('subject', this.fGroup.get('subject').value);
    formData.append('message', this.fGroup.get('message').value);

    this.blosServ.sendMsg(formData).subscribe((res) => {

      if(res?.msg) {
        this.successfulMsg = true;
        this.sentSuccessfully = res?.msg;
        setTimeout(() => {
          this.successfulMsg = false;
        },3000);
      }
      if(res?.err) {
        this.successfulErr = true;
        this.sendErr = res?.err;
        setTimeout(() => {
          this.successfulErr = false;
        },3000);
      }
      console.log(res);
    });
    
  }

  formBuilder() {
    this.fGroup = this.fBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [Validators.required, Validators.email] ],
      subject: [ '', Validators.required ],
      message: [ '', Validators.required ],
    })
  }

  get f() { return this.fGroup.controls }
 
}
