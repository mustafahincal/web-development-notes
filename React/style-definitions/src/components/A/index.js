import styles from "./styles.module.css";

function A() {
   return <div className={styles.title}>A</div>;
}

//* style verirken , farklı .css dosyalarında olmalarına rağmen className aynı olursa en son tanımlanan uygulanır. Çünkü dom'da ... class="title" .. oluyor ve birden fazla title olamaz öyle düşününce.

// import "./styles.css";
// function A() {
//     return <div className="title">A</div>;
//  }

//* ya aynı isimde class'lar kullanmaacağız ya da , css dosyasını tanımlarken module ile tanımlayacağız. Module yapınca verilen className özel id'li oluyor o yüzden çakışmıyor.

export default A;
