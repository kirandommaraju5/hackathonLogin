import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Server } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class ServerService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Server[]>(`${environment.serverUrl}/details`);
    }

    save(server) {
        return this.http.post<Server>(`${environment.serverUrl}/details`, server);
    }
}

