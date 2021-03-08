import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-firm',
  templateUrl: './firm.component.html',
  styleUrls: ['./firm.component.css']
})
export class FirmComponent implements OnInit {

  @Input() colorNombre : String;

  constructor() { }

  ngOnInit(): void {
  }

}
