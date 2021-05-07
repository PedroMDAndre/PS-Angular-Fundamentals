import { Component, OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ToastrappService } from '../common/toastrapp.service';
import { ActivatedRoute } from "@angular/router";
import { IEvent } from "./shared";



@Component({
  template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr />
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail
                    (click)="handleThumbnailClick(event.name)"
                     [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>`
})
export class EventsListComponent implements OnInit {
  events: IEvent[] = [];
  constructor(private eventService: EventService,
    private toastr: ToastrappService, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.events = this.route.snapshot.data["events"];
  }

  handleThumbnailClick(eventName: string){
    this.toastr.success(eventName);
  }

}