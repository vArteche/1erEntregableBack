class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){
        //validar campos obligatorios
        if (!title ?? !description ?? !price ?? !thumbnail ?? !code ?? !stock){
            console.error('Complete los campos obligatorios del nuevo producto.');
            return;
        }

        //encontrar repeticiones de n° de codigo
        if (this.products.some(product => product.code === code)){
            console.error('Este código de producto ya se encuentra registrado.');
            return;
        }

        //generador de id
        const id = this.products.length + 1;

        //agregar el producto a la lista
        const newProduct = {id, title, description, price, thumbnail, code, stock}
        this.products.push(newProduct);
        console.log( `producto ${newProduct.title} agregado correctamente`)
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
            return product;
        } else {
            console.error("Producto no encontrado.");
        }
    }
}

//uso

const manager = new ProductManager();
console.log(manager.getProducts());

const productData = ["Camiseta", "Camiseta de algodón", 19.99, "camiseta.jpg", "C001", 50];
manager.addProduct(...productData);

manager.addProduct("Papa", "Papa blanca x kg", 600, "papa.jpg", "C002", 60);

const productList = manager.getProducts();
console.log(productList);

const getById = manager.getProductById(2);
console.log(getById);
