import { Component, OnInit} from '@angular/core';
import { IGroup } from './interface/igroup';
import { GroupService } from './services/group.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = ['playerName', 'charName', 'race', 'class', 'level'];
  dataSource: MatTableDataSource<IGroup>;

  constructor(private groupService: GroupService) {  }

  ngOnInit(): void { 
    this.dataSource = new MatTableDataSource(this.groupService.getMembers());
  }
}
