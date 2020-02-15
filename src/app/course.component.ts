import {Component} from '@angular/core';

@Component({
     selector : 'app-course',
    // template : '<p> This is from Course component',
    template : `<div>
    <h3> Course title </h3>
    <p> this is course component </p>
    <div>`,
    styles : ['p{color :red;}']
})

export class CourseComponent {
}
