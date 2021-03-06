import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {Summary} from "../../summary/summary";

@Component({
  selector: 'app-auth-profile',
  templateUrl: './profile.component.html',
  styleUrls  : ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profile: any;
  summary: Summary;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.profile = this.route.snapshot.data['profile'];
    this.summary = this.route.snapshot.data['summary'];
  }

}
