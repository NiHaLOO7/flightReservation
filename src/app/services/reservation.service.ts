import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './login.service';
import { Criteria } from '../model/criteria';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  flightsUrl:string = 'http://127.0.0.1:8000/flightservices/findFlights/';
  singleFlightsUrl:string = 'http://127.0.0.1:8000/flightservices/flights/';
  saveReservationUrl:string = 'http://127.0.0.1:8000/flightservices/saveReservation/';
  flightData:any;
  constructor(private http:HttpClient,private loginService:LoginService) { 

  }

  public getFlights(criteria:Criteria):any{
    return this.http.post(this.flightsUrl,criteria,this.loginService.httpOptions)
  }
  public getFlight(id:number):any{
    return this.http.get(this.singleFlightsUrl+id,this.loginService.httpOptions)
  }
  public saveReservation(reservation:Reservation):any{
    return this.http.post(this.saveReservationUrl,reservation,this.loginService.httpOptions)
  }
}
