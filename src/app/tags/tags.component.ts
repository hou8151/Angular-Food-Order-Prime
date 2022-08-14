import { Component, Input, OnInit } from '@angular/core';
import { Food2Service } from '../services/food2/food2.service';
import { tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPagetags?:string[];
  @Input()
  justifyContent:string ='center';

  tags?:tag[] =[];
  constructor(private fs:Food2Service) { }

  ngOnInit(): void {
    if(!this.foodPagetags)
    this.tags = this.fs.getAllTag();
  }

}
