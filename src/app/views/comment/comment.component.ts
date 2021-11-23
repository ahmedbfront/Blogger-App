import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  fGroup: FormGroup;

  @Output() newComment=new EventEmitter<any>();
  
  constructor(
    private fBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.fb()
    }
    
  onSubmit() {
    let formData = new FormData();

    formData.append('name', this.fGroup.get('name').value);
    formData.append('comment', this.fGroup.get('comment').value);
    this.newComment.emit(formData);
  }

  fb() {
    this.fGroup = this.fBuilder.group({
      name: [ '', Validators.required ],
      comment: [ '', Validators.required ],
    });
  }

  get f() { return this.fGroup.controls }

}
