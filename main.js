
window.onload=function(){
    var audio1 = document.getElementById('audio1');
    var input1 = document.getElementById('input');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    input1.value=1;
    //alert(audio1.duration);//总时长
    //audio1.defaultPlaybackRate=0.5;//默认播放速度
    //audio1.load();//重新加载
    //alert(audio1.seekable.end(0));//已经加载的长度
    //alert(audio1.currentTime);//当前播放时间
    var persent =0;
    setInterval(function(){
        if(audio1.currentTime<audio1.duration){
            persent=(audio1.currentTime/audio1.duration);
            if(persent>0.995)
                persent=1;
            input1.value=persent;
            if(persent<=0.50){
                right.style.display="none";
                left.style.transform="rotate("+persent*360+"deg)";
            }
            else{
                left.style.transform="rotate(180deg)";
                right.style.display="block";
                right.style.transform="rotate("+(persent-0.5)*360+"deg)";
            }

        }
    },30);

}
