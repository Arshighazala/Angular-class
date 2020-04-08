import { FormGroup, FormArray, FormControl, FormArrayName, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-dolist',
  templateUrl: './to-dolist.component.html',
  styleUrls: ['./to-dolist.component.scss']
})
export class ToDolistComponent implements OnInit {
 toDolist: FormGroup;

 // @ViewChild('newtopic', { static: false }) newTopic: ElementRef;
 constructor() { }

 ngOnInit() {
   this.toDolist = new FormGroup({
    skills : new FormArray ([
      new FormControl(''),
      new FormControl('')

    ])
   });
 }
 addTopic(inputElement: HTMLInputElement) {
   console.log(inputElement.value);
   // console.log((this.newTopic.nativeElement as HTMLInputElement).value);
   inputElement.value = '';
 }
  // onAddSkills() {

  // }
 }

