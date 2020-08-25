import { Injectable } from '@angular/core';
import { IGroup } from '../interface/igroup';
import { GROUP } from '../data/data';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  members: IGroup[] = [];

  constructor() { 
    this.members = GROUP;
  }

  getMembers(): IGroup[] {
    return this.members;
  }
}
