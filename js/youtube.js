// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {  // 정해져있는 함수명으로 바뀌면 안된다.
  new YT.Player('player', { // 'player'를 id값으로 갖는 요소를 불러온다.
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 ID
    playerVars: {
      autoplay: true,   // 자동 재생 유무
      loop: true,       // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 ID 리스트
    },
    events: {
      // 동영상 플레이어가 준비될경우 실행하는 함수
      onReady: function(event) {
        event.target.mute() // 음소거, event.target : 실행되고 있는 동영상
      }
    }
  });
}