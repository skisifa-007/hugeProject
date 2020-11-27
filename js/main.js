$(()=>{
    // listen for copy button.
    $(".copy").on("click",copyButton);
    // function of copy button.
    function copyButton(){
       let $temp = $("<input>");
       $("body").append($temp);
       let text = $(this).siblings("h2").text();
       $temp.val(text).select();
       document.execCommand("copy");
       $temp.remove();
       $(this).addClass("copied");
       $(this).text("Copied");
       var over = setTimeout(()=>{
        $(this).removeClass("copied");
        $(this).text("Copy");
       },800);

    }
});