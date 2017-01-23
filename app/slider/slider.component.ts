import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: '<slide>',
  templateUrl:'slider.component.html'
})
export class SlideComponent  {
     

constructor(){
   

}

ngOnInit(){
              jQuery(document).ready(function($) {
            $('#camera_wrap_1').camera({
                thumbnails: true,
                height: '25%',
                loader: 'pie',
                loaderPadding: 1,
                loaderStroke: 5,
                onLoaded: function() {
                  $('#camera_wrap_1').find('.camera_next').html('<i class="icon-angle-right"></i>');
                  $('#camera_wrap_1').find('.camera_prev').html('<i class="icon-angle-left"></i>');
                      }
                    });
                  });
    }
 }
