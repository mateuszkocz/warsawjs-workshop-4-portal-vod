import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  @Input()
  size: 'small' | 'medium' | 'large' = 'large';

  width: number;
  source = '/assets/warsawjs-logo.png';

  private sizes = new Map<string, number>([['small', 60], ['medium', 120], ['large', 400], ['default', 300]]);

  ngOnInit() {
    this.width = this.sizes.get(this.size || 'default');
  }
}
