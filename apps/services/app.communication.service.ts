import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CommunicationService {
  id: number;
  // event Emitter will accept "Number" data
  emitData: EventEmitter<Number>;
  constructor() {
    this.id = 0;
    this.emitData = new EventEmitter<Number>();
  }
  // a method that will emit the event
  onEmitData(id: number): void {
    this.id = id;
    this.emitData.emit(this.id);
  }
}
