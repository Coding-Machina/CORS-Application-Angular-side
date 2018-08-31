import { Component, OnInit } from '@angular/core';
import { Batch } from "../batch";
import { BatchService } from "../batch.service";

@Component({
  selector: 'app-batch',
  templateUrl: './batch.component.html',
  styleUrls: ['./batch.component.css']
})
export class BatchComponent implements OnInit {

  batches : Batch[];
  batche : Batch = {
    
  };
  constructor(private batchServices : BatchService) { }

  ngOnInit() {
    // this.batches = this.batchServices.getBatchesData();
    this.batchServices.getBatches().subscribe( b => this.batches = b);
  }


  saveBatchesData(): void{
      this.batchServices.saveBatches(this.batche).subscribe(b => this.batches.push(b));
  }
}
