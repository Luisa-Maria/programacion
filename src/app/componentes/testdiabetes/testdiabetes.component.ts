import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TestDiabetesService } from './testdiabetes.service';

@Component({
  selector: 'app-testdiabetes',
  templateUrl: './testdiabetes.component.html',
  styleUrls: ['./testdiabetes.component.css']
})
export class TestdiabetesComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    document: new FormControl(''),
    eps: new FormControl(''),
    sintomaA: new FormControl(0),
    sintomaB: new FormControl(0),
    sintomaC: new FormControl(0),
    sintomaD: new FormControl(0),
    sintomaE: new FormControl(0),
  });
  showAlertNotification = false;
  showGlucemia = false;
  showAlerta = '';
  constructor(private testDiabetesService: TestDiabetesService) { }

  ngOnInit(): void {
  }

  onSubmit(data): void {
    const testData = this.profileForm.value;
    testData.sintomaA = testData.sintomaA ? 1 : 0;
    testData.sintomaB = testData.sintomaB ? 1 : 0;
    testData.sintomaC = testData.sintomaC ? 1 : 0;
    testData.sintomaD = testData.sintomaD ? 1 : 0;
    testData.sintomaE = testData.sintomaE ? 1 : 0;
    this.testDiabetesService.createTestDiabetes(this.profileForm.value).subscribe((response) => {
      if (response.status === 200) {
        this.showAlertNotification = true;
        setTimeout(() => {
          this.showAlertNotification = false;
        }, 2000);
      }
      if (testData.sintomaA || testData.sintomaB || testData.sintomaC || testData.sintomaD || testData.sintomaE) {
        console.log('a');

        this.showGlucemia = true;
      }
    }
    );
  }
  message(event): void{
    console.log(event);
    const valor = event.target.valueAsNumber;

    if (valor >= 7.0 && valor <= 13.8) {
      this.showAlerta = `HIPERGLICEMIA AISLADA, RECOMENDACIONES:
      Realizar glucemia en ayunas y TGP en pacientes sin diagnóstico,
      Si presenta deshidratación: rehidratación oral o EV según las demandas,
      revaluar la conducta terapéutica en diabéticos y cumplimiento de los pilares,
      Reevaluar dosis de hipoglucemiantes`;
    } else if (valor >= 13.8 && valor <= 33) {
      this.showAlerta =`CETOACIDOSIS DIABÉTICA, RECOMENDACIONES:
      Coordinar traslado y comenzar tratamiento.
       - Hidratación con Solución salina 40 ml/Kg en las primeras 4 horas. 1-2 L la primera hora. -
Administrar potasio al restituirse la diuresis o signos de hipopotasemia
(depresión del ST, Onda U ≤ 1mv, ondas U≤ T).
 - Evitar insulina hasta desaparecer signos de hipopotasemia.
  - Administrar insulina simple 0,1 U/kg EV después de hidratar`;
    } else if (valor > 33) {
      this.showAlerta = `ESTADO HIPEROSMOLAR HIPERGLUCÉMICO NO CETÓSICO, RECOMENDACIONES:
      Coordinar traslado y comenzar tratamiento.
      - Hidratación con Solución Salina 10-15 ml/Kg/h hasta conseguir estabilidad hemodinámica. -
Administrar potasio al restituirse la diuresis o signos de hipopotasemia
(depresión del ST, Onda U ≤ 1mv, ondas U≤ T).`
    }
  }
}
