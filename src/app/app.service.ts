import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Constants } from "./constant/backend-api.constants";

export interface Response {
    success: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class ArrayService {
    constructor(private http: HttpClient) { }

    setHobbies(formData) {
        return this.http.post<Response>(
            Constants.generateApiPath(
                Constants.Hobbies),
            formData
        )
    }
}
