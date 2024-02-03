  let timer;
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

window.addEventListener('load', () => {
    let mediaRecorder;
    let audioChunks = [];
    let isRecording = false;

    const micButton = document.getElementById('startRecording');
    const saveBtn=document.getElementById('stopRecording');

    micButton.addEventListener('click', () => {
        if (isRecording) {
            stopRecording();

        } else {
            startRecording();
        }
    });

    saveBtn.addEventListener("click",saveAudio);

    async function startRecording() {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.ondataavailable = event => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                }
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                // Do something with the audioBlob if needed (e.g., send to server)
            };

            mediaRecorder.start();
            isRecording = true;
            console.log('Recording started...');
            startTimer();
            
            
        } catch (error) {
            console.error('Error accessing microphone:', error);
        }
    }

    function stopRecording() {
        mediaRecorder.stop();
        isRecording = false;
        stopTimer() ;
        
        console.log('Recording stopped...');
        audioChunks = []; 
    }


    function saveAudio(){

        resetTimer();
        
    }



});





// Toggle Button
let groupitem=document.querySelector(".groupitem");
let groupinner=document.querySelector(".group-inner")

function Animated(){
    groupitem.classList.toggle("active");
    groupinner.classList.toggle("unactive")

}


// Timer
const startRecordingButton = document.querySelector('#startRecording');

function startTimer() {
    if (!timer) {
      timer = setInterval(updateTimer, 1000);
    }
  }
  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }

  function updateTimer() {
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('timer').innerText = formattedTime;
  }

  function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    const formattedTime = pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
    document.getElementById('timer').innerText = formattedTime;
  }

  function pad(value) {
    return value < 10 ? '0' + value : value;
  }

  function resetTimer() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
  }

  

  
// play-pause Buttons
  const btn=document.getElementById('responsive');
  let check=false;

  btn.addEventListener("click",()=>{
    if(check){
        btn.src="./public/playBtn.png";
        check=false;

    }
    else{
        btn.src="./public/pause@2x.png";
        check=true;
    }
  })



  //Volume Buttons
  const volbtn=document.getElementById('volume');
  let volcheck=false;

  volbtn.addEventListener("click",()=>{
    if(volcheck){
        volbtn.src="./public/vuesaxboldvolumelow@2x.png";
        volcheck=false;

    }
    else{
        volbtn.src="./public/volumeslash@2x.png";
        volcheck=true;
    }
  })
  
    






