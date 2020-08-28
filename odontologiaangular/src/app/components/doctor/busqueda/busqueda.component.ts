import { Component, OnInit, ViewChild } from '@angular/core';
import { Formulario3Service } from 'src/app/services/formulario3.service';
import { Formulario3 } from 'src/app/models/formulario3';
import { Data_enivarService } from 'src/app/services/data_enviar_componet.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css'],
  providers:[Formulario3Service]
})
export class BusquedaComponent implements OnInit {

  public pacientes:any=[];
  displayedColumns: string[] = ['Nombres', 'Apellidos','Nacimiento','Acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(public _pacientes:Formulario3Service,public _enviar:Data_enivarService) { }
   //pon un formulario q necesite el di del paciente, todos, mmm, exploracion por ejemplo que es el formulario 2
  ngOnInit(): void {
    this._enviar.dataid$.subscribe(res=>{
      
      console.log("recibiendo info,bus",res)
    })

    this._pacientes.getPacientes().subscribe(res=>{
      console.log(res)
      this.pacientes = res.pacientes;

      

      this.dataSource.data=res.pacientes;
    })

  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  


  elejir_paciente(id){
    console.log("paciente su",id)
    this._enviar.getIdpaciente(id);
  }

}
