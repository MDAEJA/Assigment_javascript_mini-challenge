const darkMode = document.querySelector(".light-dark-mode");
const img = darkMode.querySelector('img')
const mainPage = document.querySelector(".main-page");
// const project_div = document.querySelector(".main-project-div");

let darkModeStatus = false;
const project_details = [
  {
      projectName: 'Counter',
      link : '../mini-challenges/Counter/index.html',
      studentName: 'Student 1',
  },
  {
      projectName: 'File Uploader',
      link : '../mini-challenges/FileUploader/index.html',
      studentName: 'Student 2',
  },
  {
      projectName: 'Rating',
      link : '../mini-challenges/Rating/index.html',
      studentName: 'Student 3',
  },
  {
    projectName: 'Roll Dice',
    link : '../mini-challenges/Roll_Dice/index.html',
    studentName: 'Student 4',
},
  {
    projectName: 'Multi-Typing',
    link : '../mini-challenges/Multi-Typing/index.html',
    studentName: 'Student 5',
  },
  {
    projectName: 'Word counter',
    link : '../mini-challenges/Word-Counter/index.html',
    studentName: 'Student 6',
  },
  {
    projectName: 'Dice Game',
    link : '../mini-challenges/Dice-Game/index.html',
    studentName: 'Student 7',
  },
  {
    projectName: 'Finance Tracker',
    link : '../mini-challenges/Finance-Tracker/index.html',
    studentName: 'Student 8',
  },
  {
    projectName: 'String Transform',
    link : '../mini-challenges/String-Transform/index.html',
    studentName: 'Student 9',
  },
  {
    projectName: 'Password Checking',
    link : '../mini-challenges/Password-Generate/index.html',
    studentName: 'Student 10',
  }
];


darkMode.addEventListener ('click',()=>{
    darkModeStatus = !darkModeStatus;
    if(darkModeStatus){
        img.src = "https://cdn-icons-png.flaticon.com/128/10931/10931033.png"
      mainPage.style.backgroundColor = "black",
      mainPage.style.color = 'whitesmoke'
    //   mainPage.style.display = "no hidden"
    }
    else{
        img.src = "https://cdn-icons-png.flaticon.com/128/566/566410.png"
     mainPage.style.backgroundColor = "white",
     mainPage.style.color = 'black'
    }
    console.log(darkModeStatus)
});



const projectContainer = document.querySelector('.main-project-div');

project_details.map((ele) => {
    const projectCard = document.createElement('div');
    projectCard.classList.add('projectContainer');

    projectCard.innerHTML = `
    <a href= ${ele.link} style="text-decoration: none;">
           <div class="project-div">
                     <h1 style="text-decoration: none;">${ele.projectName}</h1>
                     <div style="display: flex;align-items: center;gap: 20px;text-decoration: none; ">
                        <img src="https://cdn-icons-png.flaticon.com/128/4185/4185769.png" width="30px" alt="">
                        <h3>${ele.studentName}</h3>
                     </div>
                </div> 
                </a>
    `;

    projectContainer.appendChild(projectCard);
});

