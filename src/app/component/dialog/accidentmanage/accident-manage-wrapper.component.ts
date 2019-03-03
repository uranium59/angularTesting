import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { AccidentmanageComponent } from './accidentmanage.component';

@Component({
    template: ''
})
export class AccidentManageWrapper implements OnInit {
    CarNumber: string;
    CarType: string;
    constructor(public dialog: MatDialog, private router: Router,
        private route: ActivatedRoute) {
        this.openDialog();
    }
    ngOnInit(){
        this.CarNumber = this.route.snapshot.params.carnum;
        this.CarType = this.route.snapshot.params.cartype;
    }
    openDialog(): void {
        setTimeout(() => {
            const dialogRef = this.dialog.open(AccidentmanageComponent, {
                width: '680px',
                height: '560px',
                minHeight: '560px',
                data: { CarNumber: this.CarNumber, CarType: this.CarType }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/'], { relativeTo: this.route });
            });
        });
    }
}