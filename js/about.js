const mediaId=localStorage.getItem("mediaId"),mediaType=localStorage.getItem("mediaType");console.log(mediaType),console.log(mediaId);const popupBackdrop=document.querySelector(".modal__backdrop"),popupDetails=document.querySelector(".modal__details"),apiConfig={baseUrl:"https://api.themoviedb.org/3",backdropUrl:"https://image.tmdb.org/t/p/original/",token:"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYWZhYWIyYWQzNDhkNDU2OGI3MzFjYmIwNjlhMzJiYiIsInN1YiI6IjY1ODZiZmY4ZmFkOGU5NWUxZjhkNTQ2ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KVzkPDoyZhdHWILtEPfa04zoA6hbU6M9OxE3w_VO5IY"},options={method:"GET",headers:{accept:"application/json",Authorization:`Bearer ${apiConfig.token}`}};function backToHomePage(){window.location.href="index.html"}function getPosterUrl(e){return null===e?"img/default-poster.png":apiConfig.backdropUrl+e}function addMovies(e,i,t){e.results.forEach(e=>{let s="";for(let o=0;o<5;o++)o<Math.round(e.vote_average)/2?s+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 17" fill="none">                <path d="M9 0.5L12.1158 5.2114L17.5595 6.71885L14.0416 11.1381L14.2901 16.7812L9 14.801L3.70993 16.7812L3.95845 11.1381L0.440492 6.71885L5.88415 5.2114L9 0.5Z" fill="#E60000" />                </svg>':s+='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 17" fill="none">                <path d="M9 0.5L12.1158 5.2114L17.5595 6.71885L14.0416 11.1381L14.2901 16.7812L9 14.801L3.70993 16.7812L3.95845 11.1381L0.440492 6.71885L5.88415 5.2114L9 0.5Z" fill="#999999"/>                </svg>';let a=document.createElement("div"),r="";a.classList.add("media__card"),a.dataset.id=e.id,r="movie"==t?e.original_title:"tv"==t?e.original_name:null,null!=e.poster_path&&(a.innerHTML=`
            <div class="image-container">
                <img class="media__img" src="${apiConfig.backdropUrl+e.poster_path}" loading="lazy" alt="media-poster">
                <div class="media__img-overlay"></div>
            </div>
            <svg class='media__link' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 0.25L19 0.25C19.1989 0.25 19.3897 0.329018 19.5303 0.46967C19.671 0.610322 19.75 0.801088 19.75 1V6.25C19.75 6.66421 19.4142 7 19 7C18.5858 7 18.25 6.66421 18.25 6.25V2.81066L6.03033 15.0303C5.73744 15.3232 5.26256 15.3232 4.96967 15.0303C4.67678 14.7374 4.67678 14.2626 4.96967 13.9697L17.1893 1.75L13.75 1.75C13.3358 1.75 13 1.41421 13 1C13 0.585787 13.3358 0.25 13.75 0.25ZM3.25 4.75C2.42157 4.75 1.75 5.42157 1.75 6.25V16.75C1.75 17.5784 2.42157 18.25 3.25 18.25H13.75C14.5784 18.25 15.25 17.5784 15.25 16.75V8.5C15.25 8.08579 15.5858 7.75 16 7.75C16.4142 7.75 16.75 8.08579 16.75 8.5V16.75C16.75 18.4069 15.4069 19.75 13.75 19.75H3.25C1.59315 19.75 0.25 18.4069 0.25 16.75V6.25C0.25 4.59315 1.59315 3.25 3.25 3.25H11.5C11.9142 3.25 12.25 3.58579 12.25 4C12.25 4.41421 11.9142 4.75 11.5 4.75H3.25Z" fill="white"/>
            </svg>
            <p class='media__rating'>${s}</p>
            <p class="media__name">${r}</p>
            `,i.appendChild(a)),"movie"==t?a.dataset.type="movie":"tv"==t&&(a.dataset.type="tv"),a.addEventListener("click",()=>{let e=a.getAttribute("data-id"),i=a.getAttribute("data-type");window.location.href="about.html",localStorage.setItem("mediaId",e),localStorage.setItem("mediaType",i)})})}function initSlickSlider(e){$(e).hasClass("slick-initialized")||$(e).slick({slidesToScroll:5,speed:500,slidesToShow:8,infinite:!1,nextArrow:'<button type="button" class="cast__arrow cast__arrow-next">                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5" stroke="#999999" stroke- width="1.5" stroke - linecap="round" stroke - linejoin="round" /></svg>                         </button> ',prevArrow:'<button type="button" class="cast__arrow cast__arrow-prev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">                 <path d="M13.25 7L0.75 7M0.75 7L6.375 12.625M0.75 7L6.375 1.375" stroke="#999999" stroke- width="1.5" stroke - linecap="round" stroke - linejoin="round" />             </svg></button > ',responsive:[{breakpoint:1024,settings:{slidesToShow:6,slidesToScroll:2,arrows:!0}},{breakpoint:768,settings:{slidesToShow:5,slidesToScroll:2,arrows:!0}},{breakpoint:480,settings:{slidesToShow:3,slidesToScroll:1,arrows:!0}},{breakpoint:425,settings:{slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:310,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}},]})}function initSlickSliderReviews(){$(".reviews__container").hasClass("slick-initialized")||$(".reviews__container").slick({slidesToScroll:1,speed:500,slidesToShow:2,infinite:!1,nextArrow:'<button type="button" class="cast__arrow cast__arrow-next">                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.25 0.75L16.5 7M16.5 7L10.25 13.25M16.5 7H1.5" stroke="#999999" stroke- width="1.5" stroke - linecap="round" stroke - linejoin="round" /></svg>                         </button> ',prevArrow:'<button type="button" class="cast__arrow cast__arrow-prev"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">                 <path d="M13.25 7L0.75 7M0.75 7L6.375 12.625M0.75 7L6.375 1.375" stroke="#999999" stroke- width="1.5" stroke - linecap="round" stroke - linejoin="round" />             </svg></button > ',responsive:[{breakpoint:570,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}},{breakpoint:425,settings:{slidesToShow:1,slidesToScroll:1,arrows:!0}},]})}async function showAboutMedia(e,i){try{let t=await fetch(`https://api.themoviedb.org/3/${i}/${e}?language=en-US`,options),s=await t.json();console.log(s);let o=await getMediaBackground(e,i),a="movie"==i?s.original_title:"tv"==i?s.original_name:null;popupBackdrop.style.backgroundImage=`url(${o})`,popupBackdrop.innerHTML+=`
                    <h2 class="modal__title">${a}</h2>
                    <p class="modal__description">${s.overview}</p>
                    <a href="#media-trailer" class="modal__play-btn">
                        <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M0.5 2.6527C0.5 1.22656 2.029 0.322511 3.2786 1.00979L14.8192 7.35711C16.1144 8.06947 16.1144 9.93056 14.8192 10.6429L3.2786 16.9902C2.029 17.6775 0.5 16.7735 0.5 15.3473V2.6527Z"
                                fill="white" />
                        </svg>
                        Watch trailer
                    </a>`;let r=s.genres.map(e=>`<div class="genres__item info__item-bg">${e.name}</div>`).join(""),_=s.spoken_languages.map(e=>`<div class="languages__item info__item-bg">${e.english_name}</div>`).join(""),n=await getMediaCredits(e,i,"cast"),l=await getMediaCredits(e,i,"crew");console.log(l);let d="img/default-poster.png",c="img/default-poster.png",p="unknown",w="unknown";l&&(l.director&&(d=getPosterUrl(l.director.profile_path),p=l.director.name),l.writer&&(c=getPosterUrl(l.writer.profile_path),w=l.writer.name));let g=await getMediaReviews(e,i),h="";g.forEach(e=>{h+=`
            <div class="reviews__item">
                <span class="reviews__author">${e.author} say:</span>
                <p class="reviews__content">${e.content}</p >
            </div>`});let v=await getMediaTrailer(e,i);getMediaRecomendations(e,i),popupDetails.innerHTML+=`
                <div class="details__container" >
                        <div class="details__item">
                            <div class="details__description details__background description">
                                <span class="description__name details__name">Description</span>
                                <p class="description__text">${s.overview}</p>
                            </div>
                            <div class="details__cast details__background cast">
                                <span class="details__name cast__name">Cast</span>
                                <div class="cast__characters characters-slider">
                                    ${n}
                                    <div class="slider-scroll"></div>
                                </div>
                            </div>
                            <div class="details__reviews details__background reviews reviews-slider">
                                <div class="details__name">Reviews</div>
                                    <div class="reviews__container">
                                        ${h}
                                    </div>
                                </div>
                            </div>
                        <div class="details__info details__background info">

                            <div class="details__name relised-year">

                                <span class="info__suptitle">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.75 3.5V5.75M17.25 3.5V5.75M3 19.25V8C3 6.75736 4.00736 5.75 5.25 5.75H18.75C19.9926 5.75 21 6.75736 21 8V19.25M3 19.25C3 20.4926 4.00736 21.5 5.25 21.5H18.75C19.9926 21.5 21 20.4926 21 19.25M3 19.25V11.75C3 10.5074 4.00736 9.5 5.25 9.5H18.75C19.9926 9.5 21 10.5074 21 11.75V19.25"
                                            stroke="#999999" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Released Year
                                </span>

                                <p class="info__text">${s.release_date}</p>
                            </div>

                            <div class="details__name languages">

                                <span class="info__suptitle">
                                    <svg width="24" height="25" viewBox="0 0 24 25" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.5 21.5L15.75 10.25L21 21.5M12 18.5H19.5M3 6.12136C4.96557 5.87626 6.96804 5.75 9 5.75M9 5.75C10.1208 5.75 11.2326 5.78841 12.3343 5.864M9 5.75V3.5M12.3343 5.864C11.1763 11.1578 7.68868 15.5801 3 18.0023M12.3343 5.864C13.2298 5.92545 14.1186 6.01146 15 6.12136M10.4113 14.6162C8.78554 12.9619 7.47704 10.9949 6.58432 8.81366"
                                            stroke="#999999" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                    Available Languages
                                </span>

                                <div class="languages__container info__item-container">
                                    ${_}
                                </div>
                            </div>

                            <div class="details__name genres">
                                <span class="info__suptitle">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M3.125 5C3.125 3.96447 3.96447 3.125 5 3.125H6.875C7.91053 3.125 8.75 3.96447 8.75 5V6.875C8.75 7.91053 7.91053 8.75 6.875 8.75H5C3.96447 8.75 3.125 7.91053 3.125 6.875V5Z"
                                            stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M3.125 13.125C3.125 12.0895 3.96447 11.25 5 11.25H6.875C7.91053 11.25 8.75 12.0895 8.75 13.125V15C8.75 16.0355 7.91053 16.875 6.875 16.875H5C3.96447 16.875 3.125 16.0355 3.125 15V13.125Z"
                                            stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M11.25 5C11.25 3.96447 12.0895 3.125 13.125 3.125H15C16.0355 3.125 16.875 3.96447 16.875 5V6.875C16.875 7.91053 16.0355 8.75 15 8.75H13.125C12.0895 8.75 11.25 7.91053 11.25 6.875V5Z"
                                            stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                        <path
                                            d="M11.25 13.125C11.25 12.0895 12.0895 11.25 13.125 11.25H15C16.0355 11.25 16.875 12.0895 16.875 13.125V15C16.875 16.0355 16.0355 16.875 15 16.875H13.125C12.0895 16.875 11.25 16.0355 11.25 15V13.125Z"
                                            stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    Genres
                                </span>

                                <div class="genres__container info__item-container">
                                    ${r}
                                </div>
                            </div>

                            <div class="details__crew crew">
                                <p class="crew__job">Director</p>
                                <div class="crew__info info__item-bg">
                                    <img src="${d}" alt="crew-poster" class="crew__poster">
                                    <p class="crew__name">${p}</p>
                                </div>
                            </div>
                            <div class="details__crew crew">
                                <p class="crew__job">Writer</p>
                                <div class="crew__info info__item-bg">
                                    <img src="${c}" alt="crew-poster" class="crew__poster">
                                    <p class="crew__name">${w}</p>
                                </div>
                            </div>
                        </div>
                        
                </div> 
                    <iframe class="media-trailer" id="media-trailer" width="100%" height="700" src="https://www.youtube.com/embed/${v}"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen>
                    </iframe>
                    <div class="details__recomendations recomendations">
                        <p class="recomendations__name details__name">Recommended</p>
                        <div class="recomendations__container recomendations-slider">
                            
                        </div>
                    </div>
                `,initSlickSlider(".characters-slider"),initSlickSliderReviews()}catch(m){console.error("Error fetching data:",m)}}async function getMediaBackground(e,i){try{let t=await fetch(`https://api.themoviedb.org/3/${i}/${e}/images`,options),s=await t.json(),o=s.backdrops;if(!(o.length>0))return"defaultImage.jpg";{let a=o[0];return apiConfig.backdropUrl+a.file_path}}catch(r){return console.error("Error fetching background data:",r),"defaultImage.jpg"}}async function getMediaCredits(e,i,t){let s=`https://api.themoviedb.org/3/${i}/${e}/credits?language=en-US`;try{let o=await fetch(s,options),a=await o.json();if(console.log(a),"cast"===t){let r=a.cast,_="";return r.forEach(e=>{e&&e.profile_path&&(_+=`<img src="${apiConfig.backdropUrl+e.profile_path}" alt="character-poster" class="cast__poster">`)}),_}if("crew"===t){let n=a.crew,l=n.find(e=>"Directing"===e.department),d=n.find(e=>"Writing"===e.department);return{director:l,writer:d}}}catch(c){throw console.error("Error fetching media credits:",c),c}}async function getMediaReviews(e,i){url=`https://api.themoviedb.org/3/${i}/${e}/reviews?language=en-US&page=1`;let t=await fetch(url,options),s=await t.json(),o=s.results,a=[];return o.forEach(e=>{let i={content:e.content,author:e.author};a.push(i)}),a}async function getMediaTrailer(e,i){url=`https://api.themoviedb.org/3/${i}/${e}/videos?language=en-US`;let t=await fetch(url,options),s=await t.json(),o=s.results,a=o.find(e=>"Trailer"==e.type);if(a)return a.key}async function getMediaRecomendations(e,i){url=`https://api.themoviedb.org/3/${i}/${e}/recommendations?language=en-US&page=1`;let t=await fetch(url,options),s=await t.json();console.log(s);let o=document.querySelector(".recomendations-slider");addMovies(s,o,i),$(o).hasClass("slick-initialized")||$(o).slick({slidesToScroll:5,speed:300,slidesToShow:8,nextArrow:'<button type="button" class="arrow-right"><img src="img/next.svg" alt="next-button"></button>',prevArrow:'<button type="button" class="arrow-left"><img src="img/prev.svg" alt="prev-button"></button>',responsive:[{breakpoint:2500,settings:{arrows:!0,slidesToShow:6,slidesToScroll:3}},{breakpoint:1440,settings:{arrows:!0,slidesToShow:5,slidesToScroll:3}},{breakpoint:1284,settings:{arrows:!0,slidesToShow:4,slidesToScroll:2}},{breakpoint:1024,settings:{arrows:!0,slidesToShow:3,slidesToScroll:2}},{breakpoint:768,settings:{swipe:!0,arrows:!1,slidesToShow:2,slidesToScroll:1,centerMode:!0,arrows:!0}},{breakpoint:620,settings:{swipe:!0,slidesToShow:2,slidesToScroll:1,arrows:!0}},{breakpoint:480,settings:{swipe:!0,slidesToShow:1,slidesToScroll:1,centerMode:!0,arrows:!0}},{breakpoint:340,settings:{swipe:!0,slidesToShow:1,slidesToScroll:1}},]})}showAboutMedia(mediaId,mediaType);
