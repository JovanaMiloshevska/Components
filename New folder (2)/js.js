debugger;
let buttonAction = document.getElementById('btnaction');
let photos = document.getElementsByClassName("box");
for (let i=photos.length/2; i < photos.length; i++)
photos[i].style.display = "none";

    buttonAction.addEventListener('click', function(){
            if (photos[4].style.display === "none" && photos[5].style.display === "none" && photos[6].style.display === "none" && photos[7].style.display === "none"){
                for (let i = 0; i < photos.length/2; i++){
                    photos[i].style.display = "none";
                }
                for (let i = photos.length/2; i < photos.length; i++){
                    photos[i].style.display = "flex";
                }
            }
            else{
                for (let i = 0; i < photos.length/2; i++){
                    photos[i].style.display = "flex";
                }
                for (let i = photos.length/2; i < photos.length; i++){
                    photos[i].style.display = "none";
                }
            }
        
        
         })