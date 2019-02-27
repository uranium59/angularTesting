import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MoviePlayComponent } from './movie-play.component';

@Component({
    template: ''
})
export class MoviePlayWrapper implements OnInit {
    constructor(public dialog: MatDialog, private router: Router,
        private route: ActivatedRoute) {
    }
    movieUrl: string;
    ngOnInit() {
        this.movieUrl = this.route.snapshot.params.url;
        this.openDialog();
    }

    openDialog(): void {
        setTimeout(() => {
            const dialogRef = this.dialog.open(MoviePlayComponent, {
                width: '760px',
                data: { url: this.movieUrl }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/'], { relativeTo: this.route });
            });
        });
    }
}