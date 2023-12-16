class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (this.cache.has(key)) {
            const value = this.cache.get(key);
            this.cache.delete(key);
            this.cache.set(key, value); // Move accessed item to the end (most recently used)
            return value;
        }
        return -1;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const oldestKey = this.cache.keys().next().value; // Evict the least recently used item
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }
}
const cache = new LRUCache(1000); // Initialize cache with a capacity of 1000

cache.put("key1", "value1");
const value = cache.get("key1");
