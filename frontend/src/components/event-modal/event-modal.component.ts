import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {

  readonly fieldEventName = 'eventName';
  readonly fieldDateRange = 'dateRange';
  readonly fieldParticipants = 'participants';

  eventData: FormGroup;
  modalVisible = false;
  users: string[] = ['Davi', 'Gabriel', 'Leonardo']; // this is a mock, update after the endponit to get users by nickname is complete

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.initEventData();
  }

  public openModal(): void {
    this.modalVisible = true;
  }

  public closeModal(): void {
    this.modalVisible = false;
    this.clearEventData();
  }

  public clearEventData(): void {
    this.eventData.reset();
  }

  public createEvent(): void {
    console.log(this.eventData.getRawValue()); // temporary
  }

  private initEventData(): void {
    this.eventData = this.formBuilder.group({
      [this.fieldEventName]: [null, Validators.required],
      [this.fieldDateRange]: [null, Validators.required],
      [this.fieldParticipants]: [[], Validators.required],
    });
  }
}
