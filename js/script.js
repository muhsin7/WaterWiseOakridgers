console.log("Test")
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
