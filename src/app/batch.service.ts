import { Injectable } from '@angular/core';
import { Batch } from "./batch";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppServiceService } from "./app-service.service";

@Injectable()

export class BatchService {

  constructor(private httpclient : HttpClient, private appService : AppServiceService) { }
  batches : Batch[];
  private batchUrl : string = "Batches";
  getBatchesData(): Batch[]{
    this.batches = [
      {
      batchId : 1,
      batchName : 'Pits',
      startDate : '02-12-2018',
      tentativeEndDate : '05-01-2019',
      noOfHours : 12,
      hoursTaken : 5,
      remarks : 'Nil'
    },
    {
      batchId : 2,
      batchName : 'Pits 12',
      startDate : '02-12-2018',
      tentativeEndDate : '05-01-2019',
      noOfHours : 122,
      hoursTaken : 51,
      remarks : 'Nil'
    }
  ];
  return this.batches;
  }

  getBatches() : Observable<Batch[]>{

    const httpOption = {
      
    }
    return this.httpclient.get<Batch[]>
    (this.appService.url + this.batchUrl);
  }

  saveBatches(batch : Batch) : Observable<Batch>{
    const headers  = new HttpHeaders({'Content-Type': 'application/json'});
    return this.httpclient.post<Batch>(this.appService.url+this.batchUrl,batch, {headers:headers});
  }

}
