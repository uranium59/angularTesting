import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { MovielistComponent } from './movielist.component';

@Component({
    template: ''
})
export class MovieListWrapper implements OnInit {
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
            const dialogRef = this.dialog.open(MovielistComponent, {
                width: '630px',
                data: { url: this.movieUrl }
            });
            dialogRef.afterClosed().subscribe(result => {
                this.router.navigate(['/'], { relativeTo: this.route });
            });
        });
    }
}