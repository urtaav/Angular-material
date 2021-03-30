import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-side',
  templateUrl: './sidebar-side.component.html',
  styleUrls: ['./sidebar-side.component.scss']
})
export class SidebarSideComponent implements OnInit {

  constructor() { }
  menuItems: any[] = [
    
    {
      name: "Dashboard",
      type: "link",
      tooltip: "Dashboard",
      icon: "dashboard",
      state: "dashboard/home"
    },
    {
      name: "Form Basic",
      type: "link",
      tooltip: "Dashboard",
      icon: "description",
      state: "forms/basic"
    },
    {
      name: "Read Excel",
      type: "link",
      tooltip: "Dashboard",
      icon: "chrome_reader_mode",
      state: "forms/read-excel"
    }, 
    {
      name: "Hekp",
      type: "link",
      tooltip: "Dashboard",
      icon: "help",
      state: "dashboard/home"
    }
  ];

  ngOnInit(): void {
  }

}
