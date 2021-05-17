import { HttpClient, HttpHeaders } from '@angular/common/http'
import { EventEmitter, Injectable } from '@angular/core'
import { Observable, of } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { IEvent, ISession } from './event.model'

@Injectable()
export class EventService {

  constructor(private http: HttpClient) { }

  getEvents(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleHerror<IEvent[]>('getEvents', [])));
  }

  getEvent(id: number): Observable<IEvent | any> {
    return this.http.get<IEvent[]>('/api/events/' + id)
      .pipe(catchError(this.handleHerror<IEvent[]>('getEvent')));
  }

  saveEvent(event: IEvent) {
    let options = {
      headers: new HttpHeaders({ "Content": "application/json" }),
    }

    return this.http.post<IEvent>("/api/events", event, options)
      .pipe(catchError(this.handleHerror<IEvent[]>('saveEvent')));
  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleHerror<ISession[]>('searchSessions')));
  }

  private handleHerror<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

}

