
window.onload=function(){
    var audio1 = document.getElementById('audio1');
    var input1 = document.getElementById('input');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    input1.value=1;
    //alert(audio1.duration);//��ʱ��
    //audio1.defaultPlaybackRate=0.5;//Ĭ�ϲ����ٶ�
    //audio1.load();//���¼���
    //alert(audio1.seekable.end(0));//�Ѿ����صĳ���
    //alert(audio1.currentTime);//��ǰ����ʱ��
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
