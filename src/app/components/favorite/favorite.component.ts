import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  [x: string]: any;
  headerMessage : string;

  constructor() { }
  fillHeader(message , url)
  {
    this.IsMobileHeader = true;
    this.headerMessage =message;
    this.mobileAppUrl =url;
  }
  getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor;
      // Windows Phone must come first because its UA also contains "Android"
      if (/android/i.test(userAgent)) {
        this.mobileAppUrl="https://play.google.com/";
        this.fillHeader("Get Yaboos  Mobile App" ,  this.mobileAppUrl);
          return "Android";

      }
  
      // iOS detection from: http://stackoverflow.com/a/9039885/177710
     else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
     this.mobileAppUrl="https://www.apple.com/lae/ios/app-store/";
      this.fillHeader("Get Yaboos  Mobile App" ,  this.mobileAppUrl);
          return "iOS";
      }
      else{
        // this.mobileAppUrl="https://play.anghami.com/";
        // this.fillHeader("Get Yaboos ios Mobile App" ,  this.mobileAppUrl);
        return "PC";
      }
  
     
  }
  isPlaying: boolean = false;
  thisicon:boolean=false;
  mainicon:boolean=true;
  songPlayIcon: boolean = false;

  openmusicmodel(){ 
    this.isPlaying= true;
    
  }
  closeMedia() {
    this.isPlaying= false;
  }

showanothericon(){
  this.songPlayIcon=true;
  this.mainicon=false;
}
showamainicon(){
  this.songPlayIcon=false;
  this.mainicon=true;
}
hidenow:boolean=false;
hidelate:boolean=true;
myhello(){
  this.hidenow=true;
  this.hidelate=false;
  $('#songplayer').css("display","none");
  $('.firstimage').css("display","none");
  // $('.secondModal').css("width","90%");
  $('.secondModal').css("top","78%");

  if(($(window).width() <= 319)){
    $('.secondModal .navigation a').css("font-size","15px");
    $('.secondModal .navigation .secondimage').css("width","59px");
  }
  if(($(window).width() <= 575.98)){
    $('.secondModal').css("top","70%");
  }
  if(($(window).width() >= 575.99)&&($(window).width() <= 767.98)){
    $('.secondModal').css("top","75%");
  }
  if(($(window).width() >= 992)&&($(window).width() <= 1199.98)){
    $('.secondModal').css("top","84%");
  }
  if(($(window).width() >= 1200)&&($(window).width() <= 1399)){
    $('.secondModal').css("top","79%");
  }
  if(($(window).width() >= 1400)&&($(window).width() <= 1900)){
    $('.secondModal').css("top","75%");
  }
  if(($(window).width() >= 1901)){
    $('.secondModal').css("top","79%");
  }

  $('.secondModal .modal-content').css("background-color","#32AAB2");
  $('.secondModal .modal-content').css("width","100%");
  if(($(window).width() >= 1200)){
    $('.secondModal .modal-content').css("width","89%");
  }
  $('.centeredimage').attr("src","../../../assets/imgs/Icons-01.png");
  $('.navigation .our-prev-icon').css("color","#3EB7BA");
  // centeredimage
}
opensmodal(){
  this.hidenow=false;
  this.hidelate=true;

$('#songplayer').css("display","none");
$('.firstimage').css("display","block");
$('.secondModal').css("top","28%");
$('.secondModal .modal-content').css("background-color","#3EB7BA");
$('.secondModal .modal-content').css("width","90%");
// edit
if(($(window).width() <= 319)){
  $('.secondModal .navigation a').css("font-size","15px");
  $('.secondModal .navigation .secondimage').css("width","59px");
}
if(($(window).width() >= 768)&&($(window).width() <= 991)){
  $('.secondModal .modal-content').css("width","80%");
}
if(($(window).width() >= 992)&&($(window).width() <= 1199)){
  $('.secondModal .modal-content').css("width","90%");
}
if(($(window).width() >= 1200)){
  $('.secondModal .modal-content').css("width","80%");
}

// edit
$('.centeredimage').attr("src","../../../assets/imgs/playericon.png");
$('.navigation .our-prev-icon').css("color","#1a5356");
}


  
  showmodalhere(){
    this.isPlaying=true;
    this.hideshow=false;
  }
  showminiwindow2(){
    this.isPlaying=false;
    this.hideshow=true;
   
  }

  loadmoresongs(){
    
  }

  // showone:boolean = true;
  // showtwo:boolean = false;
  // showthree:boolean = false;

  // opensongsection(){
  //   this.showone = true;
  //   this.showtwo = false;
  //   this.showthree = false;
  // }

  // openalbumsection(){
  //   this.showone = false;
  //   this.showtwo = true;
  //   this.showthree =false;
  // }

  // openartistsection(){
  //   this.showone = false;
  //   this.showtwo = false;
  //   this.showthree = true;
  // }




  ngOnInit(): void {
    this.getMobileOperatingSystem();
  }

}
