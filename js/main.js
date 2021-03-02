let galeryImages = document.getElementById('Display');
let smallImages = document.getElementsByClassName('SmallImg');

smallImages[0].onclick = function()
{
    galeryImages.src = smallImages[0].src;
}
smallImages[1].onclick = function()
{
    galeryImages.src = smallImages[1].src;
}

smallImages[2].onclick = function()
{
    galeryImages.src = smallImages[2].src;
}
