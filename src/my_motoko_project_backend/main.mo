import Hash "mo:base/Hash";
import HashMap "mo:base/HashMap";
import Iter "mo:base/Iter";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor {
    public type Product = {
        id: Nat;
        name: Text;
        price: Nat;
        description: Text;
        inStock: Bool;
    };

    private stable var nextProductId: Nat = 0;
    // Basit bir hash fonksiyonu kullanarak HashMap'i tanımlıyoruz
    private var products = HashMap.HashMap<Nat, Product>(0, Nat.equal, Hash.hash); 

    public shared(_msg) func addProduct(name: Text, price: Nat, description: Text) : async Nat {
        let productId = nextProductId;
        let product: Product = {
            id = productId;
            name = name;
            price = price;
            description = description;
            inStock = true;
        };
        
        products.put(productId, product);
        nextProductId += 1;
        return productId;
    };

    public query func getAllProducts() : async [Product] {
        let productIter = products.vals();
        return Iter.toArray(productIter);
    };

    public query func getProduct(id: Nat) : async ?Product {
        return products.get(id);
    };

    public shared(_msg) func updateStockStatus(id: Nat, inStock: Bool) : async Bool {
        switch (products.get(id)) {
            case (null) { false };
            case (?product) {
                let updatedProduct: Product = {
                    id = product.id;
                    name = product.name;
                    price = product.price;
                    description = product.description;
                    inStock = inStock;
                };
                products.put(id, updatedProduct);
                true;
            };
        };
    };
};
