import {Component, ViewChild, ViewEncapsulation, AfterViewInit} from '@angular/core';
import {ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal';
import { FormsModule } from '@angular/forms';

@Component({
    selector:'modals',
    styles:['>>> .modal-small{width:420px;}'],
  template:`
             <modal #modal cssClass="modal-small">
       <form  #modalForm="ngForm">
      
    <modal-body>
      <div class="form-group">
        <label for="firstName">Your Name</label>
         <input type="text"  class="form-control" required [(ngModel)]="firstName" name="firstName" id="firstName">
         </div>
         <label > <h3>{{firstName }}</h3> </label>
    </modal-body>
    <modal-footer>
        <button type="button" class="btn btn-default" data-dismiss="modal" (click)="modal.dismiss()">Cancel</button>
        <button type="button" class="btn btn-primary" [disabled]="!modalForm.valid" (click)="parentModal.open();modal.dismiss();">Submit</button>
     </modal-footer> 
     </form>
</modal>
    <modal style="z-index: 1049" 
         [cssClass]="cssClass" #parentModal>
        <modal-header [show-close]="true">
            <h4 class="modal-title">Welcome!</h4>
            
        </modal-header>
        <modal-body>
            <p>Hello!! &nbsp; <strong>{{firstName }},</strong>&nbsp; 
            You can Make Use Of Our Service To donate blood Please Register bellow.</p>
           
        </modal-body>
        <modal-footer>
            <button type="button" class="btn btn-default" data-dismiss="modal" (click)="parentModal.dismiss()">Cancel</button>
            <button type="button" class="btn btn-primary" (click)="parentModal.close()">Ok</button>
        </modal-footer>
    </modal>

  `
})

export class ModalComponents implements AfterViewInit {
  @ViewChild('modal')
    modal: ModalComponent;
    
    animation: boolean = true;
    keyboard: boolean = true;
    backdrop: string | boolean = true;
    css: boolean = false;

    ngAfterViewInit() {
        this.modal.open();
    }
      close() {
        this.modal.close();
    }

    
      closed() {
        
    }

    dismissed() {
    }

    opened() {
    }

   

    open() {
        this.modal.open();
    }

}
