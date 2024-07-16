import { Component, OnInit } from '@angular/core';
import { DetalisService } from '../../services/detalis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss'],
})
export class DetalisComponent implements OnInit {
  id: string = '';

  constructor(
    public detalisService: DetalisService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.turnOnSubscribes();
  }

  turnOnSubscribes() {
    this.activatedRoute.params.subscribe((params) => {
      const id = params['id'];
      this.id = id;
    });
    this.detalisService.loadDetalisById(this.id);
  }

  ngOnDestroy(): void {
    this.detalisService.turnOffSubscribes();
  }

  handleButtonBack() {
    this.detalisService.handleButtonBack();
  }
}
