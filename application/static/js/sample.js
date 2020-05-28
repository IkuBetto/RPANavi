// ページが読み込まれたら実行
window.onload = function() {

     
     count_disp_rakuten = new Array(100);
     // count_disp_rakuten_text = new Array(5);
     count_up_btn_rakuten=new Array(100);
     count_down_btn_rakuten=new Array(100);
     count_value_rakuten = new Array(100);
     count_disp_amazon =new Array(100);
     count_up_btn_amazon=new Array(100);
     count_down_btn_amazon=new Array(100);
     count_value_amazon=new Array(100);
     count_disp_yahoo=new Array(100);
     count_up_btn_yahoo=new Array(100);
     count_down_btn_yahoo=new Array(100);
     count_value_yahoo=new Array(100);
     count_disp_sail=new Array(100);
     count_up_btn_sail=new Array(100);
     count_down_btn_sail=new Array(100);
     count_value_sail = new Array(100);

     sort_group = new Array(5);
     sort_group_clone = new Array(5);
     sort_rank = new Array(5);
     sort_rank_clone = new Array(5);
     sort_item = new Array(5);
     sort_item_clone = new Array(5);
     sort_dotcom = new Array(5);
     sort_dotcom_clone = new Array(5);
     sort_rakuten = new Array(5);
     sort_rakuten_clone = new Array(5);
     sort_amazon=new Array(5);
     sort_amazon_clone=new Array(5);
     sort_yahoo=new Array(5);
     sort_yahoo_clone=new Array(5);
     sale_inputbox=new Array(5);
     sale_inputbox_clone=new Array(5);




     for (var i = 0; i < 100; i++) {
         

     count_disp_rakuten[i] = document.getElementById("disp_count_rakuten"+"_"+i);
     count_up_btn_rakuten[i] = document.getElementById("btn_count_up_rakuten"+"_"+i); 
     count_down_btn_rakuten[i] = document.getElementById("btn_count_down_rakuten"+"_"+i);
     count_value_rakuten[i] = 0;

     

  
    
     count_disp_amazon[i] = document.getElementById("disp_count_amazon"+"_"+i); 
     count_up_btn_amazon[i] = document.getElementById("btn_count_up_amazon"+"_"+i); 
     count_down_btn_amazon[i] = document.getElementById("btn_count_down_amazon"+"_"+i);
     count_value_amazon[i] = 0;

     count_disp_yahoo[i] = document.getElementById("disp_count_yahoo"+"_"+i);  
     count_up_btn_yahoo[i] = document.getElementById("btn_count_up_yahoo"+"_"+i); 
     count_down_btn_yahoo[i] = document.getElementById("btn_count_down_yahoo"+"_"+i);
     count_value_yahoo[i] = 0;

     count_disp_sail[i] = document.getElementById("disp_count_sail"+"_"+i);  
     count_up_btn_sail[i] = document.getElementById("btn_count_up_sail"+"_"+i); 
     count_down_btn_sail[i] = document.getElementById("btn_count_down_sail"+"_"+i);
     count_value_sail[i] = 0;

     }
};
     
     // カウントアップボタンクリック処理
     function countup_rakuten(i){
          count_value_rakuten[i] += 1; 
          count_value_sail[i]+=1;
          document.getElementById("r_count_id_"+i).value=count_value_rakuten[i];
          document.getElementById("s_count_id_"+i).value=count_value_sail[i];
          
          count_disp_rakuten[i].innerHTML = count_value_rakuten[i];
          count_disp_sail[i].innerHTML=count_value_sail[i];
          

     };
     function countdown_rakuten(i){ 
         if(count_value_rakuten[i]!=0){
               count_value_rakuten[i] -= 1; 
               count_value_sail[i]-=1;
               document.getElementById( "r_count_id_"+i ).value = count_value_rakuten[i] ;
               document.getElementById("s_count_id_"+i).value=count_value_sail[i];
               count_disp_rakuten[i].innerHTML = count_value_rakuten[i];
                count_disp_sail[i].innerHTML=count_value_sail[i];
          }
          
     };

     function countup_amazon(i){ 
          count_value_amazon[i] += 1;
          count_value_sail[i]+=1;
          document.getElementById("a_count_id_"+i).value=count_value_amazon[i];
          document.getElementById("s_count_id_"+i).value=count_value_sail[i];
          count_disp_amazon[i].innerHTML = count_value_amazon[i];
          count_disp_sail[i].innerHTML=count_value_sail[i];
     };
     function countdown_amazon(i){ 
         if(count_value_amazon[i]!=0){
               count_value_amazon[i] -= 1; 
               count_value_sail[i]-=1;
               document.getElementById("a_count_id_"+i).value=count_value_amazon[i];
               document.getElementById("s_count_id_"+i).value=count_value_sail[i];
               count_disp_amazon[i].innerHTML = count_value_amazon[i];
               count_disp_sail[i].innerHTML=count_value_sail[i];
          }
          
     };

     function countup_yahoo(i){ 
          count_value_yahoo[i] += 1; 
          count_value_sail[i]+=1;
          document.getElementById("y_count_id_"+i).value=count_value_yahoo[i];
          document.getElementById("s_count_id_"+i).value=count_value_sail[i];
          count_disp_yahoo[i].innerHTML = count_value_yahoo[i];
          count_disp_sail[i].innerHTML=count_value_sail[i];
     };
     function countdown_yahoo(i){ 
         if(count_value_yahoo[i]!=0){
               count_value_yahoo[i] -= 1; 
               count_value_sail[i]-=1;
               document.getElementById("y_count_id_"+i).value=count_value_yahoo[i];
               document.getElementById("s_count_id_"+i).value=count_value_sail[i];
               count_disp_yahoo[i].innerHTML = count_value_yahoo[i];
               count_disp_sail[i].innerHTML=count_value_sail[i];
          }
          
     };

     function countup_sail(i){ 
          count_value_sail[i] += 1; 
          document.getElementById("s_count_id_"+i).value=count_value_sail[i];
          count_disp_sail[i].innerHTML = count_value_sail[i];
     };
     function countdown_sail(i){ 
         if(count_value_sail[i]!=0){
               count_value_sail[i] -= 1; 
               document.getElementById("s_count_id_"+i).value=count_value_sail[i];
               count_disp_sail[i].innerHTML = count_value_sail[i];
          }
          
     };
     function sliceMaxLength(elem, maxLength) {  
          elem.value = elem.value.slice(0, maxLength);  
     };
     function sort_ch(){
          
          obj = document.read.select_sort;
          index = obj.selectedIndex;
          for (var i = 0; i < 5; i++) {
               sort_group[i]=document.getElementById("group"+"_"+i).textContent;
               sort_group_clone[i]=document.getElementById("group"+"_"+i);
               

               sort_rank[i]=document.getElementById("rank"+"_"+i).textContent;
               sort_rank_clone[i]=document.getElementById("rank"+"_"+i);
               
               sort_item[i]=document.getElementById("item"+"_"+i).textContent;
               sort_item_clone[i]=document.getElementById("item"+"_"+i);

               sort_dotcom[i]=document.getElementById("dotcom"+"_"+i).textContent;
               sort_dotcom_clone[i]=document.getElementById("dotcom"+"_"+i);

               sort_rakuten[i]=document.getElementById("r_nedan"+"_"+i).textContent;
               sort_rakuten_clone[i]=document.getElementById("r_nedan"+"_"+i);

               sort_amazon[i]=document.getElementById("a_nedan"+"_"+i).textContent;
               sort_amazon_clone[i]=document.getElementById("a_nedan"+"_"+i);


               sort_yahoo[i]=document.getElementById("y_nedan"+"_"+i).textContent;
               sort_yahoo_clone[i]=document.getElementById("y_nedan"+"_"+i);

               sale_inputbox[i]=document.getElementById("sale_inputbox"+"_"+i).value;
               sale_inputbox_clone[i]=document.getElementById("sale_inputbox"+"_"+i);


               // count_disp_rakuten_text[i] = document.getElementById("disp_count_rakuten"+"_"+i).textContent;

               //rakuten_up_sort[i]=document.getElementById("disp_count_rakuten"+"_"+i).textContent;
               //rakuten_up_sort_clone[i]=document.getElementById("disp_count_rakuten"+"_"+i);
               //console.log(sale_inputbox[i]);

          }
          

          

          s = obj.options[index].value;    
          console.log(s);
          if (s=="group"){
               
               for (var i = 0; i<sort_group.length-1 ; i++) {
                    for (var j = sort_group.length; j>i; j--) {
                         if(sort_group[j]<sort_group[j-1]){
                              var t=sort_group[j];
                              sort_group[j]=sort_group[j-1];
                              sort_group[j-1]=t;
                              var y=sort_rank[j];
                              sort_rank[j]=sort_rank[j-1];
                              sort_rank[j-1]=y;
                              var r=sort_item[j];
                              sort_item[j]=sort_item[j-1];
                              sort_item[j-1]=r;
                              var d=sort_dotcom[j];
                              sort_dotcom[j]=sort_dotcom[j-1];
                              sort_dotcom[j-1]=d;
                              var b=sort_rakuten[j];
                              sort_rakuten[j]=sort_rakuten[j-1];
                              sort_rakuten[j-1]=b;
                              var rs=count_value_rakuten[j];
                              count_value_rakuten[j]=count_value_rakuten[j-1];
                              count_value_rakuten[j-1]=rs;
                              var a=sort_amazon[j];
                              sort_amazon[j]=sort_amazon[j-1];
                              sort_amazon[j-1]=a;
                              var as=count_value_amazon[j];
                              count_value_amazon[j]=count_value_amazon[j-1];
                              count_value_amazon[j-1]=as;
                              var c=sort_yahoo[j];
                              sort_yahoo[j]=sort_yahoo[j-1];
                              sort_amazon[j-1]=c;
                              var ys=count_value_yahoo[j];
                              count_value_yahoo[j]=count_value_yahoo[j-1];
                              count_value_yahoo[j-1]=ys;
                              var si=sale_inputbox[j];
                              sale_inputbox[j]=sale_inputbox[j-1];
                              sale_inputbox[j-1]=si;


                         }
                    }
               }
               for (var i = 0; i < 5; i++) {
                    console.log("後:"+sort_group[i]);
                    console.log("clone:"+sort_group_clone[i]);
                    sort_group_clone[i].innerHTML = sort_group[i];
                    sort_rank_clone[i].innerHTML = sort_rank[i];
                    sort_item_clone[i].innerHTML = sort_item[i];
                    sort_dotcom_clone[i].innerHTML = sort_dotcom[i];
                    sort_rakuten_clone[i].innerHTML = sort_rakuten[i];
                    count_disp_rakuten[i].innerHTML=count_value_rakuten[i];
                    count_disp_amazon[i].innerHTML=count_value_amazon[i];
                    count_disp_yahoo[i].innerHTML=count_value_yahoo[i];
                    sale_inputbox_clone[i].innerHTML=sale_inputbox[i];


               }
          }
          if (s=="dif") {
               for (var i = 0; i<sort_rank.length-1 ; i++) {
                    for (var j = sort_rank.length; j>i; j--) {
                         if(sort_rank[j]<sort_rank[j-1]){
                              var t=sort_group[j];
                              sort_group[j]=sort_group[j-1];
                              sort_group[j-1]=t;
                              var y=sort_rank[j];
                              sort_rank[j]=sort_rank[j-1];
                              sort_rank[j-1]=y;
                              var r=sort_item[j];
                              sort_item[j]=sort_item[j-1];
                              sort_item[j-1]=r;
                              var d=sort_dotcom[j];
                              sort_dotcom[j]=sort_dotcom[j-1];
                              sort_dotcom[j-1]=d;
                              var b=sort_rakuten[j];
                              sort_rakuten[j]=sort_rakuten[j-1];
                              sort_rakuten[j-1]=b;
                              var rs=count_value_rakuten[j];
                              count_value_rakuten[j]=count_value_rakuten[j-1];
                              count_value_rakuten[j-1]=rs;
                              var a=sort_amazon[j];
                              sort_amazon[j]=sort_amazon[j-1];
                              sort_amazon[j-1]=a;
                              var as=count_value_amazon[j];
                              count_value_amazon[j]=count_value_amazon[j-1];
                              count_value_amazon[j-1]=as;
                              var c=sort_yahoo[j];
                              sort_yahoo[j]=sort_yahoo[j-1];
                              sort_amazon[j-1]=c;
                              var ys=count_value_yahoo[j];
                              count_value_yahoo[j]=count_value_yahoo[j-1];
                              count_value_yahoo[j-1]=ys;
                              var si=sale_inputbox[j];
                              sale_inputbox[j]=sale_inputbox[j-1];
                              sale_inputbox[j-1]=si;
                         }
                    }
               }
               for (var i = 0; i < 5; i++) {
                    console.log("後:"+sort_rank[i]);
                    console.log("clone:"+sort_rank_clone[i]);
                    sort_rank_clone[i].innerHTML = sort_rank[i];
                    sort_group_clone[i].innerHTML = sort_group[i];
                    sort_item_clone[i].innerHTML=sort_item[i];
                    sort_dotcom_clone[i].innerHTML = sort_dotcom[i];
                    sort_rakuten_clone[i].innerHTML = sort_rakuten[i];
                    count_disp_rakuten[i].innerHTML=count_value_rakuten[i];
                    count_disp_amazon[i].innerHTML=count_value_amazon[i];
                    count_disp_yahoo[i].innerHTML=count_value_yahoo[i];
                    sale_inputbox_clone[i].innerHTML=sale_inputbox[i];

               }
          }


     };




