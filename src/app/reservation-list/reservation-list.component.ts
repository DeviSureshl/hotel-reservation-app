import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
})
export class ReservationListComponent implements OnInit {
  reservations: Reservation[] = [];
  constructor(private reservationService: ReservationService) {}
  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((res) => {
      this.reservations = res;
    });
  }
  deleteReservation(id: string) {
    if (window.confirm('Do you really want to delete?')) {
      this.reservationService.deleteReservation(id).subscribe(() => {
        console.log('reservation deleted successfully');
      });
    }
  }
}
