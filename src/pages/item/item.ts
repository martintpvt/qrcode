import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScanResult, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TodosProvider } from '../../providers/todos/todos';
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
	path = './assets/imgs/pics/';
	isPicture = false;
	picture = '';

	todos: any;
	items: any;

	itemsReady = false;
	names = new Array();

	constructor(	public navCtrl: NavController, 
		public navParams: NavParams, 
		private barcode: BarcodeScanner,
		private formBuilder: FormBuilder,
		private http: HttpClient,
		private todoService: TodosProvider) {
		this.item = this.formBuilder.group({
			nivel1: ['', Validators.required],
			nivel2: ['', Validators.required],
			nivel3: ['', Validators.required],
			nivel4: ['', Validators.required],
			nombre: ['', Validators.required],
			descripcion: ['', Validators.required],
			foto: ['', Validators.required],
			qrcode: ['', Validators.required],
			marca: ['', Validators.required],
			modelo: ['', Validators.required],
			serie: ['', Validators.required],
			estado: ['', Validators.required],
			largo: [0, Validators.required],
			ancho: [0, Validators.required],
			profundidad: [0, Validators.required],
			observacion: ['']
		});

		this.http.get('./assets/data/datos_hc.json').map(res => res).subscribe(data => {
			this.items = data;
			

			for(var i = 0; i < 186; i++) {
				this.names.push(data[i].nombre);
			}

			this.itemsReady = true;
			this.isPicture = false;
		});
	}

	ionViewDidLoad() {
		// console.log('ionViewDidLoad ItemPage');
	}

	onChange() {
		this.http.get('./assets/data/datos1_inv.json').map(res => res).subscribe(data => {
			for(var i = 0; i < 186; i++) {
				if(data[i].codigo == this.item.controls['nombre'].value) {
					this.item.controls['foto'].setValue(data[i].foto);
					this.isPicture = true;
					this.picture = this.path + data[i].foto;
					this.item.controls['descripcion'].setValue(data[i].nombre);
					console.log(this.picture);
				}
			}
		});
	}

	async scanBarcode() {
		this.results = await this.barcode.scan();
		this.item.controls['qrcode'].setValue(this.results.text);
	}

	submitItem() {
		var nombre = '';

		this.todoService.createTodo({
			nivel1: this.item.controls['nivel1'].value,
			nivel2: this.item.controls['nivel2'].value,
			nivel3: this.item.controls['nivel3'].value,
			nivel4: this.item.controls['nivel4'].value,
			codigo: this.item.controls['qrcode'].value,
			nombre: this.item.controls['nombre'].value,
			descripcion: this.item.controls['descripcion'].value,
			foto: this.item.controls['foto'].value,
			marca: this.item.controls['marca'].value,
			modelo: this.item.controls['modelo'].value,
			serie: this.item.controls['serie'].value,
			largo: this.item.controls['largo'].value,
			ancho: this.item.controls['ancho'].value,
			profundidad: this.item.controls['profundidad'].value,
			estado: this.item.controls['estado'].value,
			observacion: this.item.controls['observacion'].value,
		});


		this.item.controls['qrcode'].reset();
		this.item.controls['nombre'].reset();
		this.item.controls['descripcion'].reset();
		this.item.controls['foto'].reset();
		this.item.controls['marca'].reset();
		this.item.controls['modelo'].reset();
		this.item.controls['serie'].reset();
		this.item.controls['largo'].setValue(0);
		this.item.controls['ancho'].setValue(0);
		this.item.controls['profundidad'].setValue(0);
		this.item.controls['estado'].reset();
		this.item.controls['observacion'].reset();

		this.isPicture = false;
	}
}
