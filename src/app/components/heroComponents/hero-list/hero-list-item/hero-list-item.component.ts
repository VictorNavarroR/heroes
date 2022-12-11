import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Hero } from 'src/app/models/heroes.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/shared/dialog/dialog.component';
import { HeroService } from 'src/app/services/hero-service.service';

@Component({
  selector: 'app-hero-list-item',
  templateUrl: './hero-list-item.component.html',
  styleUrls: ['./hero-list-item.component.scss']
})
export class HeroListItemComponent {

  @Input() hero!: Hero;
  @Output() heroDeletion = new EventEmitter<string>();

  constructor( public dialog: MatDialog, private heroService: HeroService) { }

  openDialog( id: string | null = null): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data: 'Are you sure you want to delete this hero?',
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res) {
        id && this.deleteHero(id);
      }
    })
  }
  
  deleteHero(id: string): void {
    this.heroService.delete(id);
  }

}


