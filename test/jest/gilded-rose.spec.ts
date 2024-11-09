import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
    it('should foo', () => {
        // Arrange
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);

        // Act
        const items = gildedRose.updateQuality();

        // Assert
        expect(items[0].name).toBe('foo');
    });

    it('sword quality drops by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sword', 1, 1)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
    })

    it('Sulfuras should be constant', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 80)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    })

    it('Aged Brie should increase by 1', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 49)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    })

    it('Aged Brie should not be over 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    })

    it('The quality should not be below 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('random', 10, 0)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(9);
    })

    it('Backstage passes sellIn > 10 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 12, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(3);
      expect(items[0].sellIn).toBe(11);
    })

    it('Backstage passes sellIn == 10 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(4);
      expect(items[0].sellIn).toBe(9);
    })

    it('Backstage passes sellIn == 5 days', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 2)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(5);
      expect(items[0].sellIn).toBe(4);
    })

    it('Backstage passes quality drops to 0', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(0);
      expect(items[0].sellIn).toBe(-2);
    })

    it('Backstage passes should not be over 50', () => {
      // Arrange
      const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)]);

      // Act
      const items = gildedRose.updateQuality();

      // Assert
      expect(items[0].quality).toBe(50);
      expect(items[0].sellIn).toBe(9);
    })
});
