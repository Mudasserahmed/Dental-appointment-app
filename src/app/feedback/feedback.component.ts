import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  name: string = '';
  email: string = '';
  feedbackText: string = '';

  constructor() { }

  submitFeedback() {
    // Here you can handle submitting the feedback, e.g., sending it to a backend service
    console.log('Feedback submitted:', { name: this.name, email: this.email, feedback: this.feedbackText });
    // You can also reset the feedback fields after submission
    this.name = '';
    this.email = '';
    this.feedbackText = '';
  }
}
