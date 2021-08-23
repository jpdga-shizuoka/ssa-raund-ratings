import { Component, ViewChild, Input, OnInit, AfterViewInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Observable } from 'rxjs';

import { RoundId, RoundInfo } from '../models';
import { RemoteService } from '../remote.service';
import { RoundListDataSource } from './round-list-datasource';

@Component({
  selector: 'app-round-list',
  templateUrl: './round-list.component.html',
  styleUrls: ['./round-list.component.css']
})
export class RoundListComponent implements OnInit, AfterViewInit {
  @Input() list$!: Observable<RoundId[]>;
  @ViewChild(MatTable) table!: MatTable<RoundInfo>;
  dataSource?: RoundListDataSource;
  displayedColumns = ['title', 'holes', 'hla', 'ssa', 'td'];

  constructor(private remote: RemoteService) {}

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.list$.subscribe(list => {
      this.dataSource = new RoundListDataSource(list, this.remote);
      this.table.dataSource = this.dataSource!;
    });
  }
}
