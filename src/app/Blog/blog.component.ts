import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'blog-content',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public dialog: MatDialog, private http: HttpClient) {}
    ngOnInit(): void {
    }

    openDialog(file: string) {
      this.http.get('assets/blogs/' + file + '.json?date='+Date.now(), {responseType: 'json'}).subscribe((content: any) => {
        console.log("content: " + content);
        let data = {
          title: (content as any).title,
          content: (content as any).blogContent,
          date: (content as any).date
        }
        console.log("data: " + JSON.stringify(data));
        this.dialog.open(BlogDialogComponent, {
          data: data,
          height: "98vh"
        });
    },
    (error) => {
      console.log("Encountered error: "+ JSON.stringify(error));
    }
    )
      
    }
}

export interface Blog {
  title: string;
  content: string;
}

