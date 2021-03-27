import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import {  environment } from "../environments/environment";
import { Subject } from "rxjs";
import { Observable } from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user_id:any;
  type_id:any;
  loginSignal:Subject<string>=new Subject<string>();
  constructor(public httpClient: HttpClient) { }
  doregister(registerdata){
    console.log(registerdata) ;
    return this.httpClient.post(environment.api_url+"userRegistration",registerdata)
  }
  otpVerification(data){
    return this.httpClient.post(environment.api_url+"otpVerification",data)
  }
  login(data){
    return this.httpClient.post(environment.api_url+"userLogin",data)
  }
  forgotpass(data){
    return this.httpClient.post(environment.api_url+"userForgetPassowrd",data)
  }
  resendOtp(data){
    return this.httpClient.post(environment.api_url+"resendOtp",data)
  }
  createRaffle(data){
    return this.httpClient.post(environment.api_url+"saveRaffle",data)
  }
  upcoming(){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"myRaffleList/user_id/"+this.user_id+"/upcoming_past_status/upcoming")
    // return this.httpClient.get("https://mydevfactory.com/~shreya/raffleiq/Api/myRaffleList/user_id/8/upcoming_past_status/upcoming");
  
  }
  past(){
    this.user_id=localStorage.getItem('user_id');
  
  return this.httpClient.get(environment.api_url+"myRaffleList/user_id/"+this.user_id+"/upcoming_past_status/past")
  }  
  List(type_id=1){
    return this.httpClient.get("https://mydevfactory.com/~shreya/raffleiq/Api/raffleList/type_id/"+type_id)
    
  }
  bsnList(){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get("https://mydevfactory.com/~shreya/raffleiq/Api/businessUserDashboard/user_id/"+this.user_id);

  }
   
  detailsPage(id){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"getRaffleDetails/user_id/"+this.user_id+"/raffle_id/"+id);

  }
  
  joinPublic(data){
    return this.httpClient.post(environment.api_url+"joinRaffle",data)
  }

  viewList(id){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"raffleParticipantList/user_id/"+this.user_id+"/raffle_id/"+id);
  }

  userupcoming(){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"getJoinedRaffleList/user_id/"+this.user_id+"/upcoming_past_status/upcoming")
  }
  userpast(){
    this.user_id=localStorage.getItem('user_id');
  
  return this.httpClient.get(environment.api_url+"getJoinedRaffleList/user_id/"+this.user_id+"/upcoming_past_status/past")
  }
  chkraffle(data){
    return this.httpClient.post(environment.api_url+"chkPrivateRafflePassword",data)
  }
  payment(data){
    return this.httpClient.post(environment.api_url+"rafflePaymentOnline",data)
  }
  cashpayment(data){
    return this.httpClient.post(environment.api_url+"rafflePaymentCash",data)
  }

  transctionDetails(id){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"getOnlineTransactionList/user_id/"+this.user_id+"/raffle_id/"+id);

  }
  listPayment(id){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"getCashPaymentList/user_id/"+this.user_id+"/raffle_id/"+id);

  }
  verify(data){
    return this.httpClient.post(environment.api_url+"verifyPayment",data)

  }
  userTransaction(){
    this.user_id=localStorage.getItem('user_id');
    return this.httpClient.get(environment.api_url+"getUserTransaction/user_id/"+this.user_id);

  }

  





}
