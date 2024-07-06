import { Component, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import FilterComponent from '../filter/filter.component';
import { FiltService } from '../filter/filter.service';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ToolbarModule, CustomButtonComponent, SplitButtonModule, InputTextModule, DropdownModule, AvatarModule, FilterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export default class HeaderComponent {
  isFilterShow: boolean = this.filtService.showFilter;

  constructor(public filtService: FiltService) {}

  toggleFilterView() {
    console.log('click');
    this.filtService.toggleFilter();
    this.isFilterShow = this.filtService.showFilter;
  }
}
