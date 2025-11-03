import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected readonly title = 'Dating App';

  ngOnInit(): void {
    // Initialize component - fetch initial data if needed
    this.loadUsers();
  }

  private loadUsers(): void {
    this.http.get('http://localhost:5001/api/members').subscribe({
      next: (response) => console.log(response),
      error: (error) => console.error(error),
      complete: () => console.log('Completed the http request.'),
    });
  }
}
