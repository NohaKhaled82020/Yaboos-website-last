import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as $ from 'jquery'
import { Artist } from 'src/models/artist.model';
import { Songs } from 'src/models/songs.model';
import { ArtistService } from 'src/service/artist.service';
import { SongsService } from 'src/service/songs.service';
import { AlbumService } from 'src/service/album.service';
import { Album } from 'src/models/abum.model';
@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {
  [x: string]: any;
  headerMessage : string;
  showSongs:boolean = true;
  showAlbums:boolean = false;
  showArtists:boolean = false;
  isPlaying: boolean = false;
  showanotherheart: boolean = false;
  hideheart: boolean = true;
  searchText:string;
  artistList: Artist[];
  songsList: Songs[];
  albumList : Album[];
  currentSongURL : any;
  currentSongName:any;
  currentSongId:any;
  songPlayIcon:boolean = false;
  constructor( private Aroute: ActivatedRoute,private router: Router , private ArtistService: ArtistService , private SongsService : SongsService ,private AlbumService : AlbumService ) { }
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


  opensongsection(){
    this.showSongs = true;
    this.showAlbums = false;
    this.showArtists = false;
  }

  openalbumsection(){
    this.showSongs = false;
    this.showAlbums = true;
    this.showArtists =false;
  }

  openartistsection(){
    this.showSongs = false;
    this.showAlbums = false;
    this.showArtists = true;
  }

//  
openmusicmodel(songId , name){
  var audio= document.querySelector("audio");
  audio.pause();
  this.isPlaying= true;
  this.currentSongURL =`http://188.225.184.108:9091/api/songs/playsong/${songId}`;
  this.currentSongId = songId;
  this.currentSongName = name;
  this.mainicon = false;
  this.songPlayIcon = true;
}
ChangeIcons()
{
  this.mainicon = ! this.mainicon;
  this.songPlayIcon = ! this.songPlayIcon;
  if(this.songPlayIcon)
  {
    var audio= document.querySelector("audio");
    audio.play();
  }
  else{
    var audio= document.querySelector("audio");
    audio.pause();
  }
}

nextSong(){

var currentSongIndex = this.songsList.indexOf(this.songsList.find(item => item.id ===  this.currentSongId));
if(currentSongIndex == this.songsList.length-1)
{

}
else{
  var nextSongIndex = this.songsList.indexOf(this.songsList.find(item => item.id ===  this.currentSongId))+1;
  var nextSong =  this.songsList[nextSongIndex];
  this.openmusicmodel(nextSong.id , nextSong.title);
}

}
prevSong(){
var currentSongIndex = this.songsList.indexOf(this.songsList.find(item => item.id ===  this.currentSongId));
if(currentSongIndex == this.songsList.length - this.songsList.length -1)
{

}
else{
  var prevSongIndex = this.songsList.indexOf(this.songsList.find(item => item.id ===  this.currentSongId))-1;
var prevSong =  this.songsList[prevSongIndex];
this.openmusicmodel(prevSong.id , prevSong.title);
}
}
closeMedia() {
  this.isPlaying= false;
}
changeheart(){
  this.showanotherheart= true;
  this.hideheart= false;
}

//plyed icon
thisicon:boolean=false;
mainicon:boolean=true;
showsongalertlib:boolean=false;
showanothericon(){
  this.thisicon=true;
  this.mainicon=false;
}
showamainicon(){
  this.thisicon=false;
  this.mainicon=true;
}
showminiwindow(){
  this.isPlaying= false;
  this.showsongalertlib=true;
}
showwindowofplaying(){
  this.isPlaying= true;
  this.showsongalertlib=false;
}
showmodalhere(){
  this.isPlaying=true;
  this.hideshow=false;
}
showminiwindow2(){
  this.isPlaying=false;
  this.hideshow=true;
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



GetSongsOfAlbum(albumId)
{
//debugger;
  this.SongsService.GetSongsOfAlbum("0" , "10" , albumId).subscribe(res =>{
    this.songsList = res.result;
  
    
    });
    this.showArtists = false;
    this.showAlbums= false;
    this.showSongs = true;

}


  ngOnInit(): void {

    this.getMobileOperatingSystem();
    this.Aroute.queryParams.subscribe(params => {
     this.searchText=  params['searchText'];
     if(this.searchText != null) 
     {
      this.SearchArtist();
     }
     else{
      this.ArtistService.SearchArtist("0" , "10" ,"").subscribe(res =>{
        this.artistList = res.result;
      
        
        })
        this.SongsService.Search( "0", "10" , "").subscribe(res =>{
          this.songsList = res.result;
          console.log(this.songsList);
         });
         this.AlbumService.Search("0" , "10" , "")
    .subscribe(res =>{
      this.albumList = res.result;
     });
     }
    }); 


  
 
  
    $(document).ready(function() {

      $('ul li a').click(function(){
        $('.song').removeClass('song');
        $(this).addClass("song");

        //audio here
        var playing = false;
       
            

    });
    });
  }
  SearchArtist(){
    this.ArtistService.SearchAlphapet("0" , "10" , this.searchText).subscribe(res =>{
    this.artistList = res.result;
    this.SearchSongs("0", "10" ,this.artistList[0].id );
    
    })

  }
  SearchSongs(offset , limit , artistId){
    this.SongsService.GetSongsOfArtist( offset, limit , artistId).subscribe(res =>{
     this.songsList = res.result;
    })
    this.SearchAlbums(offset , limit , artistId);
  }
  SearchAlbums(offset , limit , artistId)
  {
    this.AlbumService.GetAlbumsOfArtist(offset , limit , artistId)
    .subscribe(res =>{
      this.albumList = res.result;
     });
     

}
DownloadAudio(e ,song)
{
  e.preventDefault();
  var songURL = `http://188.225.184.108:9091/api/songs/playsong/${song}`
  var a = $("<a>")
    .attr("href", songURL)
    .attr("download", "audio.mp3")
    .appendTo("body");

a[0].click();

a.remove();
}




}

