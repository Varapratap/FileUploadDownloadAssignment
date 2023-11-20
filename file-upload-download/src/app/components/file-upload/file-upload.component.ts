import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  fileUploadUrl= "http://localhost:8080/file/upload";
  constructor(
   private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
  file: any;
  flag = true;
  SelectFile(event: any){
    //console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);

  }
  uploadFile(){
   let formData = new FormData();
   formData.append('file',this.file);
   
   this.flag = false;
   this.http.post(this.fileUploadUrl,formData).subscribe(
    (data: any)=> {
      console.log(data);
      alert(data.message);
      this.flag = true;
    },
    (error)=>{
      console.log(error);
    }
   )
  }
}

