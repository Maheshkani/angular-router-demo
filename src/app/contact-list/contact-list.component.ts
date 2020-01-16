import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts:any[] = [];

  constructor(private contactservice : ContactService) { }

  ngOnInit() {
    this.contactservice.getContacts().subscribe((data:any[])=>{
      console.log(data);
      this.contacts =data;
    })
  }

}