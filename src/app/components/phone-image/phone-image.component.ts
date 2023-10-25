import { Component } from "@angular/core";

@Component({
    selector: 'app-phone-image',
    template:`<img src="../../assets/hero-image.png" alt="">`,
    styles:[`
        img{
            width:90%;
        }
        @media screen and (max-width:768px){
                
        }
    `]
})
export class PhoneImageComponent{}