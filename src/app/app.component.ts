import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { UserService } from "./user.service";
import { UserData } from "./user-data";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {
  userData: any;
  dataSource: any;
  constructor(public userservice: UserService) {}
  /*Getting Userdata from jsonfile in assets folder*/
  ngOnInit() {
    this.userservice.getdata().subscribe((data: any) => {
      this.userData = data;
      this.dataSource = new MatTableDataSource<UserData>(this.userData);
      this.dataSource.paginator = this.paginator;
    });
  }

  displayedColumns = ["position", "name", "location", "progLang"];

  /*Inputfield Filter*/
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*paginator*/
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngAfterViewInit() {}
}
