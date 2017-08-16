import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  constructor() {
    ;
   }

  ngOnInit() {
    $('#slctProy').css('display', 'none');
    $('#slctOpt1').css('display', 'none');
    $('#slctOpt2').css('display', 'none');
    $('#slctPre').css('display', 'none');
  }

  hideSlcts(val:boolean){
    if(val){
      $('#slctProy').css('display', 'none');
      $('#slctOpt1').css('display', 'none');
      $('#slctOpt2').css('display', 'none');
      $('#slctPre').css('display', 'none');
    }else{
      $('#slctProy').css('display', 'inline');
      $('#slctOpt1').css('display', 'inline');
      $('#slctOpt2').css('display', 'inline');
      $('#slctPre').css('display', 'inline');
    }
    
  }

  slctChange():void{
    // alert($(e).val());
    if($('#slctGP').val()!=0){
      this.hideSlcts(false);
    }else{
      this.hideSlcts(true);
    }
  }

}
