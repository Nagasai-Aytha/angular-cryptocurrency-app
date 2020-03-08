import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data: any;
  isDetailPage: boolean = true;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route && this.route.params) {
      this.route.params.subscribe(params => {
        if (params['data']) {
          this.data = JSON.parse(params['data']);
        }
      }
      );
    }

  }

}
