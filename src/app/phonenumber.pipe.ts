import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumber'
})
export class PhonenumberPipe implements PipeTransform {

  transform(value: String , ...args: unknown[]): unknown {
    let phoneNumber = value.toString()

    switch (args[0]) {
      case 'IND' : 
        return phoneNumber.length == 0 ? '' : `+91-${phoneNumber.substring(0,4)}-${phoneNumber.substring(4,10)}`
      case 'USA' : 
        return phoneNumber.length == 0 ? '' : `+1-${phoneNumber.substring(0,3)}-${phoneNumber.substring(3,10)}`
      default : 
        return phoneNumber
    }
   
  }

}
