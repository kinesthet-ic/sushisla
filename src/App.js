import React from 'react';
import './App.css';
import InlineSVG from 'svg-inline-react';
import InstagramImg from './img/instagram.svg';
import LineImg from './img/line.svg';
import TwitterImg from './img/twitter.svg';
import YoutubeImg from './img/youtube.svg';
import TikTokImg from './img/icons8-tiktok.svg';
import KakaoImg from './img/kakao-talk.svg';
import PhoneImg from './img/phone.svg';

const InstagramSvg = `
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g style="fill: hsl(0, 0%, 0%);">
		<path d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
			C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
			h192c61.76,0,112,50.24,112,112V352z"/>
	</g>
</g>
<g>
	<g style="fill: hsl(0, 0%, 0%);">
		<path d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
			c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
	</g>
</g>
<g>
	<g style="fill: hsl(0, 0%, 0%);">
		<circle cx="393.6" cy="118.4" r="17.056"/>
	</g>
</g>
</svg>
`;


function App() {
  return (
    <div class="PageBody">
      <a href="https://www.instagram.com/" class="NeuBtn instagram" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={InstagramImg} alt="" />
          {/* <InlineSVG class="icon-img" src={InstagramSvg} /> */}
        </div>
        <p class="title">Instagram</p>
        <p class="username">@sample</p>
      </a>
      <a href="https://twitter.com/home" class="NeuBtn twitter" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={TwitterImg} alt="" />
        </div>
        <p class="title">Twitter</p>
        <p class="username">@sample</p>
      </a>
      <a class="NeuBtn line" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={LineImg} alt="" />
        </div>
        <p class="title">LINE</p>
        <p class="username">sample</p>
      </a>
      <a class="NeuBtn youtube" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={YoutubeImg} alt="" />
        </div>
        <p class="title">Youtube</p>
        <p class="username">sample Channel</p>
      </a>
      <a class="NeuBtn tiktok" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={TikTokImg} alt="" />
        </div>
        <p class="title">TikTok</p>
        <p class="username">@sample</p>
      </a>
      <a class="NeuBtn kakaotalk" target="_blank">
        <object><a class="dot-leaders">···</a></object>
        <div class="img-wrap">
          <img src={KakaoImg} alt="" />
        </div>
        <p class="title">kakaotalk</p>
        <p class="username">sample</p>
      </a>
      <a class="NeuBtn phone" target="_blank">
        <object><object><a class="dot-leaders">···</a></object></object>
        <div class="img-wrap">
          <img src={PhoneImg} alt="" />
        </div>
        <p class="title">Phone</p>
        <p class="username">012-3456-7890</p>
      </a>
    </div >
  );
}

export default App;
