console.log("Test")
const l = console.log
let randString = function(len){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let charset = alphabet+alphabet.toUpperCase()+'0123456789!-+'
  let final = "";
  for(let i=0;i<len;i++){
    final+=charset[Math.floor(Math.random()*charset.length)]
  }
  return final
}
var executeCarouselDownloadFunctionIfMuhsinSeesThisLongFunctionNameHi = (anchor) => {
  let link = $('#poster-carousel .carousel-item.active img').attr("src").replace(/\\/g,"/")
  let extension = link.split('.')[1]
  // anchor = $('#download-anchor')
  anchor = $(anchor)
  // anchor.attr("download",randString(420)+'.'+extension)
  anchor.attr("href",link+'.zip')
  anchor.attr('download','download.zip')
  anchor.click()
}
$(function(){
  $.ajax({
    type:"GET",
    url:"https://pledge-counter.herokuapp.com/api/main/getCount",
    success:function(data){
      $(".pledge-container").css("display","block")
        $(".pledge-counter").html(Number(data))
        console.log(data)
    },
    error:function(data){
        console.log(data)
    }
  })
})
