import { Item } from './item';
import { itemListTpl } from './templates';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;


export class View {

	private $itemList  : Element;
	private $itemInput : Element;
	
	constructor() {
		this.$itemList = document.querySelector('#item-list');
		this.$itemInput = document.querySelector('#item-input');
	}

	onSubmit(handler: Function):void {
		this.$itemInput.addEventListener('keypress', (event: KeyboardEvent) => {
			if(event.keyCode === ENTER_KEY){
				const target: HTMLInputElement = <HTMLInputElement> event.target;
				handler(target.value);
        		target.value = '';
			}
		});
	}

	render(items: Array<Item>): void {
    	this.$itemList.innerHTML = itemListTpl(items);
  	}
}