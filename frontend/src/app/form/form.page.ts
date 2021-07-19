import { Component, OnInit } from '@angular/core';
import { Contenido, SecondsService } from '../service/seconds.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.page.html',
  styleUrls: ['./form.page.scss'],
})
export class FormPage implements OnInit {
   
  editar = false;
  contenido : Contenido = {
  Titulo: '',
  descripcion: '',
  }

  constructor(private secondsService: SecondsService, private router : Router, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
this.activatedRoute.paramMap.subscribe((paramMap) => {
  if (paramMap.get('datosid')){
    this.editar = true;
   this.secondsService
   .getDatosById(paramMap.get('datosid'))
   .subscribe((res) =>{
     this.contenido = res;
  });
}
});

}
  guardardato() {
    this.secondsService.createDatos(this.contenido.Titulo , this.contenido.descripcion).subscribe(
      (res) => {
        this.router.navigate(["/second"]);
      },
        (err) => console.error(err)
  );
}
  editardato(){
    this.secondsService.updateDatos(this.contenido.id,{
      Titulo: this.contenido.Titulo,
      descripcion: this.contenido.descripcion

    }).subscribe(res =>{
      this.router.navigate(['/second'])
  })
}
}  
