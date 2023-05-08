import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Subject } from 'rxjs';
import { CommandService } from '../command.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dtoptions!: {
    pagingType: string; searching: boolean;
    //  paging:false
    lengthChange: boolean; language: { searchPlaceholder: string; };
  };

  constructor(private service: CommandService, private alert: ToastrService, private router: Router) { }

  @ViewChild('content') popupview !: ElementRef;

  Invoiceheader: any;
  pdfurl = '';
  invoiceno: any;
 // dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'full_numbers',
      searching:true,
    //  paging:false
    lengthChange:false,
    language:{
      searchPlaceholder:'Text Customer'
    }

    };
    this.LoadInvoice();
  }

  LoadInvoice() {
    this.service.GetAllInvoice().subscribe(res => {
      this.Invoiceheader = res;
      this.dtTrigger.next(null);
    });
  }

  invoiceremove(invoiceno: any) {
    if (confirm('Do you want to remove this Invoice :' + invoiceno)) {
      this.service.RemoveInvoice(invoiceno).subscribe(res => {
        let result: any;
        result = res;
        if (result.result == 'pass') {
          this.alert.success('Removed Successfully.', 'Remove Invoice')
          this.LoadInvoice();
        } else {
          this.alert.error('Failed to Remove.', 'Invoice');
        }
      });
    }
  }

  Editinvoice(invoiceno: any) {
    this.router.navigateByUrl('/editinvoice/' + invoiceno);
  }
  PrintInvoice(invoiceno: any) {
    this.service.GenerateInvoicePDF(invoiceno).subscribe(res => {
      let blob: Blob = res.body as Blob;
      let url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
  DownloadInvoice(invoiceno: any) {
    this.service.GenerateInvoicePDF(invoiceno).subscribe(res => {
      let blob: Blob = res.body as Blob;
      let url = window.URL.createObjectURL(blob);

      let a = document.createElement('a');
      a.download = invoiceno;
      a.href = url;
      a.click();

    });
  }

  PreviewInvoice(invoiceno: any) {
    this.invoiceno = invoiceno;
    this.service.GenerateInvoicePDF(invoiceno).subscribe(res => {
      let blob: Blob = res.body as Blob;
      let url = window.URL.createObjectURL(blob);
      this.pdfurl = url;
      //this.modalservice.open(this.popupview, { size: 'lg' });
      //window.open(url);
    });
  }
}
