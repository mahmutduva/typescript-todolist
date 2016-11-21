import {Item} from './item';

export function itemTpl(item: Item): string {
  return [
    `<div class="view">
    	<li data-id="${item.id}">
    		<input type="checkbox" class="toggle" ${item.done ? 'checked' : ''} />
    		<label ${item.done ? 'style="text-decoration: line-through"' : ''}>${item.content}</label>
    		<button class="destroy"></button>
    	</li>
    </div>`
  ].join('');
}

export function itemListTpl(items: Array<Item>): string {
  return items.map((t: Item) => itemTpl(t)).join('');
}

