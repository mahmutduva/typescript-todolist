
export class Item {
	
	private _id      : number;
	private _content : string;
	private _done    : boolean;

	constructor(_item: string | any) {
		if (typeof _item === 'string'){
			this._id = 1;
			this._content = _item;
			this._done = false;
		} 
		else {
			this._id = _item._id;
			this._content = _item._content;
			this._done = _item._done;
		}
	}

	get id      (): number  { return this._id; }
	get content (): string  { return this._content; }
	get done    (): boolean { return this._done; }

	set content (_content: string) { this._content = _content; }

	equal(_item: Item): boolean { return this._id === _item.id; }

	toggle(): boolean { return this._done = !this._done; }

}