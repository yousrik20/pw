import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length=0;
  includeletters=false;
  includeNumbers=false;
  incluedeSymbols=false;
  password="";
  onChangeLength(value:string){
    const parsedValue=parseInt(value);
    if(!isNaN(parsedValue)){
      this.length=parsedValue; 
    }
  }
  onChangeUseLetters(){
    this.includeletters=!this.includeletters;
  }
  onChangeUseNumbers(){
    this.includeNumbers=!this.includeNumbers;
  }
  onChangeUseSymbols(){
    this.incluedeSymbols=!this.incluedeSymbols;
  }
  onButtonClick(){
    const numbers='1234567890';
    const letters='abcdefhigklmnopqrstuvwxyz';
    const symbols='!@#$%^&*()';
    let validChars='';
    if(this.includeletters){
      validChars+=letters;
    }
    if(this.includeNumbers){
      validChars+=numbers;
    }
    if(this.incluedeSymbols){
      validChars+=symbols;
    }
    let generatedPassword='';
    for(let i=0;i<this.length;i++){
      const index=Math.floor(Math.random()*validChars.length);
      generatedPassword+=validChars[index];
    }
    this.password=generatedPassword;
  }

}
