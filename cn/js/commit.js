$(function(){
    $(".language").click(function(){
        $(".language>div").slideToggle();
    })
    $("#button_nav").click(function(){
        
    })

    $("#button_nav").click(function(){
        $(".header_nav").slideToggle();
        // $(".header_form").slideToggle();
    })

    $(".about #button_nav").click(function(){
        $(".about-class").slideToggle();
    })
    $(".product #button_nav").click(function(){
        $(".product-tit").slideToggle();
    })
    

    var mySwiper = new Swiper ('#swiper1', {
        loop: true,
        autoplay:true,
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '#swiper1 .swiper-button-next',
          prevEl: '#swiper1 .swiper-button-prev',
        },
    })  

    var mySwiper3 = new Swiper('#swiper3',{
       direction: 'vertical',
    })
    var mySwiper2 = new Swiper ('#swiper2.swiper-container', {
        loop: true,
        // autoplay:true,
      
        // 如果需要前进后退按钮
        //pagination : '.index_expert_pic .swiper-pagination',
		
		pagination: {
			el: '#swiper2 .swiper-pagination',
		},
         navigation: {
             nextEl: '#swiper2 .swiper-button-next',
             prevEl: '#swiper2 .swiper-button-prev',
           },
       
    }) 

// 新闻页面
   
    $(".news-box").hover(
      function(){
        $(this).children(".news-left").animate({height:"100%"},300);
        $(this).children(".news-right").animate({top:"0"},300);
        $(this).children(".news-bottom").delay(300).animate({width:'100%'},300);
        $(this).children(".news-top").animate({height:"40"},300);
      },
      function(){
        $(this).children(".news-left").animate({height:"0"},300);
        $(this).children(".news-right").animate({top:"100%"},300)
        $(this).children(".news-bottom").delay(300).animate({width:'0'},300);
        $(this).children(".news-top").animate({height:"0"},300);

      },
    );





    function check(){
        var obj = document.form;

        if (obj.姓名.value == "")
        {
            alert("请填写姓名！");
            return false;
        }
        if (obj.电话.value == "")
        {
            alert("请填写联系方式！");
            return false;
        }
        if (obj.邮箱.value == "")
        {
            alert("请填写邮箱！");
            return false;
        }
    }

    //创建和初始化地图函数：
    function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
        addMapOverlay();//向地图添加覆盖物
      }
      function createMap(){ 
        map = new BMap.Map("map"); 
        map.centerAndZoom(new BMap.Point(121.166413,30.037543),19);
      }
      function setMapEvent(){
        map.enableScrollWheelZoom();
        map.enableKeyboard();
        map.enableDragging();
        map.enableDoubleClickZoom()
      }
      function addClickHandler(target,window){
        target.addEventListener("click",function(){
          target.openInfoWindow(window);
        });
      }
      function addMapOverlay(){
        var markers = [
          {content:"",title:"",imageOffset: {width:0,height:3},position:{lat:30.03739,lng:121.166413}}
        ];
        for(var index = 0; index < markers.length; index++ ){
          var point = new BMap.Point(markers[index].position.lng,markers[index].position.lat);
          var marker = new BMap.Marker(point,{icon:new BMap.Icon("http://api.map.baidu.com/lbsapi/createmap/images/icon.png",new BMap.Size(20,25),{
            imageOffset: new BMap.Size(markers[index].imageOffset.width,markers[index].imageOffset.height)
          })});
          var label = new BMap.Label(markers[index].title,{offset: new BMap.Size(25,5)});
          var opts = {
            width: 200,
            title: markers[index].title,
            enableMessage: false
          };
          var infoWindow = new BMap.InfoWindow(markers[index].content,opts);
          marker.setLabel(label);
          addClickHandler(marker,infoWindow);
          map.addOverlay(marker);
        };
      }
      //向地图添加控件
      function addMapControl(){
        var scaleControl = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        scaleControl.setUnit(BMAP_UNIT_IMPERIAL);
        map.addControl(scaleControl);
        var navControl = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE});
        map.addControl(navControl);
        var overviewControl = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:true});
        map.addControl(overviewControl);
      }
      var map;
        initMap();
    
})