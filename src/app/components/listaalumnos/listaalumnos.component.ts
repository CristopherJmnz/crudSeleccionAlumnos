import { Component,OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-listaalumnos',
  templateUrl: './listaalumnos.component.html',
  styleUrls: ['./listaalumnos.component.css']
})
export class ListaalumnosComponent implements OnInit{
  public alumnos!:Array<Alumno>
  constructor(private _service:AlumnosService) {
    
  }

  ngOnInit(): void {
    this.getAlumnosActuales()
  }

  getAlumnosActuales():void{
    this._service.geAlumnosPorYear(2023).subscribe(response=>{
      this.alumnos=response;
    })
  }

}
