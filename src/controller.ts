import { Item } from './item';
import { Store } from './store';
import { View } from './view';


export class Controller {

	private _view : View;
	private _store : Store;
	
	constructor() {
		this._view = new View();
		this._store = new Store();

		this._view.onSubmit((value: string) => {
			const item: Item = new Item(value);
			this._store.insert(item);
		});

		this._store.subscribe((items: Array<Item>) => {
			this._view.render(items);
		});

		this._store.initialize();

	}
}