import { Component, OnInit, ViewChild } from "@angular/core";
import { IGroup } from "./interface/igroup";
import { GroupService } from "./services/group.service";
import { MatTableDataSource } from "@angular/material/table";
import { MatSort } from "@angular/material/sort";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    "playerName",
    "charName",
    "race",
    "class",
    "level",
  ];
  dataSource: MatTableDataSource<IGroup>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private groupService: GroupService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.groupService.getMembers());
    this.dataSource.sort = this.sort;
  }

  applyFilter(filter: string): void {
    this.dataSource.filter = filter.trim().toLowerCase();
  }
}
