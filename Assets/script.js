
$(function () {
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
  function colorUpdate(){
    let dayjsTime = dayjs().hour()
    $(".time-block").each(function(){
      var currentHour = parseInt($(this).attr("id").split("-")[1]);
      if(currentHour < dayjsTime){
        $(this).addClass("past");
      }
      else if(currentHour === dayjsTime){
        $(this).addClass("present");
      }
      else{
        $(this).addClass("future");
      }
    })
  }
  colorUpdate();
  setInterval(colorUpdate, 10000);
  $(".saveBtn").on("click",function(){
    var description = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time,description);
  })
  for(var i = 9; i <= 17; i++){
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`));
  }

});
