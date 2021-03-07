import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-game-search',
  templateUrl: './game-search.component.html',
  styleUrls: ['./game-search.component.css']
})
export class GameSearchComponent implements OnInit {
  @Output()
  updatedGamesList:EventEmitter<string> = new EventEmitter()

  form:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({text:['',Validators.required]})
    
  }
  onInputUpdate(){
    if(this.form.valid)
      this.updatedGamesList.emit(this.form.value.text)
  }
  
}
