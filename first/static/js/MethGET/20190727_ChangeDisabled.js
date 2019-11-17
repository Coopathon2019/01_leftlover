


function trt_2_ChangeDisabled(value){
    if(value=='trt_2_Selected')
    {
        if (document.getElementById('trt_2_Selected').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('trt_2_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('trt_2_Exp').disabled=false;　// 變更欄位為可用
        
        /*
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　	    document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用*/
        }

        else{
        document.getElementById('trt_2_CGmap').disabled=true;　// 變更欄位為可用
        document.getElementById('trt_2_Exp').disabled=true;　// 變更欄位為可用

        }
    }

}


function trt_3_ChangeDisabled(value){
    if(value=='trt_3_Selected')
    {
        if (document.getElementById('trt_3_Selected').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('trt_3_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('trt_3_Exp').disabled=false;　// 變更欄位為可用
        
        /*
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用*/
        }

        else{
        document.getElementById('trt_3_CGmap').disabled=true;　// 變更欄位為可用
        document.getElementById('trt_3_Exp').disabled=true;　// 變更欄位為可用

        }
    }

}




function ctrl_1_ChangeDisabled(value){
    if(value=='ctrl_1_Selected')
    {
        if (document.getElementById('ctrl_1_Selected').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrl_1_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrl_1_Exp').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrl_1_premeta').disabled=false;
        /*
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用*/
        }

        else{
        document.getElementById('ctrl_1_CGmap').disabled=true;　// 變更欄位為可用
        document.getElementById('ctrl_1_Exp').disabled=true;　// 變更欄位為可用
        document.getElementById('ctrl_1_premeta').disabled=true;
        }
    }

}



function ctrlB_ChangeDisabled(value){
    if(value=='ctrlB_Selected')
    {
        if (document.getElementById('ctrlB_Selected').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrlB_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlB_Exp').disabled=false;　// 變更欄位為可用
        
        /*
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用*/
        }

        else{
        document.getElementById('ctrlB_CGmap').disabled=true;　// 變更欄位為可用
        document.getElementById('ctrlB_Exp').disabled=true;　// 變更欄位為可用

        }
    }

}


function ctrlC_ChangeDisabled(value){
    if(value=='ctrlC_Selected')
    {
        if (document.getElementById('ctrlC_Selected').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrlC_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlC_Exp').disabled=false;　// 變更欄位為可用
        
        /*
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用*/
        }

        else{
        document.getElementById('ctrlC_CGmap').disabled=true;　// 變更欄位為可用
        document.getElementById('ctrlC_Exp').disabled=true;　// 變更欄位為可用

        }
    }

}



function metainput_ChangeDisabled(value){
    if($('input[name*=plot]:checked').val() == "region")
    {
        document.getElementById('region_window').disabled=false;
        document.getElementById('pos').disabled=true;
        document.getElementById('flanking_bp').disabled=true;
        document.getElementById('site_window').disabled=true;
        
    }
    else if($('input[name*=plot]:checked').val() == "site")
    {
        document.getElementById('pos').disabled=false;
        document.getElementById('flanking_bp').disabled=false;
        document.getElementById('site_window').disabled=false;
        document.getElementById('region_window').disabled=true;

    }
}




function GTF_ChangeDisabled(value){
    if($('input[name*=Organism]:checked').val() == "buildin")
    {
        document.getElementById('GTF_buildin').disabled=false;
        /*
        $("#GTF_buildin").attr(
        {
            "disabled": false,
        })*/
        document.getElementById('GTF_customized').disabled=true;
    }
    else if($('input[name*=Organism]:checked').val() == "customized")
    {
        document.getElementById('GTF_buildin').disabled=true;
        document.getElementById('GTF_customized').disabled=false;
    }

    /*
    if(value=='buildin')
    {
        if (document.getElementById('Select_buildin').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('GTF_buildin').disabled=false;　// 變更欄位為可用
        //document.getElementById('ctrlC_Exp').disabled=false;　// 變更欄位為可用
        
        
        document.getElementById('GTF_customized').disabled=true;　// 變更欄位為禁用
　       //document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
        }
    }
    if(value=='customized')
    {
        if (document.getElementById('Select_customized').checked) {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('GTF_customized').disabled=false;　// 變更欄位為可用
        //document.getElementById('ctrlC_Exp').disabled=false;　// 變更欄位為可用
        
        
        document.getElementById('GTF_buildin').disabled=true;　// 變更欄位為禁用
　      // document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
        }
    }
    */
}











/*
function ChangeDisabled(value){
    if(value=='trtC_Selected')
    {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('trtC_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('trtC_Exp').disabled=false;　// 變更欄位為可用
        
        // 禁用Multiple
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
    }


    if(value=='ctrlA_Selected')
    {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrlA_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlA_Exp').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlA_premeta').disabled=false;
        // 禁用Multiple
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
    }


    if(value=='ctrlB_Selected')
    {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrlB_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlB_Exp').disabled=false;　// 變更欄位為可用
        
        // 禁用Multiple
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
    }

    if(value=='ctrlC_Selected')
    {
        // 啟用Single
        //alert("yeah")//
        document.getElementById('ctrlC_CGmap').disabled=false;　// 變更欄位為可用
        document.getElementById('ctrlC_Exp').disabled=false;　// 變更欄位為可用
        
        // 禁用Multiple
        document.getElementById('M_SampleLists').disabled=true;　// 變更欄位為禁用
　       document.getElementById('M_GTF').disabled=true;　// 變更欄位為禁用
    }







}




    
    else if(value=='Multiple')
    {
        // 啟用Multiple
    　   document.getElementById('M_SampleLists').disabled=false;　// 變更欄位為可用
    　   document.getElementById('M_GTF').disabled=false;　// 變更欄位為可用
        
        // 禁用Single
        document.getElementById('S_SampleName').disabled=true;　// 變更欄位為禁用
        document.getElementById('S_CGmap').disabled=true;　// 變更欄位為禁用
        document.getElementById('S_EXP').disabled=true;　// 變更欄位為禁用
        document.getElementById('S_GTF').disabled=true;　// 變更欄位為禁用
    }

    */
