import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodosProvider } from '../../providers/todos/todos';
import { Device } from '@ionic-native/device';
import 'rxjs/add/operator/map';

@IonicPage()
@Component({
	selector: 'page-item',
	templateUrl: 'item.html',
})
export class ItemPage {

	form: FormGroup;

	options: BarcodeScannerOptions;
	results: BarcodeScanResult;
	item: FormGroup;

	todos: any;
	items: any;
	objects: any;

	itemsReady = false;

	constructor(	public navCtrl: NavController, 
		public navParams: NavParams, 
		private barcode: BarcodeScanner,
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private todoService: TodosProvider,
		private device: Device) {
		this.item = this.formBuilder.group({
			nivel1: ['', Validators.required],
			nivel2: ['', Validators.required],
			nivel3: ['', Validators.required],
			nombre: ['', Validators.required],
			descripcion: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(100), Validators.required])],
			qrcode: ['', Validators.compose([Validators.minLength(1), Validators.maxLength(20), Validators.required])],
			marca: ['', Validators.required],
			modelo: ['', Validators.required],
			serie: ['', Validators.required],
			estado: ['', Validators.required],
			observacion: ['', Validators.compose([Validators.minLength(0), Validators.maxLength(200)])]
		});

		this.http.get('./assets/data/nombres.json').map(res => res).subscribe(data => {
			this.items = data;
			this.itemsReady = true;
		});
	}

	async scanBarcode() {
		this.results = await this.barcode.scan();
		var code = this.results.text;
		this.item.controls['qrcode'].setValue(code);

		this.http.get('./assets/data/datos_hc.json').map(res => res).subscribe(data => {
			this.objects = data as any[];
			for(let a of this.objects) {
				if(code == a.CODIGO_ACTUAL) {
					this.item.controls['descripcion'].setValue(a.DESCRIPCION);
					this.item.controls['marca'].setValue(a.MARCA);
					this.item.controls['modelo'].setValue(a.MODELO);
					this.item.controls['serie'].setValue(a.SERIE);

					break;
				}
			}
		});
	}

	submitItem() {
		this.todoService.createTodo({
			nivel1: this.item.controls['nivel1'].value,
			nivel2: this.item.controls['nivel2'].value,
			nivel3: this.item.controls['nivel3'].value,
			codigo: this.item.controls['qrcode'].value,
			nombre: this.item.controls['nombre'].value,
			descripcion: this.item.controls['descripcion'].value,
			marca: this.item.controls['marca'].value,
			modelo: this.item.controls['modelo'].value,
			serie: this.item.controls['serie'].value,
			estado: this.item.controls['estado'].value,
			observacion: this.item.controls['observacion'].value,
			timestamp: new Date(),
			device: this.device.uuid
		});

		alert("Item ingresado");

		this.item.controls['qrcode'].reset();
		this.item.controls['nombre'].reset();
		this.item.controls['descripcion'].reset();
		this.item.controls['marca'].reset();
		this.item.controls['modelo'].reset();
		this.item.controls['serie'].reset();
		this.item.controls['estado'].reset();
		this.item.controls['observacion'].reset();
	}
}
