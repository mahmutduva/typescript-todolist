import { Item } from  './item';

export class Store  {
	
	private _localStorage: Storage;
	private _items: Array<Item>;
	private _subscribers : Array<Function>;

	constructor() {
		this._localStorage = window.localStorage;
		this._subscribers = [];
	}

	private _getStorage(): Array<Item>{
		return this._items = this._items || (( 
			JSON.parse(this._localStorage.getItem('TodoList') 
			)) || []).map((item: Object) => new Item(item));
	}

	private _setStorage(items: Array<Item>): void {
		this._localStorage.setItem(
			'TodoList', 
			JSON.stringify(items)
		);
		this._publish();
	}

	initialize(): Store {
		this._getStorage();
		this._publish();
		return this;
	}

	insert(item: Item): void{
		this._setStorage(
			this._items = this._getStorage().concat([item])
		);
	}

	subscribe(subscriber: Function): void {
		this._subscribers.push(subscriber);
	}

	private _publish(): void {
    	this._subscribers.forEach(s => s(this._getStorage()));
  	}
}

