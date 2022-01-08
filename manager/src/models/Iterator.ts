interface Iterator<T> {
    current(): T;

    next(): T;

    prev(): T;

    valid(): boolean;

    setDateIncrease(): void;

    setDateDecrease(): void;
}

export class Collection<T> {
    private items: T[] = [];

    constructor(items: T[]){
        this.items = items;
    }

    public addItem(item: T){
        this.items.push(item);
    }

    public getItems(): T[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public setDateIncrease() {
        this.items = this.items.sort(
            (a: any, b: any) => a.create_at - b.created_at
        );
    }

    public setDateDecrease() {
        this.items = this.items.sort(
            (a: any, b: any) => b.create_at - a.created_at
        );
    }

    getIterator(): Iterator<T> {
        return new ListIterator<T>(this);
    }
}

export default class ListIterator<T> implements Iterator<T> {
    private position: number = 0;
    private collection: Collection<T>;

    constructor(collection: Collection<T>) {
        this.collection = collection;
    }

    next(): T {
        const item = this.collection.getItems()[this.position];
        this.position += 1;
        return item;
    }

    current(): T {
        return this.collection.getItems()[this.position];
    }

    prev(): T {
        const item = this.collection.getItems()[this.position - 1];
        this.position -= 1;
        return item;
    }

    valid(): boolean {
        return this.position < this.collection.getCount();
    }

    setDateIncrease() {
        this.collection.setDateIncrease();
    }

    setDateDecrease() {
        this.collection.setDateDecrease();
    }
}
