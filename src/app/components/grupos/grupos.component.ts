import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import html2canvas from 'html2canvas';
import jsPDF from 'node_modules/jspdf/dist/jspdf.min.js';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent {
  public alumnos!: Array<Alumno>;
  constructor(private _service: AlumnosService) {
    this.downloadPDF();
  }

  public downloadPDF(): void {
    const doc = new jsPDF();
    doc.text('Hello world!', 10, 10);
    doc.save('hello-world.pdf');
  }

  ngOnInit(): void {
    this.getAlumnosActuales();
  }

  getAlumnosActuales(): void {
    this._service.geAlumnosPorYear(2023).subscribe((response) => {
      this.alumnos = response;
    });
  }

  playAudio(): void {
    let audio = new Audio('./../../../assets/audio/himno.mp3');
    audio.play();
  }

  generarGrupos(): void {
    this.playAudio();
    let contador = 0;
    if (contador < this.alumnos.length) {
      setInterval(() => {
        let grupo = Math.floor(Math.random() * 8);
        let arrayGrupos = Array.from(
          document.querySelector('#grupos-container')!.children
        );
        if (contador == this.alumnos.length - 1) {
          let alumnoSpan = document.createElement('p');
          alumnoSpan.innerHTML =
            this.alumnos[contador].nombre +
            ' ' +
            this.alumnos[contador].apellidos;
          arrayGrupos[grupo].append(alumnoSpan);
          contador++;
        } else if (arrayGrupos[grupo].children.length < 3) {
          let alumnoSpan = document.createElement('p');
          alumnoSpan.innerHTML =
            this.alumnos[contador].nombre +
            ' ' +
            this.alumnos[contador].apellidos;
          arrayGrupos[grupo].append(alumnoSpan);
          contador++;
        }
      }, 1000);
    }
  }




}
