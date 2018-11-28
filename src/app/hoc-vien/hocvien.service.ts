import { Injectable }from "@angular/core";
import { Http } from "@angular/http";

@Injectable()

export class HocVienService{
    constructor(private http: Http){}

    getHocVien(){
        const url = 'https://dinh-server-heroku.herokuapp.com/hocvien';
        return this.http.get(url)
        .toPromise()
        .then(res => res.json())
        .then(resJson => resJson.results);
    }
}