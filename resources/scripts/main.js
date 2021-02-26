window.onload = function () {
   localStorage.getItem(document.getElementById('nametxt').value)
   let name = localStorage.getItem('name')
   let dev = localStorage.getItem('dev')
   let savegame = localStorage.getItem('savegame')
   dev = false
   console.log("This is an HTML game by:",'Team L\u00B2',"with assistance from renox.")
   console.log("If buttons do not appear run 'clearStorage();' in the console without the quotes.")
   console.log('Name:', name, 'Dev mode:', dev)
   if (name == null || name == '') {
      document.getElementById('block1').style.display = 'none'
      document.getElementById('block1').disabled = true
      document.getElementById('block2').style.display = 'none'
      document.getElementById('block2').disabled = true
      document.getElementById('s1').style.display = 'inline-block'
   }
   if (localStorage.getItem('name') != null) {
      document.getElementById('s1').style.display = 'none'
   }
}
//disable right click
//document.addEventListener('contextmenu', event => event.preventDefault());
document.getElementById('wname').textContent = 'AMNESIA'
var snd1 = new Audio('resources/audio/mainambient.mp3')
var snd2 = new Audio('resources/audio/NGGUU.mp3')
var snd3 = new Audio('resources/audio/kekw.mp3')
var snd4 = new Audio('resources/audio/FDB.mp3')
function bobux () {
   snd2.play()
   localStorage.removeItem('name')
}
function FDB () {
   snd4.play()
   snd4.volume = 1
   localStorage.removeItem('name')
}
function kekw () {
   snd3.play()
   localStorage.removeItem('name')
   setTimeout(
      function () {
         window.location.reload()
      }, 8000)
}
function fadein1 () {
   setTimeout(
      function () {
         document.getElementById('mainG1').style.display = 'block'
      }, 1000);
}
function next () {
   document.getElementById('wrn').style.display = 'none';
   document.getElementById('scrn1').style.display = 'block';
   snd1.play();
   snd1.volume = 0.25;
   snd1.loop = true;
   var targetelement = document.documentElement;
   if (targetelement.requestFullscreen) {
      targetelement.requestFullscreen()
   }
   if (targetelement.mozRequestFullScreen) {
      targetelement.mozRequestFullScreen()
   }
   if (targetelement.msRequestFullscreen) {
      targetelement.msRequestFullscreen()
   }
}
function next1 () {
   document.getElementById('scrn1').style.display = 'none'
   document.getElementById('scrn2').style.display = 'block'
}
var textInputElement = document.getElementById('nametxt')
nameDivElement = document.getElementById('namediv')
function entername () {
   setTimeout(
      function () {
         localStorage.setItem('name', document.getElementById('nametxt').value)
         var text = textInputElement.value
         nameDivElement.innerHTML = text
         document.getElementById('namediv1').innerHTML = text
         if (text == 'kekw') {
            kekw()
         }
         if (text == 'dookieballs') {
            FDB()
         }
         if (text == 'LttntLark' || text == 'TeamL') {
            console.log('DEV MODE ON...clear storage to turn off')
            // dev mode code here LULw
            dev = true
         }
         if (text == '') {
            localStorage.removeItem('name')
            window.location.reload()
         }
         if (text == 'bobux') {
            bobux()
            setTimeout(
               function () {
                  window.location.reload()
               }, 10065)
         }
         if (text != 'bobux' | 'kekw') {
            document.getElementById('sub').style.display = 'block'
            document.getElementById('nameshow').style.display = 'block'
            document.getElementById('nametxt').disabled = true
            document.getElementById('entrnme').disabled = true
            document.getElementById('nametxt').style.display = 'none'
            document.getElementById('entrnme').style.display = 'none'
         }
      }, 1500)
}
function startGame () {
   snd1.pause()
   document.getElementById('sub').style.display = 'none'
   document.getElementById('scrn2').style.display = 'none'
   fadein1()
}
function startGametrue () {
   snd1.pause()
   document.getElementById('scrn1').style.display = 'none'
   document.getElementById('wrn').style.display = 'none'
   document.getElementById('mainG1').style.display = 'none'
   fadein1()
}
function Continue () {
   document.getElementById('namediv1').textContent = localStorage.getItem('name')
   startGametrue()
}
function reset () {
   setTimeout(
      function () {
         document.getElementById('s1').style.display = 'inline-block'
         localStorage.removeItem('name')
         localStorage.removeItem('savegame')
         document.getElementById('block1').style.display = 'none'
         document.getElementById('block1').disabled = true
         document.getElementById('block2').style.display = 'none'
         document.getElementById('block2').disabled = true
      }, 10)
}

function back () {
   window.location.reload()
}
function showNext1 () {
   setTimeout(
      function () {
         document.getElementById('sc1').style.display = 'none'
         document.getElementById('sc2').style.display = 'block'
      }, 1000)
}
function showNext2 () {
   setTimeout(
      function () {
         document.getElementById('sc2').style.display = 'none'
         document.getElementById('sc3').style.display = 'block'
      }, 1000)
}
function showNext3 () {
   setTimeout(
      function () {
         document.getElementById('sc3').style.display = 'none'
      }, 2000)
   startgamefr()
}

// game
function clearStorage () {
   localStorage.removeItem('name')
   localStorage.removeItem('dev')
   window.location.reload()
}
//text between level 1 and 2
function showNext4 () {
   setTimeout(
      function () {
         document.getElementById('sub1').style.display = 'none'
      }, 2000)
   lev2();
}
//hides text between menu and level 1, starts level 1
function startgamefr () {
   setTimeout(
      function () {
         document.getElementById('game').style.display = 'block'
         document.getElementById('mainG1').style.display = 'none'
      }, 2000)
}
//"a game by team L2"
function cred1(){
  document.getElementById('intro').currentTime = 0;
  document.getElementById('intro').play();
   setTimeout(
      function () {
         document.getElementById('C1').style.display = 'block'
      }, 2000)

}
//level 2
function lev2(){
document.getElementById('C1').style.display = 'none';
document.getElementById('Lev2').style.display = 'block';
}
