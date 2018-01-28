@font-face {
  font-family: "RobotoThin";
  src: url("../font/Roboto-Thin.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
@font-face {
  font-family: "RobotoLight";
  src: url("../font/Roboto-Light.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
@font-face {
  font-family: "RobotoRegular";
  src: url("../font/Roboto-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
@font-face {
  font-family: "RobotoMedium";
  src: url("../font/Roboto-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
@font-face {
  font-family: "RobotoBold";
  src: url("../font/Roboto-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: normal; }
@font-face {
  font-family: 'fontello';
  src: url("../font/fontello.ttf?13382757") format("truetype");
  font-weight: normal;
  font-style: normal; }
@-webkit-keyframes fade {
  from {
    opacity: .3; }
  to {
    opacity: 1; } }
@keyframes fade {
  from {
    opacity: .3; }
  to {
    opacity: 1; } }
ul,
body {
  margin: 0;
  padding: 0; }

* {
  font-family: "RobotoRegular", serif;
  box-sizing: border-box; }

.b-main-menu {
  font-size: 0;
  list-style: none;
  text-align: center;
  padding: 25px 0; }

.b-main-menu__item {
  display: inline-block;
  font-size: 18px;
  padding: 5px 10px;
  position: relative;
  border-right: 1px solid #b8b8b8; }

.b-main-menu__item_no-border {
  border-right: none; }

.b-main-menu__link,
.b-dropdown-menu__link {
  text-decoration: none;
  color: #000;
  font-family: "RobotoLight", serif; }

.b-main-menu__link {
  padding: 15px 0;
  border-bottom: 4px solid #fff;
  transition: .3s ease; }
  .b-main-menu__link:hover {
    border-bottom: 4px solid #e0e0e0;
    padding: 4px 0; }

.b-dropdown-menu {
  display: none;
  list-style: none;
  position: absolute;
  left: 0;
  top: 30px;
  text-align: left; }
  .b-dropdown-menu.b-dropdown-menu_visible {
    display: block;
    z-index: 1;
    background-color: white; }

.b-dropdown-menu__logo {
  width: 100px;
  padding-bottom: 25px; }

.b-dropdown-menu__item {
  padding: 5px; }
  .b-dropdown-menu__item:hover {
    background-color: #b8b8b8; }

.b-slider-container {
  position: relative;
  max-width: 960px;
  margin: 0 auto; }

.b-slider-container__item_fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s; }

.b-slider-container__image {
  border-radius: 5px;
  max-width: 100%; }

.b-slider-container__prev,
.b-slider-container__next {
  position: absolute;
  padding: 10px 5px;
  cursor: pointer;
  top: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  color: #e0e0e0;
  transition: color .2s ease; }
  .b-slider-container__prev:hover,
  .b-slider-container__next:hover {
    color: #b8b8b8; }

.b-slider-container__prev {
  left: 0;
  border-radius: 0 3px 3px 0; }

.b-slider-container__next {
  right: 0;
  border-radius: 3px 0 0 3px; }

.b-about-us {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 10px; }

.b-about-us__title,
.b-our-clients__title,
.b-test-block__title {
  display: inline-block;
  font-family: "RobotoThin", serif;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0 25px 0;
  border: 3px solid #e9e9e9;
  border-right: none;
  border-left: none; }

.b-about-us__text {
  font-size: 18px;
  font-family: "RobotoLight", serif;
  line-height: 34px;
  padding-top: 30px; }

.b-test-block {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
  padding: 30px 0; }

.b-test-themes {
  padding-top: 30px; }

.b-test-themes__item {
  border: 1px solid #ededed;
  border-radius: 3px;
  cursor: pointer;
  display: inline-block;
  padding: 10px 20px;
  transition: background-color .2s ease-in; }
  .b-test-themes__item:hover {
    background-color: #ededed; }

.b-test-themes__item_active {
  background-color: #ededed; }

.b-test__start-btn,
.b-test-block__restart-btn {
  background-color: #88c441;
  border: 3px solid #48af4b;
  color: white;
  font-size: 26px;
  min-width: 100px;
  min-height: 100px;
  border-radius: 50px;
  padding: 5px 10px;
  transition: background-color .3s linear;
  outline: none; }
  .b-test__start-btn:hover,
  .b-test-block__restart-btn:hover {
    background-color: #48af4b; }
  .b-test__start-btn:active,
  .b-test-block__restart-btn:active {
    background-color: #05a30a;
    border-color: #05a30a;
    transition: none; }

.b-test-block__btn {
  background-color: transparent;
  border: 1px solid #ededed;
  border-radius: 2px;
  font-size: 20px;
  padding: 5px 20px;
  transition: background-color .3s linear;
  outline: none; }
  .b-test-block__btn:hover {
    background-color: #ededed; }

.b-question {
  font-size: 34px; }

.b-test-block__btn_hidden,
.b-test-block__restart-btn_hidden,
.b-test-block__time_hidden {
  display: none; }

.b-our-clients {
  max-width: 960px;
  margin: 0 auto;
  text-transform: uppercase;
  text-align: center; }

.b-our-clients-items {
  display: flex;
  justify-content: space-around;
  padding-top: 30px; }

.b-our-clients-item {
  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);
  display: inline-block;
  text-align: center;
  padding: 15px; }

.b-our-clients-item_hidden {
  display: none; }

.b-our-clients-item__image {
  border-radius: 150px;
  max-width: 230px;
  max-height: 230px;
  margin: 0 auto;
  overflow: hidden; }
  .b-our-clients-item__image img {
    min-width: 100%; }

.b-pagination {
  text-align: center; }

.b-pagination__list {
  padding: 20px 0;
  list-style: none; }

.b-pagination__item {
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  display: inline-block;
  padding: 5px 0;
  margin: 0 5px;
  min-width: 29px;
  transition: background-color .2s ease-in; }
  .b-pagination__item:hover {
    background-color: #e9e9e9; }

.b-pagination__item_active {
  background-color: #e9e9e9; }

/* -------footer------- */
.b-map {
  height: 400px;
  margin-top: 20px;
  position: relative; }
  .b-map #map {
    height: 400px; }

.b-contacts {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  color: #ffffff;
  padding: 15px;
  position: absolute;
  max-width: 960px;
  top: 124px;
  left: 24%; }
  .b-contacts div {
    padding: 5px 0; }

/*# sourceMappingURL=main.js.map */
