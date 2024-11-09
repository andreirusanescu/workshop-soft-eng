export class Item {
    name: string;
    sellIn: number;
    quality: number;
    degrading: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
        this.degrading = 1
    }
}

export class GildedRose {
    items: Array<Item>;
    
    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {

        for (var elem of this.items) {
            if (elem.name == 'Aged Brie') {
                if (elem.quality <= 50 - elem.degrading) {
                    elem.quality += 1 * elem.degrading
                }
                
            } else if (elem.name == 'Backstage passes to a TAFKAL80ETC concert') {
                if (elem.quality <= 50 - elem.degrading)
                    elem.quality += 1 * elem.degrading

                if (elem.sellIn <= 10 && elem.quality <= 50 - elem.degrading)
                    elem.quality += 1 * elem.degrading

                if (elem.sellIn <= 5 && elem.quality <= 50 - elem.degrading)
                    elem.quality += 1 * elem.degrading
            } else if (elem.name == 'Conjured') {
                if (elem.quality >= elem.degrading) {
                    elem.quality -= 1 * elem.degrading
                }
                if (elem.quality >= elem.degrading) {
                    elem.quality -= 1 * elem.degrading
                }
            } else if (elem.name != 'Sulfuras, Hand of Ragnaros') {
                if (elem.quality >= elem.degrading) {
                    elem.quality -= 1 * elem.degrading
                }
            }

            if (elem.name != 'Sulfuras, Hand of Ragnaros') {
                elem.sellIn -= 1
            }

            if (elem.sellIn < 0) {
                if (elem.name == 'Backstage passes to a TAFKAL80ETC concert') {
                    elem.quality = 0
                }
                elem.degrading = 2
            }
        }
        return this.items;
    }
}