import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { CarstatechangeComponent } from './carstatechange.component';

@Component({
    template: '',
})
export class CarStateChangeWrapper {
    constructor(public dialog: MatDialog, private router: Router,
        private route: ActivatedRoute) {
    }
    
    ngAfterViewInit() {
        this.openDialog();
    }

    openDialog(): void {
        setTimeout(() => {
            const dialogRef = this.dialog.open(CarstatechangeComponent, {
                width: '460px'
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/'], { relativeTo: this.route });
            });
        });

    }
}