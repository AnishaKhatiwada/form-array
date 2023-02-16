import { environment } from "src/environments/environment";

  export class Constants{

    static readonly Hobbies = 'hobby';
    
    static generateApiPath(...part: string[]) {
        return part.reduce((path, part) => `${path}/${part}`, environment.BACKEND_ENDPOINT);
    }
}