import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { CourseRatingsItem } from '../course-rating';
import CourseRatingsData from '../../assets/course-rating-data.json';

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-course-ratings',
  templateUrl: './course-ratings.component.html',
  styleUrls: ['./course-ratings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CourseRatingsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  dataSource: MatTableDataSource<CourseRatingsItem>;
  displayedColumns = ['event', 'hla', 'ssa', 'rssa'];
  expandedElement: CourseRatingsItem | null;
  rssa = 0;

  constructor() {
    // Assign the data to the data source for the table to render
    for (let round of CourseRatingsData) {
        round["weight"] = calcWeight(round.ratings.player1, round.ratings.player2);
        round["offset"] = calcOffset(round);
        round["ssa"] = calcSsa(round);
        round["rssa"] = this.calcRssa(round);
        round["category"] = calcCategory(round["ssa"]);
    }
    CourseRatingsData.sort((a, b) => {
        const t1 = new Date(a.date);
        const t2 = new Date(b.date);
        return t2.getTime() - t1.getTime();
    });
    this.dataSource = new MatTableDataSource(CourseRatingsData);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // ngAfterViewInit() {
  //   let o1:Observable<boolean> = this.id.valueChanges;
  //   let o2:Observable<boolean> = this.description.valueChanges;
  //
  //   merge(o1, o2).subscribe( v => {
  //     this.columnDefinitions[0].hide = this.id.value;
  //     this.columnDefinitions[1].hide = this.description.value;
  //     console.log(this.columnDefinitions);
  //   });
  // }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

    getDisplayedColumns() {
        return this.displayedColumns;
    }

    private calcRssa(round: CourseRatingsItem) {
        if (this.rssa === 1)
            return calcRssa1(round);
        else
            return calcRssa2(round);
    }
}

function calcWeight(player1: {score: number, rating: number}, player2: {score: number, rating: number}) {
    return (player1.rating - player2.rating)/(player1.score - player2.score);
}

function calcOffset(round: CourseRatingsItem) {
    return round.ratings.player1.rating - round["weight"] * round.ratings.player1.score;
}

function calcSsa(round: CourseRatingsItem) {
    return (1000 - round["offset"]) / round["weight"];
}

function calcCategory(ssa: number) {
    if (ssa < 48)
        return "A";
    else if (ssa < 54)
        return "2A";
    else if (ssa < 60)
        return "3A";
    else if (ssa < 66)
        return "4A";
    else
        return "5A";
}

function calcRssa1(round: CourseRatingsItem) {
    return round.hla ? round["ssa"] / round.hla * 10 : 0;
}

function calcRssa2(round: CourseRatingsItem) {
    return round.hla ? round["ssa"] / Math.log10(round.hla) * 2 : 0;
}
