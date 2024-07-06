import { Component  } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import FilterComponent from '../filter/filter.component';
import { FiltService } from '../filter/filter.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, ButtonModule, SplitButtonModule, InputTextModule, DropdownModule, AvatarModule, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export default class HeaderComponent {
  isFilterShow: boolean = this.filtService.showFilter;

  constructor(public filtService: FiltService) {}

  toggleFilterView() {
    this.filtService.toggleFilter();
    this.isFilterShow = this.filtService.showFilter;
  }
}
