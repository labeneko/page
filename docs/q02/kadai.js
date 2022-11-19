'use strict';

function message() {
    document.getElementById("view_time").innerHTML = getNow();
  }
  
  function getNow() {
      var now = new Date();
      var year = now.getFullYear();
      var mon = now.getMonth()+1; //１を足すこと
      var day = now.getDate();
      var hour = now.getHours();
      var min = now.getMinutes();
      var sec = now.getSeconds();

      mon = ( '00' + mon ).slice( -2 );
      day = ( '00' + day ).slice( -2 );
      hour = ( '00' + hour ).slice( -2 );
      min = ( '00' + min ).slice( -2 );
      sec = ( '00' + sec ).slice( -2 );
  
      //出力用
      var s = year + "/" + mon + "/" + day + "/" + hour + ":" + min + ":" + sec; 
      return s;
  }