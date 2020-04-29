import { Component, OnInit } from '@angular/core';
import { BLE } from '@ionic-native/ble/ngx';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
})
export class TestingPage implements OnInit {
  blDevices: BluetoothDevice[] = [];
  loadingScan = false;

  constructor(
    private ble: BLE
  ) { }

  ngOnInit() {
  }

  scan() {
    this.blDevices = [];

    this.ble.startScan([])
      .subscribe((blDevice: BluetoothDevice) => {
        this.blDevices.push(blDevice);
        console.log(blDevice);
      });
    this.loadingScan = true;

    setTimeout(() => {
      this.ble.stopScan().then(() => 'scan stop');
      this.loadingScan = false;
    }, 5000);
  }

  connect(blDevice: BluetoothDevice) {
    const success = (res: any) => confirm(`success connect ${JSON.stringify(res)}`),
      error = (err: any) => alert(`error ${JSON.stringify(err)}`);

    this.ble.connect(blDevice.id)
      .subscribe(success, error);
  }
}

class BluetoothDevice {
  name?: string;
  id: string;
  rssi: string;
}