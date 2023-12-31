const Product = require('./model/product')

class SampleDb {
    constructor(){
        this.products = [
        
            {
                ID: 1,
                name: "フライ返し",
                category: "調理",
                manufacturer: "ダイヤモンド",
                price: 300,
                image_path: "/images/item01_thumb.jpg",
                stock: 10,
                description: "焦げついていても大丈夫",
                created_at: "2023-06-20 16:04:59.778851",
                updated_at: "2023-06-20 16:04:59.778867"
            },
            {
                ID: 2,
                name: "包丁",
                category: "調理",
                manufacturer: "ダイヤモンド",
                price: 3000,
                image_path: "/images/item02_thumb.jpg",
                stock: 5,
                description: "よく切れる",
                created_at: "2023-06-20 16:04:59.780814",
                updated_at: "2023-06-20 16:04:59.780858"
            },
            {
                ID: 3,
                name: "やかん",
                category: "調理",
                manufacturer: "真珠",
                price: 1500,
                image_path: "/images/item03_thumb.jpg",
                stock: 2,
                description: null,
                created_at: "2023-06-20 16:04:59.782000",
                updated_at: "2023-06-20 16:04:59.782008"
            },
            {
                ID: 4,
                name: "電動ドリル",
                category: "工具",
                manufacturer: "サファイア",
                price: 4500,
                image_path: null,
                stock: 12,
                description: null,
                created_at: "2023-06-20 16:04:59.782527",
                updated_at: "2023-06-20 16:04:59.782532"
            }
    
    
        ]
    }

    async initDb(){
        await this.cleanDb()
        this.pushProductsToDb()
    }

    async cleanDb() {
        await Product.deleteMany({})
    }

    pushProductsToDb() {
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    seeDb(){
        this.pushProductsToDb()
    }
}

module.exports = SampleDb