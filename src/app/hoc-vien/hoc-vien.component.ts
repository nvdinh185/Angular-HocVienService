import { Component, OnInit } from '@angular/core';
import { HocVienService } from "./hocvien.service";

@Component({
  selector: 'app-hoc-vien',
  templateUrl: './hoc-vien.component.html',
  styleUrls: ['./hoc-vien.component.css']
})
export class HocVienComponent implements OnInit {

  constructor(private hocVienService: HocVienService) { }


  ngOnInit() {
    this.hocVienService.getHocVien()
      .then(hocvien => {
        this.arHocVien = hocvien;
        this.arHocVien.sort(function (a, b) {
          return b.id - a.id;
        });
      })
      .catch(err => console.log(err));
    
  }
  isShow = true;
  isShowAdd = false;
  isShowDel = false;
  isShowEdit = false;
  filterStatus = "tat_ca";
  newName=[];
  newGender=[];
  arHocVien = [];

  addHV(HocVienForm) {
    var id = this.arHocVien.length + 1;
    var strGioiTinh = HocVienForm.value.gioiTinh.toUpperCase();
    if (strGioiTinh != "nam".toUpperCase() && strGioiTinh != "nu".toUpperCase()) {
      alert("Gioi tinh nhap sai!");
    } else {
      var ten = HocVienForm.value.ten;
      var gioiTinh = (strGioiTinh == "nam".toUpperCase());
      var hocVien = { id, ten, gioiTinh }
      this.arHocVien.unshift(hocVien);
      alert("Da them thanh cong!");
      this.isShowAdd = !this.isShowAdd;
      this.isShow = !this.isShow;
    }
  }

  deleteHV(id) {
    const index = this.arHocVien.findIndex(e => e.id == id);
    this.arHocVien.splice(index, 1);
    alert("Da xoa thanh cong!");
  }

  getShowStatus(gioitinh) {
    var txtTatCa = this.filterStatus == 'tat_ca';
    var txtNam = this.filterStatus == 'nam' && gioitinh;
    var txtNu = this.filterStatus == 'nu' && !gioitinh;
    return txtTatCa || txtNam || txtNu;
  }

  editHV(id) {
    const index = this.arHocVien.findIndex(e => e.id == id);
    this.arHocVien[index].gioiTinh = typeof (this.newGender) != "undefined" ?
      (this.newGender[id] == "nam" || this.newGender[id] == "Nam") : this.arHocVien[index].gioiTinh;
    this.arHocVien[index].ten = typeof (this.newName[id]) != "undefined" ?
      this.newName[id] : this.arHocVien[index].ten;
    this.newName = []; this.newGender = [];
    alert("Da sua thanh cong!");
  }
}