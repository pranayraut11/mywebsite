import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss']
})
export class CreateBlogComponent implements OnInit {
  formData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      "blogName": new FormControl("", Validators.required),
      "blogSummary": new FormControl("", Validators.required),
      "blogAuthor": new FormControl("", Validators.required),
      "blogData": new FormControl("", Validators.required)
    })
  }
  ngOnInit(): void {

  }

  saveBlog(){
    console.log(this.formData.value);
  }
}
