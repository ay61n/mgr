import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'link'
})
export class LinkPipe implements PipeTransform {

  transform(value: string): string 
  {
    return value.toLowerCase().replace(new RegExp("ö","g"),"o")
    .replace(new RegExp("ş","g"),"s")
    .replace(new RegExp("ü","g"),"u")
    .replace(new RegExp("ı","g"),"i")
    .replace(new RegExp("ç","g"),"c")
    .replace(new RegExp("ğ","g"),"g")
    .replace(new RegExp(" ","g"),"-")
  }

}
