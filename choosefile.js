let picArr = []
let currentIndex = 0

const profilePicture = document.getElementById("image");

function chooseFile(ev) {
  let file = ev.target.files[0]
  let myReader = new FileReader()

    if (file) {
      myReader.readAsDataURL(file)
    }

    myReader.addEventListener('load', (ev)=>{
      image.src = ev.target.result
      picArr.push(ev.target.result)
    })
    
    flexDiv.style.display = 'flex'

    if (picArr.length > 0) {
      arrow.style.visibility = 'visible'
      arrows.style.visibility = 'visible'
    } 
}

function display() {
  profilePicture.src = picArr[currentIndex];
}

// display();

function next() {
  currentIndex++;
  if (currentIndex > picArr.length - 1) {
    currentIndex = 0;
  }
  display();
}

function prev() {
  if (currentIndex === 0) {
    currentIndex = picArr.length - 1;
  } else if (currentIndex > 0) {
    currentIndex--;
  }
  display();
}

