import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormBuilder
} from "@angular/forms";
import {AuthServiceService} from '../auth-service.service';
import {UtilityServiceService} from '../utility-service.service';
import {LoaderService} from '../loader.service';
import { Router } from '@angular/router';
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { FilePath } from "@ionic-native/file-path/ngx";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
import { ActionSheetController, MenuController} from "@ionic/angular";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as moment from 'moment'
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-createraffle',
  templateUrl: './createraffle.page.html',
  styleUrls: ['./createraffle.page.scss'],
})
export class CreaterafflePage implements OnInit {
  safeUrl:  SafeResourceUrl;
  raffleForm:FormGroup;
  id:any;
  rafflersp:any;
  base64Image :any;
  fileName :any;
  fileext :any;
  fileUri :any;
  imageData:any;
  captureImage:any;
  pic:any;
  validFromTime:any;
  expiresOnDate:any;
  start_date:any;
 // value:any;
 value: number;
  type_id:any;
 
  
  constructor(private route: Router,private  formBuilder :FormBuilder, private authService:AuthServiceService,private utilityService:UtilityServiceService,private loaderService:LoaderService,private camera: Camera,private filePath: FilePath,private file: File,private transfer: FileTransfer,public actionSheetController: ActionSheetController,private sanitizer: DomSanitizer,private datePicker: DatePicker,
    @Inject(LOCALE_ID) private locale: string
    ) { }
   
   

  ngOnInit() {
    this.raffleForm= this.formBuilder.group({
      name: ['', [Validators.required,]],
      description:['',[Validators.required]],
      terms_condition:['',[Validators.required]],
      fees:['',[Validators.required, Validators.pattern (/^[0-9.]*$/)]],
      type_id:['',[Validators.required]],
      no_of_winner:['',[Validators.required]],
      start_date:['',[Validators.required]],
      start_time:['',[Validators.required]],
      end_date:['',[Validators.required]],
      end_time:['',[Validators.required]],
      cash_status:['',[Validators.required]],
      raffle_pasword:['',[Validators.required]],
      //image:[''],
   

    });
    this.id=localStorage.getItem('user_id');
    console.log("IDD",this.id);
    
   

  
  }
  
   ShowHideDiv() {
    
    var ddlpassword = document.getElementById("ddlpassword") as HTMLInputElement;
    var dvpassword = document.getElementById("dvpassword");
    dvpassword.style.display = ddlpassword.value == "2" ? "block" : "none";
}
 




 
  onValidfromTime(field) {
    this.datePicker.show({
    date: new Date(),
    mode: 'time',
    androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
    }).then((time) => {
      console.log("timevalue",time)
      this.raffleForm.patchValue({
    
        [field]:formatDate(time, 'hh:mm a', this.locale)
   
   

      })
   
    
    }, (err) => {
    });
    }
    onExpiresOnDate(field) {
      this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_DEVICE_DEFAULT_LIGHT
      }).then((date) => {
        console.log("dateevalue",date)
        this.raffleForm.patchValue({
      
      [field]:formatDate(date, 'yyyy-MM-dd', this.locale)
     

        })
   
      }, (err) => {
     
      });
      }

  

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      buttons: [{
        text: 'Use your camera',
        icon: 'camera',
        handler: () => {
          this.capture(this.camera.PictureSourceType.CAMERA);
        }
      }, {
        text: 'Use your album',
        icon: 'albums',
        handler: () => {
          this.capture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      }]
    });
    await actionSheet.present();
 
  }

  capture(sourceType) {
    this.utilityService.presentToast('Please wait..')
    this.base64Image = "";
    this.fileName = "";
    this.fileext = "";
    this.fileUri = "";
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,  // Return image as fileUri
      encodingType: 0,  //changed from 1 to 0
      mediaType: 0,
      targetWidth: 400,
      targetHeight: 400,
      sourceType,
      allowEdit: true
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      console.log("ImageData", this.imageData)
      let win: any = window; // hack ionic/angular compilator
      var myURL = win.Ionic.WebView.convertFileSrc(imageData);
      this.captureImage = myURL;
      console.log("CAPTUREimage",this.captureImage);
      // this.webservice.hideLoader();
    }, (err) => {
      this.utilityService.presentToast(err);
      // this.utilityService.hideLoader();
      console.log("err", err)
    });
  }
  formSubmit() {
    if(this.imageData !=undefined) {
      this.utilityService.presentToast('Please Wait...');
       this.fileName = this.imageData.split('/')[this.imageData.split('/').length - 1];
       this.fileext = this.fileName.split(".").pop();
       this.base64Image = this.imageData;
       this.pic = true;
       console.log("fileName: ",this.fileName)
    
       
      const fileTransfer: FileTransferObject = this.transfer.create();
      let filetransferoptions: FileUploadOptions = {
        fileKey: 'image',
        fileName: this.fileName,
        chunkedMode: false,
        mimeType: "image/jpeg",
        httpMethod: "POST",
        headers: {},
        params: {
          user_id: this.id,
          name: this.raffleForm.value.name,
          type_id:this.raffleForm.value.type_id,
          description: this.raffleForm.value.description,
          raffle_pasword: this.raffleForm.value.raffle_pasword,
          terms_condition: this.raffleForm.value.terms_condition,
          fees:this.raffleForm.value.fees,
          no_of_winner: this.raffleForm.value.no_of_winner,
          start_date:this.raffleForm.value.start_date,
          start_time:this.raffleForm.value.start_time,
          end_date:this.raffleForm.value.end_date,
          end_time:this.raffleForm.value.end_time,
          cash_status:Number (this.raffleForm.value.cash_status),
          
          // property_pic: this.fileName,
        }
        
      }
      console.log("filetransferoptions: ", filetransferoptions);
      // this.loaderService.presentLoading();
      fileTransfer.upload(this.base64Image, 'https://mydevfactory.com/~shreya/raffleiq/Api/saveRaffle', filetransferoptions)
        .then((data) => {
          let response = JSON.parse(data.response); //upload and show image
          console.log("response", response);

          if (response.status == 1) {
          this.captureImage = '';
            console.log("response.data", response.data);
            this.safeUrl=response.data;
            console.log(this.safeUrl);
            this.utilityService.presentToast(response.msg);
            this.route.navigateByUrl('/tabs/myraffle');
           // this.raffleForm.reset();
          }
          else {
            this.utilityService.presentToast(response.msg);
            
          }
          
        }, (err) => {
          console.log("err", err);
          
         this.utilityService.presentToast('Internal Server Error');
        
        });

    }
    else {
      let data = this.raffleForm.value;
      data.user_id =localStorage.getItem('user_id');
         data.cash_status=Number(data.cash_status);
        console.log("ID",data.user_id);
      this.authService.createRaffle(data).subscribe(response =>{
        this.rafflersp = response;
        console.log("===========",response);
        this.utilityService.presentToast(this.rafflersp.msg);
        this.raffleForm.reset();
        this.route.navigateByUrl('/tabs/myraffle');
            

      })
      
   

      
    }
  
  

  }


 




 

}
