import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private reservations : Reservation[] = [];

  constructor(){
    let savedReservation = localStorage.getItem("reservations");
    this.reservations = savedReservation?JSON.parse(savedReservation):[];
  }

  getReservations():Reservation[]{
    return this.reservations;
  }

  getResaervations(id: string):Reservation | undefined{
    return this.reservations.find(res=>res.id == id);
  }


  addReservation(reservation: Reservation): void{
    this.reservations.push(reservation);
    console.log(this.reservations);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  deleteReservation(id : string): void{
    let index = this.reservations.findIndex(res=>res.id == id);
    this.reservations.splice(index,1);
    localStorage.setItem("reservations",JSON.stringify(this.reservations));
  }

  updateReservation(updatedReservation: Reservation): void {
    let index = this.reservations.findIndex(res=>res.id == updatedReservation.id);
    this.reservations[index] = updatedReservation;
    localStorage.setItem("reservations",JSON.stringify(this.reservations));

  }




}
