import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { SinglecarstopComponent } from './singlecarstop.component';

@Component({
    template: '',
})
export class SingleStopWrapper {
    constructor(public dialog: MatDialog, private router: Router,
        private route: ActivatedRoute) {
            this.openDialog();
    }

    openDialog(): void {
        setTimeout(() => {
            const dialogRef = this.dialog.open(SinglecarstopComponent, {
                width: '430px'
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/'], { relativeTo: this.route });
            });
        });

    }
}