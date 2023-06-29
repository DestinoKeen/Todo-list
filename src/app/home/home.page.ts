import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username = ''
  email: String = ''
  password: string = ' ' 
  nums: any = '';

 

  constructor() {
  //  this.name() //function called
    }

cal(fig: any){
    this.nums += fig

}

alert(){
  prompt('Add activities');
}
calculate(){
  this.nums= eval(this.nums) 
}

backspace(){
this.nums=this.nums.substring(0, this.nums.length - 1)

}

  name(){
   this.username = 'Marvel Wilson'
   this.password = 'keen'
   alert('new Function')
  } //function declaration

  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      action: 'delete',
       
    
    },    
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },

      },
      { text: 'other social media',
    }
  ];
  
} 
          

   
  