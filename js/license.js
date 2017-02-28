//图片上传预览    IE是用了滤镜。
function previewImage(file)
{
  var MAXWIDTH  = 368; 
  var MAXHEIGHT = 398;
  var div = document.getElementById('preview');
  if (file.files && file.files[0])
  {
      div.innerHTML ='<img id=imghead onclick=$("#previewImg").click()>';
      var img = document.getElementById('imghead');
      //onload 属性在对象已加载时触发;
      img.onload = function(){
        //rect() 方法为当前路径添加一条矩形子路径;
        var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
        img.width  =  rect.width;
        img.height =  rect.height;
//      img.style.marginLeft = rect.left+'px';
        img.style.marginTop = rect.top+'px';
      }
      //HTML5定义了FileReader作为文件API的重要成员用于读取文件，根据W3C的定义，FileReader接口提供了读取文件的方法和包含读取结果的事件模型;
      //API API（Application Programming Interface,应用程序编程接口）是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节;
      var reader = new FileReader();
      //target 事件属性可返回事件的目标节点（触发该事件的节点），如生成事件的元素、文档或窗口;
      reader.onload = function(evt){img.src = evt.target.result;}
      //FileReader对象的readAsDataURL方法可以将读取到的文件编码成Data URL。Data URL是一项特殊的技术，可以将资料(例如图片)内嵌在网页之中，不用放到外部文件。使用Data URL的好处是，您不需要额外再发出一个HTTP 请求到服务器端取得额外的资料；而缺点便是，网页的大小可能会变大。它适合应用在内嵌小图片，不建议将大图像文件编码成Data URL来使用。您的图像文件不能够超过浏览器限定的大小，否则无法读取图像文件;
      reader.readAsDataURL(file.files[0]);
      //alert(reader.readAsDataURL)
  }
  else //兼容IE
  {
    var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
    file.select();
    var src = document.selection.createRange().text;
    div.innerHTML = '<img id=imghead>';
    var img = document.getElementById('imghead');
    img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
    var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
    status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
    div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
  }
}
function clacImgZoomParam( maxWidth, maxHeight, width, height ){
    var param = {top:0, left:0, width:width, height:height};
    if( width>maxWidth || height>maxHeight ){
        rateWidth = width / maxWidth;
        rateHeight = height / maxHeight;
        
        if( rateWidth > rateHeight ){
            param.width =  maxWidth;
            param.height = Math.round(height / rateWidth);
        }else{
            param.width = Math.round(width / rateHeight);
            param.height = maxHeight;
        }
    }
    param.left = Math.round((maxWidth - param.width) / 2);
    param.top = Math.round((maxHeight - param.height) / 2);
    return param;
}
//图片上传
var reader = new FileReader();
$(function(){
  //判断添加图片有没有成功;
      if(reader==!function(evt){img.src = evt.target.result;}){

      }else{
            $('#previewImg').click(function(){
                $('.alert').html("");
            });
            $('.btn').click(function(){
                $('.btn').val("上传中...");
                $('.limit').hide();
                setInterval(function(){
                    $('.btn').hide();
                    $('.foottxt').hide();
                    $('.alert').html("您提交的营业执照已审核通过!").addClass('alert_success');
                },3000)
            })
      }
});