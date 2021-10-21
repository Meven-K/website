import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface Message {
  message: string
}


@Injectable()
export class ApiService {
  constructor(private http: HttpClient) { }

  message: string | undefined;

  getMessage(url: string) {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    this.http.get<Message>(url).subscribe(data => {this.message = data.message;})
    return this.message;
  }
}
