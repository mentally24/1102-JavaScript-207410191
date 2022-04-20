const links = document.querySelectorAll('#heading a');
console.log('links', links);

const tku60Text = document.querySelector('#main ul');
console.log('tku60Text', tku60Text);

const showImage = document.querySelector('.show-images');

const tkuImgs = document.querySelector('.tku-images');
console.log('tkuImgs', tkuImgs);

const iframeContainer = document.querySelector('.iframe-container');
const heading = document.querySelector('#heading');
const main = document.querySelector('#main');
const section = document.querySelector('#section');
const Footer = document.querySelector('#Footer');

const changeColor = () => {
  heading.style.backgroundColor = '#9AADBF';
  main.style.backgroundColor = '#9A0000';
  section.style.backgroundColor = '#9A0DBF';
  Footer.style.backgroundColor = '#9AAD0F';
};
const changeVideo = (index) => {
  switch (index) {
    case 1:
      iframeContainer.innerHTML = ` 
      <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/RechrtUxfQc"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>`;
      break;
    case 2:
      iframeContainer.innerHTML = `
            <iframe width="560" height="315" src="https://www.youtube.com/embed/MRWX49Furew" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 3:
      iframeContainer.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/METhdbL_iMw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 4:
      iframeContainer.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/ZyDbq-lEKTo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
    case 5:
      iframeContainer.innerHTML = `
      <iframe width="560" height="315" src="https://www.youtube.com/embed/NlsrJbVvjaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      break;
  }
};

const showAllImg = () => {
  showImage.innerHTML = `
                <img src="./images/TKU1.png" width="16%" alt="" />
                <img src="./images/TKU2.png" width="16%" alt="" />
                <img src="./images/TKU3.png" width="16%" alt="" />
                <img src="./images/TKU4.png" width="16%" alt="" />
                <img src="./images/TKU5.png" width="16%" alt="" />`;

  tkuImgs.classList.toggle('invisible');
};

const addtku60Text = () => {
  tku60Text.innerHTML = `
            <li><a onclick="changeVideo(1)">淡江大戲 1</a></li>
            <li><a onclick="changeVideo(2)">淡江大戲 2</a></li>
            <li><a onclick="changeVideo(3)">淡江大戲 3</a></li>
            <li><a onclick="changeVideo(4)">淡江大戲 4</a></li>
            <li><a onclick="changeVideo(5)">淡江大戲 5</a></li>
    
    `;
};

links[0].addEventListener('click', changeColor);
links[1].addEventListener('click', showAllImg);
links[2].addEventListener('click', addtku60Text);
