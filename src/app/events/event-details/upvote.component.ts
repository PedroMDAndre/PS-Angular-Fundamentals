import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: "upvote",
    styleUrls: ["./upvote.component.css"],
    template: `
        <div class="votingWidgetComtainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <div class="votingButton">
                <i *ngIf="voted" class="glyphicon glyphicon-heart" [style.color]="iconColor"></i>
                <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty" [style.color]="iconColor"></i>
            </div>
            <div class="badge badge-inverse votingCount">
                <div>{{ count }}</div>
            </div>
        </div>
    </div>
    `})
    export class UpvoteComponent {
        @Input() count!: number;
        @Input() voted!:boolean;
        @Output() vote = new EventEmitter();
        iconColor!: string;
    
        onClick() {
            this.vote.emit({});
        }
    }