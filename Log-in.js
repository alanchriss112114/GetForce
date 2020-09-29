$(document).ready(function(){
    $("#sign").validate({
        rules:{
            email:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:8,
                maxlength:125
            }
        }
        
    })
})