import { Component, OnInit } from '@angular/core';
import { SearchStringService } from 'app/core/services/search-string.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-search-string',
  templateUrl: './search-string.component.html',
  standalone: true,
  imports: [FormsModule, InputTextModule],
})
export class SearchStringComponent implements OnInit {
  constructor(public searchStringService: SearchStringService) {}

  ngOnInit(): void {
    this.searchStringService.turnOnSubscriptions();
  }

  ngOnDestroy(): void {
    this.searchStringService.turnOffSubscriptions();
  }
}
