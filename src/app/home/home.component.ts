import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User, Server } from '@app/_models';
import { UserService, ServerService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];
    servers: Server[];

    constructor(private userService: UserService, private serverService: ServerService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
        this.serverService.getAll().pipe(first()).subscribe(servers => {
            this.loading = false;
            this.servers = servers;
        });
    }
}
