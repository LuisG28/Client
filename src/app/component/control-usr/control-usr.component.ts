import { Component, OnInit } from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import {usr} from '../../models/usr';

@Component({
  selector: 'app-control-usr',
  templateUrl: './control-usr.component.html',
  styleUrls: ['./control-usr.component.css']
})
export class ControlUSRComponent implements OnInit {
constructor(private UsrServ: UsuarioServiceService) { }
  usuarios : any =[]
  ngOnInit(): void {
    this.getListUsr();
    
  }

  getListUsr(){
    this.UsrServ.GetAllUsr().subscribe( 
      res => {
        this.usuarios = res;
        console.log(this.usuarios);
      },
      err => console.error(err)
      );
  }

  getUsrById(){
    let id : string = "6";
    this.UsrServ.getUsrByMatricula(id).subscribe(data=>console.log(data));
  }

  DesActUr(){
    let id : string ="6";
    this.UsrServ.DesActUsr(id).subscribe(data => console.log(data));
  }

  CreateUsr(usuarios){
    this.UsrServ.saveUsr(this.usuarios).subscribe(data =>console.log(data));
  }
  
}
