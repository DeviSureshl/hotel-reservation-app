import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private reservations: Reservation[] = [];
  private apiBaseUrl = 'http://localhost:3001/';
  // constructor() {
  //   let savedReservations = localStorage.getItem('reservations');
  //   this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  // }

  constructor(private httpClient: HttpClient) {}

  getReservations(): Observable<Reservation[]> {
    return this.httpClient.get<Reservation[]>(this.apiBaseUrl + 'reservations');
  }
  getReservation(id: string): Observable<Reservation> {
    // return this.reservations.find((res) => res.id === id);
    return this.httpClient.get<Reservation>(
      this.apiBaseUrl + 'reservation/' + id
    );
  }
  addReservation(reservation: Reservation): Observable<void> {
    reservation.id = Date.now().toString();
    return this.httpClient.post<void>(
      this.apiBaseUrl + 'reservation/',
      reservation
    );
    // this.reservations.push(reservation);
    // //localStorage.setItem('reservations', JSON.stringify(this.reservations));
    // console.log(JSON.stringify(this.reservations));
  }
  deleteReservation(id: string): Observable<void> {
    return this.httpClient.delete<void>(this.apiBaseUrl + 'reservation/' + id);
    // let index = this.reservations.findIndex((res) => res.id === id);
    // this.reservations.splice(index, 1);
    // localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    return this.httpClient.put<void>(
      this.apiBaseUrl + 'reservation/' + id,
      updatedReservation
    );
    // let index = this.reservations.findIndex((res) => res.id === id);
    // this.reservations[index] = updatedReservation;
    //localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
