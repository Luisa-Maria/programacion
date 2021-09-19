import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TestDiabetesService {
  configUrl = 'http://localhost/luisaMaria.com/prueba.php';
  constructor(private http: HttpClient) { }

  createTestDiabetes(data: any): Observable<any> {
    const formData: any = new FormData();
    Object.keys(data).forEach((field) => {
      formData.append(field, data[field]);
    });
    return this.http.post(this.configUrl, formData);
  }
}
